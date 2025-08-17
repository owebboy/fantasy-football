<script lang="ts">
  const examples = [
    { x: 0, y: 1, label: "Strong FF", color: "#22c55e" },
    { x: 0.5, y: 0.3, label: "FF + ESPN", color: "#eab308" },
    { x: -0.5, y: 0.3, label: "FF + FP", color: "#eab308" },
    { x: 0, y: -0.7, label: "ESPN + FP", color: "#f97316" },
  ];
</script>

<div class="legend">
  <h3>Ranking Compass</h3>
  
  <div class="compass-display">
    <svg width="120" height="120" viewBox="-60 -60 120 120">
      <!-- Background circle -->
      <circle cx="0" cy="0" r="50" fill="#1a1a1a" stroke="#444" stroke-width="1" />
      
      <!-- Grid lines -->
      <line x1="0" y1="-50" x2="0" y2="50" stroke="#333" stroke-width="0.5" />
      <line x1="-50" y1="0" x2="50" y2="0" stroke="#333" stroke-width="0.5" />
      
      <!-- Axis indicators -->
      <line x1="0" y1="-50" x2="0" y2="-30" stroke="#666" stroke-width="2" />
      <line x1="35" y1="35" x2="21" y2="21" stroke="#666" stroke-width="2" />
      <line x1="-35" y1="35" x2="-21" y2="21" stroke="#666" stroke-width="2" />
      
      <!-- Labels -->
      <text x="0" y="-55" text-anchor="middle" font-size="10" fill="#fff" font-weight="bold">FF</text>
      <text x="45" y="45" text-anchor="middle" font-size="10" fill="#888">ESPN</text>
      <text x="-45" y="45" text-anchor="middle" font-size="10" fill="#888">FP</text>
      
      <!-- Example vectors -->
      {#each examples as example}
        <line 
          x1="0" 
          y1="0" 
          x2={example.x * 40} 
          y2={-example.y * 40}
          stroke={example.color}
          stroke-width="2"
          opacity="0.6"
          marker-end="url(#arrowhead-{example.color.slice(1)})"
        />
      {/each}
      
      <!-- Arrow marker definitions -->
      <defs>
        {#each examples as example}
          <marker 
            id="arrowhead-{example.color.slice(1)}" 
            markerWidth="4" 
            markerHeight="4" 
            refX="3" 
            refY="2" 
            orient="auto"
          >
            <polygon points="0 0, 4 2, 0 4" fill={example.color} />
          </marker>
        {/each}
      </defs>
      
      <!-- Center point -->
      <circle cx="0" cy="0" r="2" fill="#fff" />
    </svg>
  </div>
  
  <div class="info">
    <div class="info-section">
      <h4>When Arrows Appear</h4>
      <p>No arrow = sources agree</p>
      <p>Arrow = disagreement between sources</p>
    </div>
    
    <div class="info-section">
      <h4>Direction</h4>
      <p>Points toward sources that disagree</p>
      <p>Shows which source ranks differently</p>
    </div>
    
    <div class="info-section">
      <h4>Length</h4>
      <p>Longer = stronger ranking confidence</p>
      <p>Shorter = more disagreement</p>
    </div>
    
    <div class="info-section">
      <h4>Color</h4>
      <div class="color-item">
        <span class="color-box" style="background: #22c55e"></span>
        Strong consensus
      </div>
      <div class="color-item">
        <span class="color-box" style="background: #eab308"></span>
        Moderate
      </div>
      <div class="color-item">
        <span class="color-box" style="background: #f97316"></span>
        Weak
      </div>
      <div class="color-item">
        <span class="color-box" style="background: #ef4444"></span>
        High variance
      </div>
    </div>
  </div>
</div>

<style>
  .legend {
    background: rgba(0, 0, 0, 0.8);
    border: 1px solid #444;
    border-radius: 4px;
    padding: 1rem;
    margin: 1rem;
    max-width: 200px;
  }
  
  h3 {
    margin: 0 0 0.5rem 0;
    font-size: 1rem;
    color: #fff;
    border-bottom: 1px solid #444;
    padding-bottom: 0.5rem;
  }
  
  h4 {
    margin: 0.5rem 0 0.25rem 0;
    font-size: 0.8rem;
    color: #ccc;
  }
  
  .compass-display {
    display: flex;
    justify-content: center;
    margin: 1rem 0;
  }
  
  .info {
    font-size: 0.75rem;
    color: #aaa;
  }
  
  .info-section {
    margin-bottom: 0.75rem;
  }
  
  .info-section p {
    margin: 0.25rem 0;
  }
  
  .color-item {
    display: flex;
    align-items: center;
    gap: 0.5rem;
    margin: 0.25rem 0;
  }
  
  .color-box {
    width: 12px;
    height: 12px;
    border-radius: 2px;
  }
  
  text {
    user-select: none;
    font-family: monospace;
  }
</style>