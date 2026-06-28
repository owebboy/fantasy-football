import { type Writable, writable } from 'svelte/store';
import type { Player } from '../players';

export type SortBy = 'ff' | 'fp' | 'avg';

interface PersistedStores {
  keepers: Writable<Player[]>;
  draft: Writable<Player[]>;
  currentTab: Writable<string>;
  sortBy: Writable<SortBy>;
  ready: Promise<void>;
}

function createPersistedStores(): PersistedStores {
  const createStore = <T>(
    key: string,
    initialValue: T,
  ): { store: Writable<T>; ready: Promise<void> } => {
    const store = writable<T>(initialValue);

    const ready = new Promise<void>((resolve) => {
      if (typeof window !== 'undefined') {
        try {
          const storedValue = localStorage.getItem(key);
          if (storedValue) {
            store.set(JSON.parse(storedValue) as T);
          }
        } catch {
          // Corrupted JSON or storage unavailable — fall back to initial value
          console.warn(`[stores] Could not restore "${key}", using default.`);
        }
        resolve();
      } else {
        resolve();
      }
    });

    if (typeof window !== 'undefined') {
      store.subscribe((value) => {
        try {
          localStorage.setItem(key, JSON.stringify(value));
        } catch {
          // Storage full or unavailable — silently skip persistence
          console.warn(`[stores] Could not persist "${key}".`);
        }
      });
    }

    return { store, ready };
  };

  const { store: keepers, ready: keepersReady } = createStore<Player[]>('keepers', []);
  const { store: draft, ready: draftReady } = createStore<Player[]>('draft', []);
  const { store: currentTab, ready: currentTabReady } = createStore<string>(
    'currentTab',
    'all players',
  );
  const { store: sortBy, ready: sortByReady } = createStore<SortBy>('sortBy', 'fp');

  const ready = Promise.all([keepersReady, draftReady, currentTabReady, sortByReady]).then(
    () => {},
  );

  return { keepers, draft, currentTab, sortBy, ready };
}

export const stores = createPersistedStores();
