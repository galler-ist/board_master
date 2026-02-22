# Board Master - Project Blueprint

## Overview

This document outlines the features, design, and development plan for the Board Master project, a modern board game review website.

## Current State

The project is a single-page application with multiple features on the homepage. It includes i18n and a theme toggle. It is set up for automatic deployment via Cloudflare Pages.

## Development Plan

### Phase 1-4 (Completed)

-   Homepage, i18n, Theme Toggle, and Contact Form features are implemented on a single page.

### Phase 5: Refactor to Multi-Page Architecture

**Objective:** Convert the single-page application into a multi-page application using `react-router-dom` for better structure and scalability.

**Key Features:**

*   **Page-based Routing:** "Reviews" and "Contact" will be moved to their own dedicated pages.
*   **Persistent Layout:** A main layout component will be created to ensure the Header and Footer persist across all pages.
*   **Component Reorganization:**
    *   A `src/pages` directory will be created for page components (`HomePage.tsx`, `ReviewsPage.tsx`, `ContactPage.tsx`).
    *   The existing Header and Footer will be extracted into their own components (`src/components/Header.tsx`, `src/components/Footer.tsx`).
*   **Navigation Update:** Header navigation will be updated to use `NavLink` for proper page routing and active link styling.

**Implementation Details:**

*   **Library:** `react-router-dom`.
*   **File Structure:** New directories `src/pages` will be created. The main `App.tsx` will be repurposed to handle the routing logic.
*   **Commit Message:** `refactor: Implement multi-page architecture with React Router`.
