# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Development Commands

This is a Jekyll-based website for eligendi games. Key commands:

```bash
# Install dependencies
gem install bundler
bundle install

# Run local development server
bundle exec jekyll serve

# Build the site
bundle exec jekyll build
```

The site runs locally at http://localhost:4000 when using `bundle exec jekyll serve`.

## Architecture Overview

This is a Jekyll static site for a mobile game company (eligendi games) with the following structure:

### Content Architecture
- **Collections**: The site uses Jekyll collections for different content types:
  - `_games/` - Game information pages (layout: game)
  - `_contact-us/` - Contact pages (layout: page)  
  - `_privacy/` - Privacy policy pages (layout: privacy)

- **Data Files**: Game metadata is stored in `_data/games.yml` and referenced by templates

- **Layouts**: 
  - `default.html` - Base layout
  - `game.html` - For individual game pages
  - `page.html` - For general content pages
  - `privacy.html` - For privacy policy pages

### Styling System
- Uses Bootstrap with Bootswatch themes (currently "cerulean" theme)
- Custom SCSS in `_sass/` directory with Bootstrap customizations
- Main stylesheet is `css/main.scss`
- Multiple Bootswatch theme options available in `_sass/bootswatch/`

### Static Assets
- Images organized by purpose in `img/` (logos, game assets, backgrounds)
- JavaScript libraries in `js/` (Bootstrap, jQuery, custom animations)
- Fonts and CSS libraries in respective directories

### Site Configuration
- `_config.yml` contains site settings, collection definitions, and build configuration
- Permalink structure: `/:collection/:path/` for all collections
- SEO and feed plugins enabled
- Timezone set to Europe/London

The built site is output to `_site/` directory and appears to be deployed to GitHub Pages (eligendigames.com domain).