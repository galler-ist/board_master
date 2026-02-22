# Board Master - Project Blueprint

## Overview

This document outlines the features, design, and development plan for the Board Master project, a modern board game review website.

## Current State

The project uses a multi-page architecture with React Router, supporting i18n and a dark/light theme toggle. It is set up for automatic deployment via Cloudflare Pages and includes Google AdSense script integration.

## Development Plan

### Phase 1-7 (Completed)

-   Homepage, i18n, Theme Toggle, Contact Form, Multi-page architecture, Review Detail Pages, and Google AdSense script integration are implemented.

### Phase 8: AdSense Review Preparation - Content & Info Pages (Completed)

-   **Status:** "About Us" and "Privacy Policy" pages added; `ReviewsPage` content enriched.

### Phase 9: Dynamic Content Internationalization (Game Data)

**Objective:** Refactor game review data to be translatable using the existing `i18next` system, making game titles, excerpts, and full content dynamically switchable based on the selected language.

**Key Features:**

*   **Externalized Game Data:** Move `allReviews` array from page components to a dedicated data file.
*   **i18n Key Integration:** Replace hardcoded game titles, excerpts, and full content with `i18next` translation keys.
*   **Centralized Translations:** Add game-specific content translations to `src/i18n.ts`.

**Implementation Details:**

*   **File Creation:** `src/data/games.ts` to store game metadata (ID, rating, image, and translation keys).
*   **File Modification:**
    *   `src/pages/ReviewsPage.tsx` and `src/pages/ReviewDetailPage.tsx` to import data from `src/data/games.ts` and use `t()` for translatable content.
    *   `src/i18n.ts` to include extensive translation entries for each game's title, excerpt, and full content across all supported languages (EN, KO, DE).
*   **Commit Message:** `feat: Make game content translatable via i18n`.
