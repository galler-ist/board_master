# Board Master - Project Blueprint

## Overview

This document outlines the features, design, and development plan for the Board Master project, a modern board game review website.

## Current State

The project uses a multi-page architecture with React Router, supporting i18n and a dark/light theme toggle. It is set up for automatic deployment via Cloudflare Pages and includes Google AdSense script integration. Content has been enriched for AdSense review preparation.

## Development Plan

### Phase 1-8 (Completed)

-   Homepage, i18n, Theme Toggle, Contact Form, Multi-page architecture, Review Detail Pages, Google AdSense script integration, and AdSense review preparation content are implemented.

### Phase 9: AdSense Compliance - ads.txt & CMP Guidance

**Objective:** Address Google AdSense compliance requirements for authorized digital sellers (`ads.txt`) and user consent (CMP).

**Key Features:**

*   **`ads.txt` File Creation:** Generate an `ads.txt` file with the user's publisher ID and place it in the website's root directory.
*   **Consent Management Platform (CMP) Guidance:** Provide clear instructions on how to select and integrate a Google-certified CMP, as direct implementation is outside the AI's capabilities.

**Implementation Details:**

*   **File Creation:** `ads.txt` in the project root.
*   **Guidance:** Text-based instructions for CMP integration will be provided to the user.
*   **Commit Message:** `feat: AdSense compliance - add ads.txt & CMP guidance`.
