# Construction App - Modern React Website

A modern, responsive React website for construction services featuring floating social media buttons with smooth animations and flexible configuration.

## Features

### 🎯 Main Features
- **Floating Social Media Buttons** - Fully configurable WhatsApp, Instagram, LinkedIn, and Facebook integration
- **Responsive Design** - Works seamlessly on desktop, tablet, and mobile devices
- **Modern UI** - Built with Tailwind CSS for stunning visuals
- **Smooth Animations** - Interactive hover effects and transitions
- **Dark/Light Theme Support** - Customizable theme options
- **SEO Friendly** - Semantic HTML and meta tags

### 🚀 Component Features
- Customizable positions (bottom-right, bottom-left, top-right, top-left)
- Toggle expand/collapse functionality
- Tooltip labels on hover
- Auto-expand on hover option
- Custom colors support
- Animation controls
- Mobile-optimized layout

## Tech Stack

- **React 18** - UI library
- **Vite** - Fast build tool and dev server
- **Tailwind CSS** - Utility-first CSS framework
- **Lucide React** - Beautiful SVG icons
- **JavaScript ES6+** - Modern JavaScript

## Getting Started

### Prerequisites
- Node.js (v16 or higher)
- npm or yarn

### Installation

1. Navigate to the project directory:
```bash
cd construction-app
```

2. Install dependencies:
```bash
npm install
```

3. Start the development server:
```bash
npm run dev
```

The application will open at `http://localhost:5173`

## Project Structure

```
construction-app/
├── src/
│   ├── components/
│   │   └── FloatingSocialMedia.jsx    # Main floating social media component
│   ├── App.jsx                        # Main app component
│   ├── main.jsx                       # React entry point
│   └── index.css                      # Global styles
├── index.html                         # HTML template
├── vite.config.js                     # Vite configuration
├── tailwind.config.js                 # Tailwind CSS configuration
├── postcss.config.js                  # PostCSS configuration
└── package.json                       # Dependencies and scripts
```

## Usage

### Basic Implementation

```jsx
import FloatingSocialMedia from './components/FloatingSocialMedia';

function App() {
  return (
    <div>
      <FloatingSocialMedia
        position="bottom-right"
        theme="dark"
        showLabels={true}
        expandOnHover={true}
      />
    </div>
  );
}
```

### Advanced Configuration

```jsx
<FloatingSocialMedia
  position="bottom-right"        // Position: 'bottom-right', 'bottom-left', 'top-right', 'top-left'
  theme="dark"                   // Theme: 'dark' or 'light'
  animationEnabled={true}        // Enable/disable animations
  showLabels={true}              // Show tooltip labels
  expandOnHover={true}           // Auto-expand on hover
  customColors={{
    whatsapp: '#25D366',
    instagram: '#E1306C',
    linkedin: '#0077B5',
    facebook: '#1877F2',
    primary: '#1F2937'
  }}
  social={{
    whatsapp: {
      enabled: true,
      link: 'https://wa.me/1234567890',
      label: 'Chat on WhatsApp'
    },
    instagram: {
      enabled: true,
      link: 'https://instagram.com/yourprofile',
      label: 'Follow us on Instagram'
    },
    linkedin: {
      enabled: true,
      link: 'https://linkedin.com/company/yourcompany',
      label: 'Connect on LinkedIn'
    },
    facebook: {
      enabled: true,
      link: 'https://facebook.com/yourpage',
      label: 'Like us on Facebook'
    }
  }}
/>
```

## Customization

### Update Social Links
Edit the social media links in `src/App.jsx` to point to your actual social media profiles:

```javascript
social={{
  whatsapp: {
    enabled: true,
    link: 'https://wa.me/YOUR_PHONE_NUMBER',
    label: 'Chat on WhatsApp'
  },
  // ... other platforms
}}
```

### Customize Colors
Modify the Tailwind theme in `tailwind.config.js`:

```javascript
colors: {
  whatsapp: "#25D366",
  instagram: "#E1306C",
  linkedin: "#0077B5",
  facebook: "#1877F2",
}
```

### Change Positions
The component supports four position options:
- `bottom-right` (default)
- `bottom-left`
- `top-right`
- `top-left`

## Available Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run preview` - Preview production build

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## Responsive Design

The component is fully responsive and adapts to all screen sizes:
- Desktop: Full-featured with labels and animations
- Tablet: Optimized layout with touch-friendly buttons
- Mobile: Compact layout with adjusted spacing

## Performance

- Lightweight component (~5KB gzipped)
- Optimized animations using CSS transforms
- Minimal re-renders with React hooks
- Production-ready build optimization with Vite

## Accessibility

- ARIA labels on all buttons
- Keyboard navigation support
- Screen reader friendly
- Semantic HTML structure

## Future Enhancements

- [ ] Add more social platforms (Twitter, YouTube, TikTok)
- [ ] Email integration
- [ ] Contact form integration
- [ ] Analytics tracking
- [ ] Multi-language support
- [ ] Dark mode toggle

## License

MIT License - feel free to use this project in your own applications.

## Support

For questions or issues, please create an issue in the repository.

## Author

Built with ❤️ for construction professionals and businesses.
