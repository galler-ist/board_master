# Board Master - Project Blueprint

## Overview

This document outlines the features, design, and development plan for the Board Master project, a modern board game review website.

## Current State

The project features a responsive homepage with multi-language support (EN, KO, DE) and a dark/light theme toggle. It is set up for automatic deployment via Cloudflare Pages.

## Development Plan

### Phase 1: Homepage Design & Implementation (Completed)

-   **Status:** Done.

### Phase 2: Internationalization (i18n) (Completed)

-   **Status:** Done.

### Phase 3: Dark/Light Theme Toggle (Completed)

-   **Status:** Done.

### Phase 4: Partnership Inquiry Contact Form

**Objective:** Implement a simple contact form for partnership inquiries using Formspree and integrate it into the existing site structure.

**Key Features:**

*   **Contact Form Component:** A dedicated React component (`ContactForm.tsx`) for the inquiry form.
*   **Formspree Integration:** The form will submit data to the provided Formspree endpoint (`https://formspree.io/f/xykdnrwv`).
*   **Form Fields:** Basic fields for Name, Email, and Message.
*   **Translation:** Form labels and messages will be translated using `i18next`.
*   **Integration with UI:** The form will be placed in a new "Contact Us" section, accessible via the header navigation.

**Implementation Details:**

*   **File Structure:** `src/components/ContactForm.tsx` for the form component.
*   **Styling:** Basic styling for the form elements will be added to `src/App.css`.
*   **Navigation Update:** The "About" navigation link will be updated to point to the new "Contact Us" section.
