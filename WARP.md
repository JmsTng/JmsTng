# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Common Development Commands

```bash
# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview

# Install dependencies
npm install
```

## Project Architecture

This is a personal portfolio website built with vanilla HTML, CSS, and JavaScript, using Vite as the build tool. The project is intentionally minimal with no frameworks, focusing on creative 3D animations and scroll interactions.

### Core Files Structure

- `index.html` - Main HTML template with cube container and page sections
- `pages.js` - Page navigation and state management
- `scroll.js` - Scroll-based animations and cube transformations  
- `cube.css` - 3D cube styling and keyframe animations
- `styles.css` - Global styles, color scheme, and utility classes
- `package.json` - Minimal Vite configuration for ES modules

### 3D Cube Animation System

The centerpiece is an animated 3D cube with multiple faces that respond to scroll position:

- **Cube Structure**: 5 cube faces (`#front`, `#back`, `#left`, `#right`, `#bottom`) positioned with fixed positioning and CSS transforms
- **Scroll Integration**: Uses CSS custom properties (`--cube-scroll`, `--scroll`) to drive animations via `animation-delay`
- **Animation Control**: Each face has individual keyframe animations (`spinBottom`, `spinLeft`, etc.) that are paused and controlled by scroll position
- **Z-index Management**: Complex z-index choreography ensures proper face visibility during rotations

### Scroll Animation Architecture

The scroll system in `scroll.js` implements:

- **Dual Scroll Tracking**: Separate calculations for absolute scroll (`absoluteScroll`) and cube-specific scroll (`cubeScroll`)
- **Easing Functions**: Custom `ease()` function using cosine interpolation for smooth transitions
- **Threshold-based Behavior**: `scrollThreshold` of 1.15 controls when cube starts moving off-screen
- **CSS Custom Property Updates**: Real-time updates to `--cube-scroll` and `--scroll` variables

### Page Navigation System

The `pages.js` implements a simple SPA-like navigation:

- **History API**: Uses `pushState` for URL management without page reloads
- **Display Toggle**: Shows/hides sections based on current route
- **Special Handling**: Bio section has conditional display logic tied to home page

### Styling Conventions

- **CSS Custom Properties**: Extensive use of CSS variables for colors (`--red`, `--green`, etc.) and cube dimensions
- **JetBrains Mono**: Primary font with light weight (200) for clean, technical aesthetic
- **Color Scheme**: Dark theme with `#272624` background and accent colors for interactive elements
- **Utility Classes**: `.hover`, `.mute`, `.small`, color classes (`.r`, `.g`, `.b`, `.y`)

## Development Notes

- No TypeScript or frameworks - pure vanilla JS with ES modules
- Vite handles module resolution and hot reloading
- CSS animations are performance-optimized using `transform` and `animation-play-state: paused`
- Scroll events are not throttled but use efficient CSS property updates
- Fixed positioning is used extensively for the cube system