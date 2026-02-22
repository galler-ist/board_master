# Board Master - Project Blueprint

## Overview

This document outlines the features, design, and development plan for the Board Master project, a modern board game review website.

## Current State

The project uses a multi-page architecture with React Router, supporting i18n and a dark/light theme toggle. It is set up for automatic deployment via Cloudflare Pages and includes Google AdSense script integration.

## Development Plan

### Phase 1-6 (Completed)

-   Homepage, i18n, Theme Toggle, Contact Form, Multi-page architecture, and Review Detail Pages are implemented. Disqus integration was reverted.

### Phase 7: Google AdSense Integration (Script Added) (Completed)

-   **Status:** Script added to `index.html`.

### Phase 8: AdSense Review Preparation - Content & Info Pages

**Objective:** Enhance site quality and trustworthiness to improve chances of Google AdSense approval, based on AdSense guidelines. This includes enriching content and adding essential legal/info pages.

**Key Features:**

*   **Enriched Content (Reviews):** Added more dummy review content to the `ReviewsPage`, including specific Unsplash images.
*   **"About Us" Page:** A dedicated page explaining the site's purpose and mission.
*   **"Privacy Policy" Page:** A page outlining the site's privacy practices, crucial for compliance and trustworthiness.

**Implementation Details:**

*   **File Creation:**
    *   `src/pages/AboutPage.tsx`
    *   `src/pages/PrivacyPolicyPage.tsx`
*   **File Modification:**
    *   `src/pages/ReviewsPage.tsx` (more dummy data with specific Unsplash images)
    *   `src/App.tsx` (new routes)
    *   `src/components/Header.tsx` (new "About Us" navigation link)
    *   `src/components/Footer.tsx` (new "Privacy Policy" link)
    *   `src/i18n.ts` (new translation keys)
*   **Commit Message:** `feat: AdSense review preparation - content & info pages`.
