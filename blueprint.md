# Board Master - Project Blueprint

## Overview

This document outlines the features, design, and development plan for the Board Master project, a modern board game review website.

## Current State

The project uses a multi-page architecture with React Router, supporting i18n and a dark/light theme toggle.

## Development Plan

### Phase 1-5 (Completed)

-   Homepage, i18n, Theme Toggle, Contact Form, and multi-page architecture with React Router are implemented.

### Phase 6: Review Detail Pages with Disqus Comments

**Objective:** Implement individual review detail pages for each board game and integrate Disqus comments on each page.

**Key Features:**

*   **Review Detail Page Component:** A new page (`src/pages/ReviewDetailPage.tsx`) will be created to display the full details of a single review.
*   **Dynamic Routing:** The `ReviewsPage` will link to individual review detail pages using dynamic routes (e.g., `/reviews/:id`).
*   **Disqus Integration:** The provided Disqus embed code will be integrated into each `ReviewDetailPage`, with dynamic `page.url` and `page.identifier` based on the review ID.
*   **Navigation:** The review cards on the `ReviewsPage` will be updated to `Link` to their respective detail pages.

**Implementation Details:**

*   **Library:** Existing `react-router-dom` will be used for dynamic routing.
*   **File Structure:** `src/pages/ReviewDetailPage.tsx` will be created.
*   **Translations:** Any new text on the detail page will be added to `src/i18n.ts`.
*   **Styling:** Basic styling will be applied to the detail page.
*   **Commit Message:** `feat: Add review detail pages with Disqus comments`.
