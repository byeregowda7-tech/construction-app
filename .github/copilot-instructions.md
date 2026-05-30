# Construction App - Development Guidelines

This is a modern React website built with Vite and Tailwind CSS, featuring floating social media buttons for construction services.

## Project Overview

- **Framework**: React 18 with Vite
- **Styling**: Tailwind CSS with custom animations
- **Icons**: Lucide React
- **Main Component**: FloatingSocialMedia - A reusable, configurable floating social media button component

## Development Setup

1. Install dependencies: `npm install`
2. Start dev server: `npm run dev`
3. Build for production: `npm run build`

## Key Files

- `src/components/FloatingSocialMedia.jsx` - Main floating social media component
- `src/App.jsx` - Demo page with complete example
- `tailwind.config.js` - Customizable theme configuration
- `vite.config.js` - Build configuration

## Component Architecture

### FloatingSocialMedia Component

A highly flexible component with the following props:

- `position`: 'bottom-right' | 'bottom-left' | 'top-right' | 'top-left'
- `theme`: 'dark' | 'light'
- `showLabels`: boolean - Show tooltip labels
- `expandOnHover`: boolean - Auto-expand on hover
- `animationEnabled`: boolean - Enable animations
- `customColors`: object - Custom color overrides
- `social`: object - Configuration for each social platform

## Responsive Design

The component is fully responsive:
- Desktop: Full features with animations and labels
- Tablet: Optimized touch layout
- Mobile: Compact layout with adjusted positioning

## Customization

To customize the social media links, edit the `social` prop in `src/App.jsx`:

```javascript
social={{
  whatsapp: {
    enabled: true,
    link: 'https://wa.me/YOUR_NUMBER',
    label: 'Chat on WhatsApp'
  },
  // ...other platforms
}}
```

## Browser Support

- Modern browsers (Chrome, Firefox, Safari, Edge)
- Mobile browsers (iOS Safari, Chrome Mobile)
- IE 11 requires polyfills

## Performance

- Optimized animations using CSS transforms
- Minimal re-renders with React hooks
- Production build: ~40KB (gzipped ~15KB)

## Deployment

Build for production:
```bash
npm run build
```

Deploy the `dist` folder to your hosting service (Vercel, Netlify, GitHub Pages, etc.)

## Future Improvements

- Add more social platforms
- Email contact form integration
- Analytics tracking
- Multi-language support
- Dark mode toggle

## Common Tasks

### Add New Social Platform
1. Add platform to social config
2. Import icon from lucide-react
3. Add platform link in FloatingSocialMedia component
4. Update colors in tailwind.config.js
