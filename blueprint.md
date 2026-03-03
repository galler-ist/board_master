# BoardMaster: BGG Integration Blueprint

## Project Overview
BoardMaster is a React-based web application for board game enthusiasts to discover games and share reviews. It leverages Firebase for data persistence and Cloudflare Pages Functions for backend logic and API proxying.

## Current Status & Design
- **Frontend**: React 19, Vite, TypeScript, Tailwind CSS (or similar).
- **Navigation**: Home, Reviews, Contact, About, Privacy Policy.
- **Database**: Firebase Firestore (currently used for `userReviews`).
- **Data Source**: Static data in `src/data/games.ts` (to be replaced/supplemented by BGG API).
- **Styling**: Modern, responsive UI with a focus on board game aesthetics.

## Proposed Changes: BGG API & Cloudflare Functions
The goal is to integrate the BoardgameGeek (BGG) XML API to provide real-time game data and allow users to write reviews based on these games.

### 1. Cloudflare Pages Functions
- Create a `functions/` directory for serverless logic.
- **BGG Proxy (`functions/api/bgg.ts`)**:
  - Fetches XML data from `https://boardgamegeek.com/xmlapi2`.
  - Parses XML and returns clean JSON to the frontend.
  - Handles search queries (`/api/bgg?search=...`) and game details (`/api/bgg?id=...`).

### 2. Frontend Integration
- **Search Component**: Allow users to search for games on BGG.
- **Game Detail View**: Display information (image, description, players, time) fetched from the BGG API.
- **Enhanced Reviews**: Update the review system to link reviews to specific BGG game IDs.

### 3. Implementation Plan
- [x] Create `functions/api/bgg.ts` with XML parsing logic.
- [x] Install necessary dependencies for XML parsing in functions (e.g., `fast-xml-parser`).
- [x] Create a frontend service `src/services/bggService.ts` to communicate with the Cloudflare API.
- [x] Update `src/pages/HomePage.tsx` to feature BGG search or trending games.
- [x] Update `src/components/UserReviews.tsx` to allow selecting a game from BGG when writing a review.
- [x] Verify functionality and styling.

## Technical Considerations
- **CORS**: Cloudflare Functions will act as a proxy to avoid BGG CORS limitations.
- **XML Parsing**: Use a lightweight library like `fast-xml-parser` inside the Edge function.
- **Rate Limiting**: Be mindful of BGG API usage policies.
- **Caching**: Implement basic caching in Cloudflare if needed (using KV or Cache API).
