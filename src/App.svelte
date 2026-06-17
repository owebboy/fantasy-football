<script lang="ts">
import { derived } from 'svelte/store';
import {
  calculatePositionColor,
  chunkedPlayers,
  currentPick,
  currentRound,
  findPlayer,
  togglePlayer,
} from './lib/helpers';
import RankingArrow from './lib/RankingArrow.svelte';
import { stores } from './lib/stores';
import players, { type Player } from './players';

// biome-ignore lint/correctness/noUnusedVariables: used in template {#await ready}
let { keepers, currentTab, draft, ready } = stores;

const playersList = (isDraft: boolean, drafted: Player[], keepers: Player[], players: Player[]) => {
  if (!isDraft) {
    return players;
  }

  return [
    ...drafted,
    ...players.filter((player) => !findPlayer(player, keepers) && !findPlayer(player, drafted)),
  ];
};

// Derived store for currentPlayerSet
const currentPlayerSet = derived(
  [keepers, currentTab, draft],
  (d) => {
    // Return the chunked player list
    return chunkedPlayers(playersList($currentTab === 'draft', $draft, $keepers, players));
  },
  [], // Initial value for currentPlayerSet
);

const onClick = (player: Player) => () => {
  switch ($currentTab) {
    case 'keepers':
      $keepers = togglePlayer(player, $keepers);
      break;
    case 'draft':
      $draft = togglePlayer(player, $draft);
  }
};

const clearKeepers = () => {
  if (!$keepers.length) return;
  if (!confirm(`Clear all Keepers? (This will delete ${$keepers.length})`)) return;
  // Backup for one-shot undo
  try {
    sessionStorage.setItem('keepers-backup', JSON.stringify($keepers));
  } catch {}
  $keepers = [];
};

const clearDraft = () => {
  if (!$draft.length) return;
  if (!confirm(`Clear all Drafted Players? (This will delete ${$draft.length})`)) return;
  try {
    sessionStorage.setItem('draft-backup', JSON.stringify($draft));
  } catch {}
  $draft = [];
};

const undoClear = (which: 'keepers' | 'draft') => {
  const key = `${which}-backup`;
  try {
    const backup = sessionStorage.getItem(key);
    if (backup) {
      const data = JSON.parse(backup);
      if (which === 'keepers') $keepers = data;
      else $draft = data;
      sessionStorage.removeItem(key);
    }
  } catch {}
};
</script>

{#await ready}
  <p>loading...</p>
{:then}
  <header>
    <div role="tablist" aria-label="Player views">
      {#each ["all players", "keepers", "draft"] as tab}
        <button
          role="tab"
          aria-selected={$currentTab === tab}
          onclick={() => ($currentTab = tab)}
          class:selected={$currentTab === tab}
        >
          {tab}
        </button>
      {/each}
    </div>
    <div class="header-right">
      <div class="legend-text">
        <span><strong>Arrows:</strong> Show disagreement</span>
        <span>•</span>
        <span>Longer = more variance</span>
      </div>
      <nav aria-label="Data actions">
        <button
          disabled={!$keepers.length}
          onclick={clearKeepers}>Clear Keepers ({$keepers.length || 0})</button
        >
        <button
          disabled={!$draft.length}
          onclick={clearDraft}>Clear Draft ({$draft.length || 0})</button
        >
      </nav>
    </div>
  </header>
  <main>
    <div class="grid">
      {#each $currentPlayerSet as round}
        {#each round as player (player.rank)}
          <button
            class="player"
            onclick={onClick(player)}
            class:player-selected={findPlayer(player, $keepers) ||
              findPlayer(player, $draft)}
            style="background-color: {calculatePositionColor(
              player.position.position
            )}"
            class:player-keeper={findPlayer(player, $keepers)}
            class:player-drafted={findPlayer(player, $draft)}
            disabled={$currentTab === "keepers" &&
              findPlayer(player, $draft) !== undefined}
            title="{player.name} - Variance: {player.variance || 0}{player.rankings ? ` | FF: ${player.rankings.ff || 'N/A'} | ESPN: ${player.rankings.espn || 'N/A'} | FP: ${player.rankings.fp || 'N/A'}` : ''}"
          >
            <div class="player-top">
              <div class="player-meta">
                <p class="player-rank">
                  #{player.rank}
                </p>
                <p class="player-position">{player.position.position}</p>
              </div>
            </div>
            <div class="player-center">
              <p class="player-name">{player.name}</p>
            </div>
            <div class="player-bottom">
              <p>{player.team}</p>
              <div class="compass-container">
                <RankingArrow 
                  vector={player.vector} 
                  consensusStrength={player.consensusStrength}
                  size={32}
                />
              </div>
            </div>
          </button>
        {/each}
      {/each}
    </div>
    {#if $currentTab !== "all players"}
      <aside>
        {#if $currentTab === "keepers"}
          <h2>Keepers ({$keepers.length})</h2>
          <div class="draft">
            {#each $keepers as player}
              <div class="draft-player" title="Variance: {player.variance || 0}">
                <div class="rank">{player.rank}</div>
                <div class="name">{player.name}</div>
                <div class="compass-small">
                  <RankingArrow 
                    vector={player.vector} 
                    consensusStrength={player.consensusStrength}
                    size={14}
                  />
                </div>
              </div>
            {:else}
              <p class="empty-hint">Click players in the grid to mark them as keepers.</p>
            {/each}
          </div>
        {/if}
        {#if $currentTab === "draft"}
          <div class="tab-header">
            <h2>Draft</h2>
            <div>
              <p>Round: {currentRound($draft)}</p>
              <p>Pick: {currentPick($draft)}</p>
            </div>
          </div>

          <div class="draft">
            {#each $draft as player, idx}
              <div class="draft-player" title="Variance: {player.variance || 0}">
                <div class="rank">{idx + 1}</div>
                <div class="name">{player.name}</div>
                <div class="compass-small">
                  <RankingArrow 
                    vector={player.vector} 
                    consensusStrength={player.consensusStrength}
                    size={14}
                  />
                </div>
              </div>
            {:else}
              <p class="empty-hint">Click players in the grid as they are drafted to track the draft board.</p>
            {/each}
          </div>
        {/if}
      </aside>
    {/if}
  </main>
{/await}

<style>
  button:disabled {
    opacity: 0.5;
    cursor: not-allowed;
  }

  p,
  h2 {
    margin: 0;
  }

  main {
    display: flex;
    justify-content: space-between;
  }

  aside {
    border-left: 2px solid #444;
    padding: 1rem;
    width: 20%;
    background: rgba(2, 2, 2, 0.9);
    backdrop-filter: blur(0.5px);
  }

  aside h2 {
    font-size: 1.5rem;
    font-weight: 500;
    margin-bottom: 1rem;
    border-bottom: 2px solid #444;
    display: flex;
    justify-content: space-between;
  }

  .player-keeper {
    filter: grayscale(1) brightness(0.6);
  }
  .player-keeper::before {
    content: "Keeper";
    background: rgba(255, 255, 255, 0.6);
    color: #000;
    padding: 0;
    font-size: 0.5rem;
    width: 100%;
    text-transform: uppercase;
  }
  aside .draft {
    display: grid;

    width: 100%;
  }

  aside .draft-player {
    padding: 0.1rem;
    border: 1px solid #444;
    display: flex;
    align-items: center;
    gap: 0.2rem;
  }

  aside .draft-player .name {
    font-weight: 500;
    text-align: center;
    font-size: 0.8rem;
    line-height: 1;
    flex: 1;
  }

  aside .draft-player .rank {
    font-size: 0.7rem;
    font-weight: 500;
  }

  aside .draft-player .compass-small {
    display: flex;
    align-items: center;
  }

  .empty-hint {
    color: #888;
    font-size: 0.8rem;
    font-style: italic;
    padding: 0.5rem 0;
  }

  @media (max-width: 1092px) {
    main {
      flex-direction: column;
    }

    aside {
      border-left: 0;
      border-top: 2px solid #444;
      padding-top: 1rem;
      width: calc(100% - 2rem);
      position: sticky;
      bottom: 0;
      max-height: 20vh;
      overflow-y: auto;
    }
    aside .draft {
      grid-auto-flow: column;
      grid-template-rows: repeat(8, minmax(0, 1fr));
    }
  }

  .grid {
    margin: 1rem;
    display: grid;
    grid-template-columns: repeat(12, 1fr);
    gap: 1px;
    place-items: center;
  }

  .player {
    border-radius: 4px;
    color: #fff;
    height: 90px;
    width: 90px;
    appearance: none;
    padding: 0;
    display: flex;
    flex-direction: column;
    border: 1px solid #222;
    margin: 0px;
    cursor: pointer;
    background: transparent;
    position: relative;
  }
  .player-selected {
    filter: grayscale(0.5) brightness(0.6);
  }

  .player-top {
    height: 16px;
    padding: 4px 4px 0 4px;
  }
  
  .player-center {
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0 4px;
  }

  .player-name {
    font-weight: 500;
    font-size: 0.85rem;
    text-align: center;
    word-break: break-word;
    hyphens: auto;
    margin: 0;
    line-height: 1.1;
  }

  .player-meta {
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    font-size: 0.7rem;
    line-height: 1;
  }
  
  .player-meta p {
    margin: 0;
    font-weight: 600;
  }

  .player-bottom {
    height: 20px;
    display: flex;
    align-items: flex-end;
    padding: 0 4px 4px 4px;
  }
  
  .player-bottom > p {
    font-size: 0.75rem;
    font-weight: 400;
    margin: 0;
    line-height: 1;
  }

  .compass-container {
    position: absolute;
    right: -8px;
    bottom: -8px;
    width: 32px;
    height: 32px;
    pointer-events: none;
    z-index: 1;
  }

  header {
    display: flex;
    align-items: flex-end;
    justify-content: space-between;
    border-bottom: 2px solid #444;
    margin-top: 1rem;
    flex-wrap: nowrap;
  }
  
  .header-right {
    display: flex;
    align-items: center;
    gap: 1rem;
  }
  
  .legend-text {
    display: flex;
    gap: 0.5rem;
    font-size: 0.75rem;
    color: #aaa;
    align-items: center;
    padding: 0 1rem;
    border-left: 1px solid #444;
  }
  
  .legend-text strong {
    color: #fff;
  }

  nav {
    margin-left: 1rem;
    margin-right: 1rem;
    display: flex;
  }

  nav button {
    border: 0;
    font-size: large;
    background: transparent;
    border-top: 2px solid #444;
    border-left: 2px solid #444;
    padding: 0.5rem 1rem;
    cursor: pointer;
    color: #fff;
    text-transform: lowercase;
  }

  nav button:last-child {
    border-right: 2px solid #444;
  }

  [role="tablist"] button.selected {
    background: #444;
  }

  @media (max-width: 1091px) {
    header nav button {
      font-size: small;
      padding: 0.5rem 0.5rem;
    }
    .player {
      height: 60px;
      width: 60px;
      padding: 2px;
    }
    .player-name {
      font-size: 0.65rem;
    }
    .player-meta {
      font-size: 0.5rem;
    }
    .player-bottom > p {
      font-size: 0.55rem;
    }
    .player-bottom {
      height: 20px;
    }
    .compass-container {
      right: -2px;
      bottom: -2px;
    }
  }
</style>
