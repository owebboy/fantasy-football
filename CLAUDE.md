# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Fantasy Football draft assistant application built with Svelte, TypeScript, and Vite. The app provides a visual grid interface for tracking NFL players during fantasy drafts, with features for managing keepers and draft picks.

## Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Type checking and Svelte checking
npm run check
```

## Architecture

### Core Features

- **Player Grid**: 12-column snake draft layout showing all players with position-based coloring
- **Three Tabs**:
  - "all players": View all available players
  - "keepers": Manage keeper selections
  - "draft": Track drafted players with round/pick calculations

### Key Components

**App.svelte**: Main component orchestrating the UI with:

- Tab navigation between views
- Player grid rendering with chunked layout (12 players per row, snake draft pattern)
- Sidebar showing selected players for keepers/draft tabs
- Player selection/deselection logic

**State Management** (src/lib/stores.ts):

- Persisted Svelte stores using localStorage
- Three main stores: `keepers`, `draft`, `currentTab`
- Promise-based initialization for async localStorage reads

**Player Data** (src/players.ts):

- Static array of 300 NFL players with rankings
- Player interface includes: rank, name, team, position (with position rank), price, bye week
- Position types: QB, RB, WR, TE, K, DST

**Helper Functions** (src/lib/helpers.ts):

- `chunkedPlayers`: Creates 12-player rows with snake draft reversal
- `calculatePositionColor`: Returns position-specific colors
- `currentPick`/`currentRound`: Calculate draft position
- `findPlayer`/`togglePlayer`: Player selection utilities

### Position Color Scheme

- QB: #00509E (blue)
- RB: #228B22 (green)
- WR: #C60C30 (red)
- TE: #c46c00 (orange)
- DST: #6A0DAD (purple)
- K: #333333 (dark gray)

## Technical Notes

- Uses Vite for fast HMR and build performance
- TypeScript for type safety throughout
- Svelte stores with localStorage persistence for maintaining state across sessions
- Responsive design with mobile breakpoint at 1091px
- CSS Grid for player layout with dynamic positioning
