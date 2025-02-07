# Margot Relooking - Architecture & Technical Choices

## 1. Core Requirements (from README)

- Migration from WordPress blog
- Build time < 2 hours
- Minimal third-party services
- SEO optimized & accessible
- French-speaker friendly CMS
- Simple publishing workflow
- Optimized image handling
- Design: "doux", "coloré", "joyeux", "créatif", "smart"

## 2. Technical Stack

### Framework: Astro

**Why Astro?**

- Zero-JS by default = ultra fast loading
- Built-in Markdown/MDX support
- Excellent image optimization
- Simple content management
- Perfect for small static sites (<10 pages)
- Easy deployment options
- Great i18n support for French content

### Image Management

**Two-Step Image Pipeline:**

1. Upload & Storage (Decap CMS)
  - Images uploaded via admin UI to `public/images/`
  - Automatic filename generation with content hash
  - Git-based storage (part of the repo)
  - Basic optimization on upload

2. Optimization & Delivery (Astro)
  - Further optimization at build time
  - Responsive image generation
  - WebP conversion
  - Lazy loading
  - Blur-up placeholders

**Implementation:**

1. CMS Configuration:
```yaml
media_folder: 'public/images/blog'
public_folder: '/images/blog'
media_library:
  max_file_size: 2000000 # 2MB
  allowed_extensions: ['png', 'jpg', 'jpeg', 'webp']
```

2. Image Component:
```tsx
// src/components/ui/blog-image.tsx
interface BlogImageProps {
  src?: string;
  alt: string;
  className?: string;
}
```

3. Directory Structure:
```
public/
├── images/
│   ├── blog/       # Blog post images
│   ├── static/     # Site assets
│   └── uploads/    # User uploads
```

**Best Practices:**
- Enforce image size limits (2MB max)
- Generate responsive sizes
- Use semantic alt text
- Implement loading="lazy"
- Provide fallback images

### Content Management

**Approach: Decap CMS**

- Adds `/admin` route for content management
- Authentication via GitHub
- Visual editor in French
- Real-time preview
- Simple image uploads
- Still Git-based (but hides complexity)

**Setup Requirements:**

1. Two files needed:

   ```
   public/admin/index.html  # The admin panel entry
   public/admin/config.yml  # CMS configuration
   ```

2. Basic config example:

   ```yaml
   backend:
     name: github
     repo: owner/repo
     branch: main

   media_folder: 'public/images'
   public_folder: '/images'

   collections:
     - name: 'blog'
       label: 'Articles'
       folder: 'src/content/blog'
       create: true
       slug: '{{slug}}'
       fields:
         - { label: 'Titre', name: 'title', widget: 'string' }
         - { label: 'Date', name: 'date', widget: 'datetime' }
         - { label: 'Image', name: 'image', widget: 'image' }
         - { label: 'Contenu', name: 'body', widget: 'markdown' }
   ```

**Publishing Workflow:**

1. Author visits yourblog.com/admin
2. Logs in with GitHub
3. Uses visual editor to write/edit content
4. Previews changes in real-time
5. Clicks publish

### Styling

**Approach: Tailwind CSS**
**Base: Tailwind CSS + shadcn/ui**

- Tailwind for utility-first styling
- shadcn/ui for accessible, customizable components
- Built on top of Radix UI primitives

  **Theme Structure:**

  ```ts
  // src/lib/themes.ts
  export const theme = {
    colors: {
      // "coloré" & "créatif": Playful palette
      primary: {
        DEFAULT: 'hsl(348, 83%, 81%)', // Soft coral pink
        light: 'hsl(348, 83%, 90%)',
        dark: 'hsl(348, 83%, 47%)',
      },
      accent: {
        1: 'hsl(169, 65%, 70%)', // Mint green
        2: 'hsl(42, 87%, 85%)', // Warm yellow
        3: 'hsl(261, 47%, 82%)', // Soft lavender
      },

      // "smart": Professional text colors
      text: {
        primary: 'hsl(348, 25%, 25%)', // Warm dark grey
        secondary: 'hsl(348, 15%, 45%)',
        muted: 'hsl(348, 10%, 60%)',
      },
    },
    fonts: {
      // "créatif" & "smart": Modern but friendly typography
      sans: ['Cabinet Grotesk', 'system-ui'], // Modern, friendly
      serif: ['Gambetta', 'Georgia'], // Elegant, soft
      display: ['Roslindale', 'serif'], // Creative headlines
    },
    // Soft shadows for depth without harshness
    shadows: {
      sm: '0 2px 8px hsl(348, 83%, 81%, 0.07)',
      md: '0 4px 12px hsl(348, 83%, 81%, 0.1)',
    },
  };
  ```

The reasoning:

- **Base**: Warm cream/eggshell backgrounds for "doux"
- **Primary**: Soft coral pink - both joyful and sophisticated
- **Accents**: A trio of soft but playful colors for "coloré" & "créatif"
- **Typography**: Modern but friendly fonts for "smart" without being cold
- **Shadows**: Very soft, warm shadows to maintain the "doux" feeling

This palette creates a warm, inviting space while maintaining professionalism. Want me to:

1. Show some example component styling with this palette?
2. Or adjust any of the colors?

**Key Components from shadcn/ui:**

- Card - For article previews
- Navigation Menu - For header
- Carousel - For image galleries
- Button - For CTA elements
- Form elements - For admin interface

### Image Pipeline

- Use Astro's built-in image optimization
- Automatic WebP conversion
- Lazy loading by default
- Responsive sizes
- Store optimized images in `/public/images/`

**Two-step Image Optimization:**

1. CMS Upload (Decap CMS)

   - Images uploaded via admin UI to `public/images/`
   - Automatic optimization on upload
   - Generates unique filenames
   - Creates Git commit with new image

2. Frontend Optimization (Astro)
   - Further optimization at build time
   - Generates multiple sizes for responsive images
   - Automatic WebP conversion
   - Lazy loading by default
   - Uses `<Image />` component for optimal delivery

**Example Usage:**

```astro
---
import { Image } from 'astro:assets';
---

<Image
  src="/images/uploaded-image.jpg"
  alt="Description"
  width={800}
  height={600}
  format="webp"
/>
```

### SEO Strategy

- Semantic HTML structure
- Auto-generated meta tags
- Built-in sitemap
- RSS feed
- Optimized for Core Web Vitals

## 3. Project Structure

```
src/
├── components/      # Reusable UI components
├── content/         # MDX content files
│   └── blog/        # Blog posts
├── layouts/         # Page layouts
├── pages/          # Routes
└── styles/         # Global styles
```

## 4. URL Structure

- Simple: `/blog/[slug]`
- No date in URL for cleaner links
- Redirects from old WordPress URLs if needed

## 5. Development Phases

### Phase 1: Setup (30min)

- [x] Project initialization
- [x] Content structure
- [x] Basic layouts

### Phase 2: Content (30min)

- [x] Import scraped content
- [x] Set up image pipeline
- [x] Basic styling
- [x] cms setup

### Phase 3: Design System Implementation (2h)
- [x] Font system setup
  - Cabinet Grotesk for body text
  - Playfair Display for headings
- [x] Component architecture
  - LinkButton with proper TypeScript types
  - Card system for blog posts
  - Responsive image handling
- [x] Layout structure
  - BaseLayout with proper meta tags
  - Header component with navigation

### Phase 4: CMS Integration (1h)
- [x] Decap CMS setup
  - Production config
  - Development config for local testing
- [x] Netlify Identity integration
- [x] Content modeling
  - Blog posts collection
  - About page structure
  - Flexible content blocks

## 6. Questions to Resolve

1. ✓ Do we need to maintain old URL structure for SEOx? -> No, using simpler /blog/[slug]
2. ✓ Any specific color palette preferences? -> Implemented in globals.css
3. [ ] Do we need search functionality? Yes, by title and tags
4. [ ] Analytics requirements? basic analytics

## 7. Next Features

### Blog Enhancements
- [x] Article Metadata
  - [x] Reading time calculation
  - [x] Word count display
  - [-] Tags system implementation
  - [ ] Tag-based filtering and search

### Navigation & UX
- [x] Article Navigation
  - [x] Next/Previous article buttons
  - [x] Back to blog/home buttons
  - [x] Related articles by tag

### Content & Layout
- [ ] Enhanced Blog Layout
  - [ ] Blog Index Improvements
    - [-] 2-3 Grid Layout (2 featured, 3 columns after)
    - [x] Modern card design without shadows
    - [-] Hover text animation effects
    - [x] Author and tags metadata display
  - [ ] Rich text styling (blockquotes, lists)
  - [ ] Image galleries and figure captions
- [ ] Contact Page
  - [ ] Contact form implementation
  - [ ] Form validation
  - [ ] Email notification setup
  - [ ] Success/Error handling

## 8. Future Considerations

- [ ] Analytics integration if needed
- [ ] Search functionality
- [ ] More sophisticated editor interface
- [ ] Multi-language support if needed
- [ ] Newsletter integration
- [ ] Social sharing buttons
- [ ] Comments system
