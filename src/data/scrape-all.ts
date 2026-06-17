import { writeCache } from "./scrapers/utils";

async function main() {
  console.log("=== Fantasy Football Data Pipeline: Refresh ===\n");

  // Run sources independently — each writes its own cache on success
  const sources = [
    { name: "espn", module: "./scrapers/espn" },
    { name: "fleaflicker", module: "./scrapers/fleaflicker" },
    { name: "fantasypros", module: "./scrapers/fantasypros" },
  ];

  for (const { name, module: mod } of sources) {
    console.log(`\n--- ${name.toUpperCase()} ---`);
    try {
      const { scrape } = await import(mod);
      const players = await scrape();
      if (players.length > 0) {
        writeCache(name, players);
        console.log(`✓ ${name}: ${players.length} players cached`);
      } else {
        console.log(`⚠ ${name}: 0 players — cache not updated`);
      }
    } catch (err: any) {
      console.error(`✗ ${name} failed: ${err.message}`);
      console.log(`  (merge will use cached data for ${name})`);
    }
  }

  console.log("\n=== Refresh complete ===");
}

main().catch((err) => {
  console.error("Fatal:", err);
  process.exit(1);
});
