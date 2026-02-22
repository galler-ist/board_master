# Board Master - Project Blueprint

## Overview

This document outlines the features, design, and development plan for the Board Master project, a modern board game review website.

## Current State

The project uses a multi-page architecture with React Router, supporting i18n and a dark/light theme toggle. It is set up for automatic deployment via Cloudflare Pages.

## Development Plan

### Phase 1-6 (Completed)

-   Homepage, i18n, Theme Toggle, Contact Form, Multi-page architecture, and Review Detail Pages are implemented. Disqus integration was reverted.

### Phase 7: Google AdSense Integration

**Objective:** Integrate Google AdSense into the application to display advertisements.

**Key Features:**

*   **AdSense Script:** The provided AdSense script will be added to the `<head>` section of `index.html` to ensure it loads globally.

**Implementation Details:**

*   **File Modification:** `index.html` will be updated.
*   **Adsense Client ID:** The provided client ID `ca-pub-9798777248017430` will be used.
*   **Commit Message:** `feat: Integrate Google AdSense`.
