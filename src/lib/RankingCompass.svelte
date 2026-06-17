<script lang="ts">
  import type { RankingVector } from "../players";

  let { vector, consensusStrength, size = 20 }: {
    vector: RankingVector;
    consensusStrength: number;
    size?: number;
  } = $props();

  // Scale the vector for display (max magnitude is ~1.73 for perfect consensus)
  let displayX = $derived((vector.x / 1.73) * (size * 0.4));
  let displayY = $derived(-(vector.y / 1.73) * (size * 0.4)); // Negative because SVG Y is inverted

  // Opacity based on consensus strength
  let opacity = $derived(consensusStrength === 0 ? 0.2 : 0.3 + consensusStrength * 0.7);

  // Color based on consensus strength
  let strokeColor = $derived(
    consensusStrength > 0.75 ? "#22c55e" : 
    consensusStrength > 0.5 ? "#eab308" :
    consensusStrength > 0.25 ? "#f97316" : "#ef4444"
  );
</script>

<svg width={size} height={size} viewBox="{-size/2} {-size/2} {size} {size}" style="opacity: {opacity}">
  <!-- Background circle -->
  <circle cx="0" cy="0" r={size * 0.45} fill="none" stroke="#444" stroke-width="0.5" />
  
  <!-- Axis lines -->
  <line x1="0" y1={-size * 0.45} x2="0" y2="0" stroke="#666" stroke-width="0.5" opacity="0.5" />
  <line x1={size * 0.32} y1={size * 0.32} x2="0" y2="0" stroke="#666" stroke-width="0.5" opacity="0.5" />
  <line x1={-size * 0.32} y1={size * 0.32} x2="0" y2="0" stroke="#666" stroke-width="0.5" opacity="0.5" />
  
  <!-- Labels -->
  <text x="0" y={-size * 0.35} text-anchor="middle" font-size="4" fill="#888">FF</text>
  <text x={size * 0.35} y={size * 0.35} text-anchor="middle" font-size="4" fill="#888">E</text>
  <text x={-size * 0.35} y={size * 0.35} text-anchor="middle" font-size="4" fill="#888">FP</text>
  
  <!-- Result vector -->
  {#if vector.magnitude > 0}
    <line 
      x1="0" 
      y1="0" 
      x2={displayX} 
      y2={displayY} 
      stroke={strokeColor}
      stroke-width="1.5"
      marker-end="url(#arrowhead-{size})"
    />
  {/if}
  
  <!-- Arrow marker definition -->
  <defs>
    <marker 
      id="arrowhead-{size}" 
      markerWidth="3" 
      markerHeight="3" 
      refX="2" 
      refY="1.5" 
      orient="auto"
    >
      <polygon points="0 0, 3 1.5, 0 3" fill={strokeColor} />
    </marker>
  </defs>
  
  <!-- Center point -->
  <circle cx="0" cy="0" r="1" fill="#fff" />
</svg>

<style>
  svg {
    display: block;
  }
  
  text {
    user-select: none;
    font-family: monospace;
  }
</style>