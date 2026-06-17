<script lang="ts">
  import type { RankingVector } from "../players";

  let { vector, consensusStrength, size = 20 }: {
    vector: RankingVector;
    consensusStrength: number;
    size?: number;
  } = $props();

  // Calculate arrow rotation based on vector direction
  // Math.atan2 gives angle where 0° = right, but we want 0° = up
  // So we rotate by 90° to make up = 0°
  let rotation = $derived(vector.angle + 90);
  
  // Show arrow only when there's actual disagreement between multiple sources
  let showArrow = $derived(consensusStrength > 0 && consensusStrength < 0.75 && vector.magnitude > 0.1);
  
  // Fixed circle radius for consistent appearance (slightly smaller proportion for larger sizes)
  let circleRadius = $derived(size * 0.3);
  
  // Scale arrow size to fit within the circle (leave room for arrow head)
  let arrowLength = $derived(showArrow ? Math.min((1 - consensusStrength) * circleRadius * 0.8, circleRadius - 4) : 0);
  
  // Opacity based on variance magnitude
  let opacity = $derived(showArrow ? 0.5 + (1 - consensusStrength) * 0.5 : 0);

  // Use white for the arrow
  let color = $derived("#ffffff");
</script>

<svg width={size} height={size} viewBox="0 0 {size} {size}" style="opacity: {opacity}">
  {#if showArrow}
    <!-- Magnitude circle -->
    <circle 
      cx={size/2} 
      cy={size/2} 
      r={circleRadius}
      fill="none"
      stroke={color}
      stroke-width="1"
      opacity="0.5"
    />
    
    <!-- Arrow -->
    <g transform="translate({size/2}, {size/2}) rotate({rotation})">
      <!-- Arrow shaft -->
      <line 
        x1="0" 
        y1="0" 
        x2="0" 
        y2={-arrowLength + 2}
        stroke={color}
        stroke-width="1.5"
      />
      <!-- Arrow head -->
      <polygon 
        points="-2,{-arrowLength + 4} 2,{-arrowLength + 4} 0,{-arrowLength}"
        fill={color}
      />
    </g>
  {/if}
</svg>

<style>
  svg {
    display: block;
    position: absolute;
    top: 0;
    left: 0;
  }
</style>