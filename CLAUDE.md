# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is Dylan Bai's personal website, built with [Lektor](https://www.getlektor.com/) (a static site generator) and styled with a terminal-inspired theme using [Maple Mono](https://github.com/subframe7536/maple-font) font.

**Live site:** https://dylanbai.com
**Deployment:** GitHub Pages via `dylanbyc/dylanbyc.github.io`

## Python & Dependencies

- **Python 3.12** — pinned in `.python-version`
- **`uv`** for all package management — never use pip
- **`setuptools`** is a required dependency because Lektor 3.3.12 imports `pkg_resources` at runtime

## Commands

**Use `uv run` to run Lektor (not `uvx`).** This ensures the project's venv and dependencies are used.

```bash
# Install/sync dependencies
uv sync

# Build the site (output goes to ~/Library/Caches/Lektor/builds/<hash>/)
uv run lektor build

# Build to a specific directory for inspection
uv run lektor build -O ./build

# Run local dev server with live reload
uv run lektor server

# Deploy to GitHub Pages (creates CNAME file automatically)
uv run lektor deploy ghpages
```

## Architecture

### Lektor Structure

- **`content/`** - Markdown content files (`.lr` format with `---` separated fields)
  - Each subdirectory is a page; `contents.lr` defines the page content
  - Blog posts live in `content/blog/<post-slug>/contents.lr`

- **`models/`** - Content model definitions (`.ini` files)
  - `page.ini` - Basic page with title + body
  - `blog.ini` - Blog index, children ordered by `-pub_date`
  - `blog-post.ini` - Blog post with title, author, pub_date, categories, body

- **`templates/`** - Jinja2 templates
  - `layout.html` - Base template with nav, theme toggle, footer
  - Templates match model names (e.g., `blog-post.html` for `blog-post` model)

- **`assets/`** - Static files copied directly to build
  - `css/style.css` - Main stylesheet
  - `fonts/` - Maple Mono font files

### Content File Format (.lr)

```
_model: model-name
---
field_name: value
---
markdown_field:

Markdown content here...
```

### Key Configuration

- `db-site.lektorproject` - Project config, deployment target, canonical URL
- The `?cname=dylanbai.com` parameter ensures CNAME file is created on deploy
