# Eleventy Modernization Plan

## Goal
Modernize the existing static website to use Eleventy, improving maintainability and development workflow.

## Tech Stack
- Eleventy (11ty)
- Nunjucks (for templating)
- Markdown (for content)
- HTML (existing structure for conversion)
- CSS (existing, to be copied)
- JavaScript (existing, to be copied)

## Key Features / Changes
1.  **Eleventy Setup**: Initialize Eleventy project, configure input/output directories.
2.  **Templating System**: Create a base Nunjucks layout to encapsulate common header and footer elements.
3.  **Content Conversion**: Convert existing HTML pages into Markdown files, utilizing the new Nunjucks layout.
4.  **Asset Management**: Configure Eleventy to copy existing CSS and image files to the output directory.
5.  **NPM Scripts**: Add `start` and `build` scripts to `package.json` for Eleventy development and production builds.

## Implementation Details

### Eleventy Configuration (`.eleventy.js`)
-   Input directory: `src`
-   Output directory: `_site`
-   Includes directory: `_includes`
-   Passthrough copy for `src/css` and `src/images`.

### Base Layout (`src/_includes/base.njk`)
-   Extract common HTML structure (DOCTYPE, `<html>`, `<head>`, main `<table>` wrapper, navigation, footer, Yandex Metrika script).
-   Use Nunjucks variables for `title`, `description`, `keywords`.
-   Define a `{% block content %}{% endblock %}` for page-specific content.
-   Update asset paths (CSS, images) to be absolute from the root (e.g., `/css/style.css`).
-   Update internal navigation links to reflect new Eleventy-generated paths (e.g., `/index.html` instead of `index.html#`).

### Content Files (`.md`)
-   Each original HTML file (e.g., `index.html`, `discussion.html`) will be converted to a Markdown file (e.g., `index.md`, `discussion.md`).
-   Each Markdown file will include a Nunjucks front matter block specifying the `layout: base.njk` and page-specific `title`, `description`, `keywords`.
-   The main content of each HTML file will be extracted and placed into the Markdown file.

### NPM Scripts (`package.json`)
-   `"start": "npx @11ty/eleventy --serve"` for local development with live reloading.
-   `"build": "npx @11ty/eleventy"` for generating production-ready static files.

## Verification
-   Run `npm run build` to ensure the site builds without errors.
-   Run `npm start` and verify that the site is served correctly and all pages render as expected with the new layout and content.
-   Check that CSS and images are correctly applied.
-   Verify all internal links work.
-   Verify Yandex Metrika script is present.
