# Board Master - Project Blueprint

## Overview

This document outlines the features, design, and development plan for the Board Master project, a modern board game review website.

## Current State

The project is initialized as a standard Vite + React (TypeScript) application. The git repository has been connected to `https://github.com/galler-ist/board_master.git`.

## Development Plan

### Phase 1: Homepage Design & Implementation

**Objective:** Create a visually appealing and responsive homepage that serves as the main landing page for the board game review site.

**Key Features:**

*   **Header:** A clean and modern header containing the site logo/title ("Board Master") and a simple navigation menu (e.g., Home, Reviews, About).
*   **Hero Section:** A large, attention-grabbing section with a compelling headline and a call-to-action to encourage users to explore reviews.
*   **Featured Reviews Section:** A grid or flexbox layout showcasing a selection of featured board game reviews. Each review will be presented as a "card" with:
    *   A placeholder for the game's box art.
    *   The name of the board game.
    *   A star rating.
    *   A brief excerpt from the review.
*   **Footer:** A simple footer with copyright information and social media links.

**Design & Styling:**

*   **Aesthetic:** Modern, clean, and engaging. The design will use a combination of dark and vibrant colors to create a premium feel.
*   **Layout:** A responsive, mobile-first design using CSS Flexbox and Grid.
*   **Typography:** A clear and readable font, likely imported from a service like Google Fonts.
*   **Styling:** All custom styles will be written in `src/App.css`.
