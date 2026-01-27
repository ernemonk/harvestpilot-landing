# HarvestPilot Landing Page

A professional, high-converting landing page built with Gatsby, React, TypeScript, and Tailwind CSS.

## Features

- **Responsive Design**: Mobile-first approach with full responsiveness
- **Performance Optimized**: Image optimization, lazy loading, and fast page loads
- **Tailwind CSS**: Custom themed with harvest-green color scheme
- **TypeScript**: Full type safety across all components
- **SEO Ready**: Meta tags, structured data, and Open Graph support
- **Accessibility**: WCAG 2.1 AA compliant

## Sections

- **Navbar**: Sticky navigation with mobile menu
- **Hero**: Value proposition with CTA buttons
- **Features**: 6 core features with descriptions
- **How It Works**: 4-step product flow
- **Testimonials**: Real farmer testimonials with metrics
- **Pricing**: 3 pricing tiers with billing toggle
- **Blog**: Featured articles preview
- **FAQ**: Expandable FAQ section
- **CTA**: Final call-to-action section
- **Footer**: Complete footer with links and legal

## Getting Started

### Prerequisites

- Node.js 18+ (LTS recommended)
- npm 9+ or yarn 3+

### Installation

```bash
# Install dependencies
npm install

# Start development server
npm run develop

# Build for production
npm run build

# Serve production build locally
npm run serve
```

### Development

The site runs on `http://localhost:8000` with GraphQL explorer at `http://localhost:8000/___graphql`

## Customization

### Colors

Edit `tailwind.config.js` to customize:

```js
colors: {
  "harvest-green": "#10b981",  // Primary color
  "harvest-dark": "#064e3b",   // Text color
  "harvest-light": "#d1fae5",  // Light background
}
```

### Content

All content is hardcoded in component files. To modify:

1. Update text in component files (e.g., `src/components/Hero.tsx`)
2. Update testimonials in `src/components/Testimonials.tsx`
3. Update pricing in `src/components/Pricing.tsx`
4. Update blog posts in `src/components/Blog.tsx`
5. Update FAQ in `src/components/FAQ.tsx`

### Images

Place images in `src/images/` and import using the Image component:

```tsx
import Image from "../components/Image";

<Image src="/my-image.png" alt="Description" />
```

## Building & Deployment

### Deploy to Gatsby Cloud

```bash
npm install -g gatsby-cli
gatsby login
gatsby publish
```

### Deploy to Vercel

```bash
npm install -g vercel
vercel
```

### Deploy to Netlify

```bash
npm install -g netlify-cli
netlify deploy
```

## Environment Variables

Create a `.env.local` file for development:

```
GATSBY_GOOGLE_ANALYTICS_ID=your_tracking_id
```

## Performance Optimizations

- Image lazy loading enabled
- CSS minification
- Code splitting per page
- Service worker for offline support
- Preloading critical resources

## Analytics

To enable Google Analytics:

1. Get your Tracking ID from Google Analytics
2. Add to `gatsby-config.js`:
   ```js
   {
     resolve: `gatsby-plugin-google-analytics`,
     options: {
       trackingId: `YOUR_TRACKING_ID`,
     },
   }
   ```

## Testing

```bash
# Type checking
npm run typecheck

# Linting
npm run lint

# Format code
npm run format
```

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Common Tasks

### Add a new section

1. Create component in `src/components/`
2. Import in `src/pages/index.tsx`
3. Add to JSX

### Change font

Edit `src/styles/global.css` and update the `body` font-family

### Add animations

Define keyframes in `tailwind.config.js` and use with Tailwind classes

## Troubleshooting

### Port 8000 already in use

```bash
gatsby develop -p 8001
```

### Cache issues

```bash
gatsby clean
gatsby develop
```

### Build fails

```bash
rm -rf node_modules package-lock.json
npm install
npm run build
```

## Support

For issues or questions about HarvestPilot, visit our documentation or contact support@harvestpilot.farm

## License

Copyright © 2024 HarvestPilot. All rights reserved.
