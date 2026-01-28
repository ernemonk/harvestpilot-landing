# 🔄 HarvestPilot Landing Reorganization Guide

## Overview
Reorganization of the harvestpilot-landing codebase to improve modularity and maintainability.

## New Structure

```
src/
├── features/                   # Feature-based modules
│   ├── landing/                # Landing page feature
│   │   ├── components/
│   │   │   ├── Hero.tsx
│   │   │   ├── Features.tsx
│   │   │   ├── HowItWorks.tsx
│   │   │   ├── Pricing.tsx
│   │   │   ├── PricingNew.tsx
│   │   │   ├── Testimonials.tsx
│   │   │   ├── FAQ.tsx
│   │   │   ├── CTA.tsx
│   │   │   └── index.ts
│   │   └── index.ts
│   │
│   └── blog/                   # Blog feature
│       ├── components/
│       │   ├── BlogList.tsx
│       │   ├── BlogPost.tsx
│       │   └── index.ts
│       ├── templates/
│       │   └── blog-post.tsx
│       ├── data/
│       │   └── blogPosts.ts
│       └── index.ts
│
├── shared/                     # Shared code
│   ├── components/
│   │   ├── Head.tsx
│   │   ├── Navbar.tsx
│   │   ├── Footer.tsx
│   │   ├── Image.tsx
│   │   └── index.ts
│   ├── utils/
│   │   └── index.ts
│   └── types/
│       └── index.ts
│
├── pages/                      # Gatsby pages
│   ├── index.tsx               # Home page
│   └── blog.tsx                # Blog index
│
├── templates/                  # Gatsby templates
│   └── blog-post.tsx
│
├── images/                     # Static images
├── styles/                     # Global styles
└── data/                       # Static data

```

## Migration Steps

### Phase 1: Create Structure ✅
- [x] Create features/landing/components/
- [x] Create features/blog/
- [x] Create shared/components/

### Phase 2: Move Components
1. Move landing components → `features/landing/components/`
2. Move blog components → `features/blog/components/`
3. Move shared components → `shared/components/`
4. Create barrel exports (index.ts)

### Phase 3: Update Imports
- Update all component imports
- Use barrel exports

## Benefits

- **Better Organization:** Components grouped by feature
- **Reusability:** Shared components easily accessible
- **Maintainability:** Clear feature boundaries
- **Scalability:** Easy to add new features

---

**Status:** Ready for implementation
**Last Updated:** 2026-01-25
