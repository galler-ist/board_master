# Board Master - Project Blueprint

## Overview

This document outlines the features, design, and development plan for the Board Master project, a modern board game review website.

## Current State

The project features a responsive homepage built with React and Vite. It is set up for automatic deployment via Cloudflare Pages.

## Development Plan

### Phase 1: Homepage Design & Implementation (Completed)

-   **Objective:** Create a visually appealing and responsive homepage.
-   **Features:** Header, Hero Section, Featured Reviews, Footer.
-   **Status:** Done.

### Phase 2: Internationalization (i18n)

**Objective:** Add multi-language support to the application, allowing users to switch between English, Korean, and German.

**Key Features:**

*   **Language Selector:** A dropdown menu will be added to the header to allow users to select their preferred language.
*   **Translation Content:** All user-facing text strings will be extracted and translated.
*   **Browser Language Detection:** The site will attempt to automatically set the initial language based on the user's browser settings.

**Implementation Details:**

*   **Libraries:** `i18next`, `react-i18next`, `i18next-browser-languagedetector`.
*   **Configuration:** A dedicated `src/i18n.ts` file will be created to manage language resources and configuration.
*   **Integration:** The configuration will be loaded in `src/main.tsx`, and the `useTranslation` hook will be used in components to display translated text.
*   **Styling:** The new language selector dropdown will be styled using CSS in `src/App.css`.
