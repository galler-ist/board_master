# Board Master - Project Blueprint

## Overview

This document outlines the features, design, and development plan for the Board Master project, a modern board game review website.

## Current State

The project features a responsive homepage with multi-language support (EN, KO, DE). It is set up for automatic deployment via Cloudflare Pages.

## Development Plan

### Phase 1: Homepage Design & Implementation (Completed)

-   **Status:** Done.

### Phase 2: Internationalization (i18n) (Completed)

-   **Status:** Done.

### Phase 3: Dark/Light Theme Toggle

**Objective:** Implement a theme provider and a toggle switch to allow users to change between a dark and a light visual theme.

**Key Features:**

*   **Theme Toggle Switch:** A toggle switch will be added to the header.
*   **Theme Persistence:** The user's selected theme will be saved to `localStorage` to persist across sessions.
*   **CSS Variables:** The theme will be managed by switching a `data-theme` attribute on the `body` and overriding CSS variables.

**Implementation Details:**

*   **State Management:** A `ThemeContext` will be created to provide the theme state and toggle function throughout the application.
*   **Styling:** CSS variables in `src/index.css` will be updated to support the light theme.
*   **Component:** The toggle switch will be added to the `App.tsx` header.
