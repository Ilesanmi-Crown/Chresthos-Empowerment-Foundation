# Chresthos Empowerment Foundation

This document describes the current implementation in the repository. It reflects the source code, package manifest, Vite configuration, assets, routing, and styling reviewed for this project. It does not describe functionality that is not present in the code.

## 1. Project Overview

The site presents the Chresthos Empowerment Foundation, its community outreach initiatives, impact statistics, partner organizations, team members, and a supporter testimonial. It provides dedicated routes for donation information, a photo gallery, the annual singing competition "The Next Teen Star", individual partner and team profiles, and an organizational privacy policy.

Global features include a one-time cookie consent notice, route-level code-splitting with delayed skeleton loaders to eliminate layout shift, and an error boundary to handle network or chunk-loading failures gracefully.

The contact dialog collects a name, email address, optional phone number, and message. It submits these fields to the endpoint configured by `VITE_SHEET_URL`. The code does not identify the endpoint's backend service. Needs confirmation: who operates that endpoint, its production URL, and its retention/processing behavior.

The Privacy Policy page (`/privacy-policy`) currently contains visible `[PLACEHOLDER]` text for administrative details (such as official business name, confirmed address, contact email, phone numbers, last updated date, and data retention rules) that must be filled in with verified foundation information prior to public deployment.

### Tech stack

Versions below are the ranges declared in `package.json`, not a report of the exact versions installed in `node_modules`.

| Package | Declared version | Use in this project |
| --- | --- | --- |
| `react` | `^18.3.1` | UI components |
| `react-dom` | `^18.3.1` | Browser rendering |
| `react-router-dom` | `^7.18.4` | Browser routing and navigation hooks |
| `lucide-react` | `^1.16.0` | Icons in contact, benefits, competition steps, and donate UI |
| `vite` | `^6.2.0` | Development server and production build |
| `@vitejs/plugin-react` | `^4.3.4` | React integration for Vite |
| `@types/react` | `^18.3.18` | React type declarations |
| `@types/react-dom` | `^18.3.5` | React DOM type declarations |
| `sharp` | `^0.35.5` | Image processing engine used by ViteImageOptimizer |
| `svgo` | `^4.1.0` | SVG optimization library used by ViteImageOptimizer |
| `vite-plugin-image-optimizer` | `^2.0.3` | Build-time image compression for JPG, JPEG, PNG, and WebP |

The project uses ES modules (`"type": "module"`) and is marked private in `package.json`.

### Third-party services (by name only)

The project connects to or integrates with the following external services:
- **Google Sheets**: Receiving endpoint for Contact modal form submissions via webhook.
- **Google Fonts**: Web typography stylesheets loaded in `index.html`.
- **Boxicons / unpkg**: CDN-delivered icon stylesheet loaded in `index.html`.
- **YouTube**: Embedded video playback on competition pages.
- **Google Search Console**: Domain ownership verification meta tag in `index.html`.
- **Vercel**: Single-page application hosting platform configured via `vercel.json`.

### Scripts

| Command | Script | Purpose |
| --- | --- | --- |
| `npm run dev` | `vite` | Starts the Vite development server. `vite.config.js` sets port `3000` and `open: false`. |
| `npm run build` | `vite build` | Compresses images via `vite-plugin-image-optimizer` and creates the production bundle in `dist`. |
| `npm run preview` | `vite preview` | Serves the built output locally for preview. |

There is no test or lint script in `package.json`.

## 2. Folder Structure

```text
.
|-- .env                         Local environment configuration; do not copy its values into docs
|-- .env.example                 Empty template for the environment variable used by the app
|-- DOCUMENTATION.md             This document
|-- index.html                   HTML shell, title, external font/icon stylesheets, and React root
|-- package.json                 Dependencies and npm scripts
|-- package-lock.json            Locked dependency resolution
|-- vite.config.js               Vite React plugin, image optimizer settings, dev port, and build behavior
|-- vercel.json                  Rewrites SPA route requests to the app shell
|-- dist/                        Generated production build output
|-- node_modules/                Installed dependencies
|-- public/
|   |-- assets/                  Logos, maps, portraits, outreach images, icons, and Teen Star media
|   |   |-- gallery-images/      35 community outreach, medical mission, portrait, and event photos
|   |   `-- social-media-icons/  Social media platform icons (Facebook, Instagram, TikTok, WhatsApp, YouTube)
|   |-- robot.txt                Alternative crawler permissions file
|   |-- robots.txt               Search crawler permissions and sitemap link
|   `-- sitemap.xml              Search engine XML sitemap containing core and dynamic profile URLs
`-- src/
    |-- App.jsx                  Route declarations, code-splitting, ErrorBoundary, CookieNotice, and scroll behavior
    |-- main.jsx                 React root and BrowserRouter setup
    |-- index.css                Global reset, typography defaults, and focus-visible styling
    |-- components/              Reusable page sections, navigation, footer, modals, and global banners
    |   |-- skeleton/            Skeleton screens, shimmer primitives, and delayed fallback wrappers
    |   |-- ContactModal.jsx     Contact details and message submission form
    |   |-- ContactModal.css     Contact modal layout and responsive styles
    |   |-- CookieNotice.jsx     One-time cookie consent notice banner (persists in localStorage)
    |   |-- CookieNotice.css     Fixed banner layout and action button styles
    |   |-- ErrorBoundary.jsx    Error boundary catching lazy chunk load failures with reload button
    |   |-- Footer.jsx           Footer links, contact details, copyright, and privacy policy link
    |   |-- Footer.css           Footer section styling and responsive layout
    |   |-- FooterPrivacyLink.css Styles for Privacy Policy footer anchor
    |   |-- FoundationSection.jsx Foundation overview and outreach cards
    |   |-- FoundationSection.css Foundation section styling
    |   |-- FunFactsSection.jsx  Impact statistics with animated counters
    |   |-- FunFactsSection.css  Fun facts section styling
    |   |-- GetInvolvedModal.jsx Volunteer, partner, and donate cards modal
    |   |-- GetInvolvedModal.css Modal dialog styling
    |   |-- HeroSection.jsx      Hero headline, CTAs, floating photo cards with SkeletonImageLoader
    |   |-- HeroSection.css      Hero section styling and scroll animations
    |   |-- Navbar.jsx           Responsive navigation header and mobile drawer
    |   |-- Navbar.css           Header navigation styles
    |   |-- ProfileModal.jsx     Selected team or partner member details modal
    |   |-- ProfileModal.css     Profile modal dialog styles
    |   |-- TeamSection.jsx      Partners and team member grids
    |   |-- TeamSection.css      Team grid and SVG card patterns
    |   |-- TeenStarBenefits.jsx Teen Star benefits cards and singer photo
    |   |-- TeenStarBenefits.css Benefits section styling
    |   |-- TeenStarCompetitionSteps.jsx Numbered competition steps with icons
    |   |-- TeenStarCompetitionSteps.css Steps grid styling
    |   |-- TeenStarFindVoice.jsx Find Your Voice headline and introduction
    |   |-- TeenStarFindVoice.css Find Voice styling
    |   |-- TeenStarHero.jsx     Spotlight effects and Grace profile card
    |   |-- TeenStarHero.css     Teen Star hero stage styling
    |   |-- TeenStarIntroduction.jsx About and Mission & Vision text with collage
    |   |-- TeenStarIntroduction.css Introduction layout styles
    |   |-- TestimonialsSection.jsx Testimonial quote card and author details
    |   `-- TestimonialsSection.css Testimonials section styling
    |-- data/
    |   `-- homeData.js          Navigation links, stats, images, profiles, gallery items, and contact data
    |-- hooks/
    |   |-- useDelayedLoading.js 200ms debounce hook preventing skeleton flashes on fast routes
    |   `-- useViewport.js       Browser viewport and breakpoint values
    |-- pages/                   Route-level page compositions and page-specific CSS
    |   |-- DonatePage.jsx       Donation instructions, bank details, and copy account button
    |   |-- DonatePage.css       Donate page layout and bank transfer card styles
    |   |-- GalleryPage.jsx      Photo gallery grid (35 photos) with fullscreen lightbox viewer
    |   |-- GalleryPage.css      Gallery grid, card hover, and lightbox overlay styles
    |   |-- HomePage.jsx         Home page composing hero, stats, foundation, team, and testimonials
    |   |-- HomePage.css         Home page wrapper styles
    |   |-- PersonalProfile.jsx  Individual partner or team member profile page
    |   |-- PersonalProfile.css  Profile card, biography, and breadcrumb styles
    |   |-- PrivacyPolicyPage.jsx Privacy policy page with 11 structured information sections and placeholders
    |   |-- PrivacyPolicyPage.css Privacy policy card, typography, and placeholder callout styles
    |   |-- TeenStarPage.jsx     The Next Teen Star competition landing page
    |   `-- TeenStarPage.css     Teen Star page wrapper styles
    |-- styles/
    |   |-- skeleton.css         Core shimmer animations, skeleton primitives, and error boundary styles
    |   `-- tokens.css           Shared CSS custom properties (colors, typography, radii, shadows)
    `-- utils/
        `-- slugify.js           Name-to-route-slug conversion utility
```

`src/components/skeleton/` houses the reusable skeleton loading system:
- `DelayedRouteFallback.jsx`: Suspense fallback wrapper delaying placeholder visibility by 200ms.
- `HomeSkeleton.jsx`, `DonateSkeleton.jsx`, `TeenStarSkeleton.jsx`, `GallerySkeleton.jsx`, `ProfileSkeleton.jsx`: Page-specific skeleton wireframes.
- `SkeletonLine.jsx`, `SkeletonHeading.jsx`, `SkeletonImage.jsx`, `SkeletonAvatar.jsx`, `SkeletonButton.jsx`, `SkeletonCard.jsx`: Atomic placeholder building blocks.
- `SkeletonImageLoader.jsx`: Per-image loader component reserving aspect ratio and showing shimmer until image load completes.

Vite is configured with `build.emptyOutDir: true`, so builds clear the existing `dist` contents before writing fresh output.

## 3. Components

The table lists the exported UI components, helper components, their props/state/effects, where they are used, and their imported CSS. "None" means the component declares no props or React state/effects in its own file.

| Component and file | What it renders and where it is used | Props, state, and effects | CSS |
| --- | --- | --- | --- |
| `App`, `src/App.jsx` | Top-level route switch, code-splitting with `React.lazy` and `Suspense`, global `ErrorBoundary`, `CookieNotice`, and `ScrollToTop`. Mounted by `src/main.jsx`. | No props or local state. Configures 8 routes wrapped in `DelayedRouteFallback`. | None |
| `ScrollToTop`, `src/App.jsx` | Internal helper used by `App`. | Reads `pathname` and `hash` from `useLocation`; effect scrolls to an existing hash target or resets scroll to page top. | None |
| `ErrorBoundary`, `src/components/ErrorBoundary.jsx` | Error boundary wrapping route switches to catch lazy chunk load failures. Displays user-friendly alert card with a reload action. | Props: `children`. State: `hasError`. Lifecycle: `getDerivedStateFromError`, `componentDidCatch`. | `src/styles/skeleton.css` (`.route-error-*`) |
| `CookieNotice`, `src/components/CookieNotice.jsx` | Non-intrusive floating banner informing visitors of cookie and local storage usage, with Accept and Decline buttons and a link to `/privacy-policy`. Mounted globally in `App`. | No props. State: `choice` initialized synchronously from `localStorage.getItem('cookie_consent_choice')` to prevent flash. Sets choice on click wrapped in try/catch. Returns `null` if choice is set. | `src/components/CookieNotice.css` |
| `HomePage`, `src/pages/HomePage.jsx` | Home composition: navbar, hero, facts, foundation, team, testimonials, footer, and modals. Route `/`. | `useNavigate`, `useViewport`; state for selected member and Get Involved modal. Passes handlers to child components. | `src/pages/HomePage.css` |
| `GalleryPage`, `src/pages/GalleryPage.jsx` | Photo gallery presenting 35 outreach, portrait, and event photos across three structured layouts (2-column grid, 4-column portraits, 3-column posters) with fullscreen modal lightbox. Route `/gallery`. | Uses `useNavigate`; state: `selectedImageIndex`. Effect: listens for Escape, ArrowLeft, ArrowRight keys; locks document body scroll while lightbox is open. Uses `SkeletonImageLoader`. | `src/pages/GalleryPage.css` |
| `PrivacyPolicyPage`, `src/pages/PrivacyPolicyPage.jsx` | Organizational privacy policy with 11 structured sections covering contact form data, cookies, local storage, external embeds, and user rights. Contains explicit `[PLACEHOLDER]` notes for unverified administrative details. Route `/privacy-policy`. | Uses `useNavigate`. Effect: sets `document.title` and scrolls to top on mount. | `src/pages/PrivacyPolicyPage.css` |
| `PersonProfile`, `src/pages/PersonalProfile.jsx` | Profile card, biography, breadcrumbs, navbar, and footer. Used by `/:slug` and `/team/:slug`. | Reads `slug` using `useParams`; finds a record in `PARTNERS` and `TEAM_MEMBERS`; `useViewport`; state for donation notice; effect sets document title and scrolls to top. | `src/pages/PersonalProfile.css` |
| `DonatePage`, `src/pages/DonatePage.jsx` | Donation information with child photo, bank transfer panel, copy-account control, navbar, and footer. Route `/donate`. | Uses `useNavigate`; state for thank-you notice and account-copy feedback. Clipboard write is caught; confirmation button shows thank-you message. | `src/pages/DonatePage.css` |
| `TeenStarPage`, `src/pages/TeenStarPage.jsx` | Teen Star page composition: navbar, hero, Find Your Voice, Introduction/Mission & Vision, benefits, competition steps, footer. Route `/the-next-teen-star`. | No page-local state or props. | `src/pages/TeenStarPage.css` |
| `Navbar`, `src/components/Navbar.jsx` | Responsive navigation, mobile drawer, Gallery link, Teen Star link, and Donate CTA button. Used across all pages. | Optional `onDonateClick` and `onGetInvolvedClick`. State tracks mobile drawer open, scrolled state, and visibility. Effect subscribes to scroll and removes listener. | `src/components/Navbar.css` |
| `HeroSection`, `src/components/HeroSection.jsx` | Home hero headline, CTAs, map layers, and 3 floating child photo cards rendered with `SkeletonImageLoader`. Used by `HomePage`. | Optional `onGetInvolvedClick` and `onDonateClick`; ref plus effect tracks scroll and writes `--hero-scroll` on the section. | `src/components/HeroSection.css` |
| `FunFactsSection`, `src/components/FunFactsSection.jsx` | Three impact statistic cards. Used by `HomePage`. | No props. Ref and `hasStarted` state; `IntersectionObserver` starts count animation when section enters view. Maps `FUN_FACTS`. | `src/components/FunFactsSection.css` |
| `StatCounter`, `src/components/FunFactsSection.jsx` | Internal animated number used within each facts card. | Props: `target`, `suffix`, `startAnimation`, `duration` (default `2500`). Local `count` state and animation-frame effect. Respects `prefers-reduced-motion`. | `src/components/FunFactsSection.css` |
| `FoundationSection`, `src/components/FoundationSection.jsx` | Foundation overview and outreach cards. Used by `HomePage`. | No props or local state. Maps `OUTREACHES`; image error hides image and adds `image-fallback` to its container. | `src/components/FoundationSection.css` |
| `TeamSection`, `src/components/TeamSection.jsx` | Partner and team grids. Used by `HomePage`. | Optional `onSelectMember`; reads `PARTNERS` and `TEAM_MEMBERS`; creates `/team/:slug` links using `slugify`. | `src/components/TeamSection.css` |
| `CardPattern`, `src/components/TeamSection.jsx` | Internal SVG pattern for profile cards: circles, diamonds, prisms, or default stripes. Used by `TeamSection`. | Props: `pattern` and `id`; no state. | `src/components/TeamSection.css` |
| `TestimonialsSection`, `src/components/TestimonialsSection.jsx` | Testimonial image, quote, star rating, and author. Used by `HomePage`. | No props. `activeSlide` state and previous/next handlers exist, but arrow markup is commented out and array contains one testimonial. | `src/components/TestimonialsSection.css` |
| `Footer`, `src/components/Footer.jsx` | Contact details, Teen Star link, brand information, copyright text, Contact button, and direct Privacy Policy link. Used on all pages. | No props. Local state controls `ContactModal`. Reads `CONTACT_INFO`. Links directly to `/privacy-policy`. | `src/components/Footer.css`, `src/components/FooterPrivacyLink.css` |
| `GetInvolvedModal`, `src/components/GetInvolvedModal.jsx` | Volunteer, partner, and donate cards. Used by `HomePage`. | Props: `isOpen`, `onClose`, `onDonateClick`. State switches to `ContactModal` for Volunteer/Partner. Effect handles Escape and body scroll lock. | `src/components/GetInvolvedModal.css` |
| `ContactModal`, `src/components/ContactModal.jsx` | Contact details and message form. Used by `Footer` and `GetInvolvedModal`. | Props: `isOpen`, `onClose`. State: `status` (`idle`, `sending`, `success`, `error`); ref focuses name input. Effect handles Escape and body scroll lock. Submit posts form data to `VITE_SHEET_URL`. | `src/components/ContactModal.css` |
| `ProfileModal`, `src/components/ProfileModal.jsx` | Selected member details, photo/logo/fallback, bio, optional external link. Used by `HomePage`. | Props: `member`, `onClose`. Effect handles Escape and body scroll lock. | `src/components/ProfileModal.css` |
| `TeenStarHero`, `src/components/TeenStarHero.jsx` | Spotlight lights, shared profile-card styling for Grace, stars, and podium. Used by `TeenStarPage`. | No props or React state. | `src/components/TeenStarHero.css` |
| `TeenStarFindVoice`, `src/components/TeenStarFindVoice.jsx` | Find Your Voice eyebrow, competition heading, and summary. Used by `TeenStarPage`. | No props or state. | `src/components/TeenStarFindVoice.css` |
| `TeenStarIntroduction`, `src/components/TeenStarIntroduction.jsx` | Introduction text/image and Mission & Vision text/collage. Used by `TeenStarPage`. | No props or state. | `src/components/TeenStarIntroduction.css` |
| `TeenStarBenefits`, `src/components/TeenStarBenefits.jsx` | Singer photo and three benefit cards. Used by `TeenStarPage`. | No props or state. Static benefit data and Lucide icons are local constants. | `src/components/TeenStarBenefits.css` |
| `TeenStarCompetitionSteps`, `src/components/TeenStarCompetitionSteps.jsx` | Four numbered competition steps with icons. Used by `TeenStarPage`. | No props or state. Step data and Lucide icons are local constants. | `src/components/TeenStarCompetitionSteps.css` |
| `DelayedRouteFallback`, `src/components/skeleton/DelayedRouteFallback.jsx` | Suspense fallback that waits 200ms before rendering its skeleton prop to avoid flicker. Used by `App.jsx`. | Props: `skeleton`. Uses `useDelayedLoading(true, 200)`. | Inherited from child |
| `SkeletonImageLoader`, `src/components/skeleton/SkeletonImageLoader.jsx` | Image wrapper displaying a `.skeleton` shimmer placeholder until the image finishes loading, ensuring zero layout shift. Used in `HeroSection` and `GalleryPage`. | Props: `src`, `alt`, `className`, `wrapperClassName`, `aspectRatio`, `loading`, `style`, `...rest`. State: `loaded`. Handlers: `onLoad`, `onError`. | `src/styles/skeleton.css` |
| `HomeSkeleton`, `src/components/skeleton/HomeSkeleton.jsx` | Route skeleton wireframe for `HomePage`. | No props or state. | `src/styles/skeleton.css` |
| `DonateSkeleton`, `src/components/skeleton/DonateSkeleton.jsx` | Route skeleton wireframe for `DonatePage`. | No props or state. | `src/styles/skeleton.css` |
| `TeenStarSkeleton`, `src/components/skeleton/TeenStarSkeleton.jsx` | Route skeleton wireframe for `TeenStarPage`. | No props or state. | `src/styles/skeleton.css` |
| `GallerySkeleton`, `src/components/skeleton/GallerySkeleton.jsx` | Route skeleton wireframe for `GalleryPage`. | No props or state. | `src/styles/skeleton.css` |
| `ProfileSkeleton`, `src/components/skeleton/ProfileSkeleton.jsx` | Route skeleton wireframe for `PersonalProfile`. | No props or state. | `src/styles/skeleton.css` |
| `SkeletonLine`, `src/components/skeleton/SkeletonLine.jsx` | Single text line shimmer primitive. | Props: `width`, `height`, `className`, `style`. | `src/styles/skeleton.css` |
| `SkeletonHeading`, `src/components/skeleton/SkeletonHeading.jsx` | Heading block shimmer primitive. | Props: `width`, `height`, `className`, `style`. | `src/styles/skeleton.css` |
| `SkeletonImage`, `src/components/skeleton/SkeletonImage.jsx` | Image/media rectangle shimmer primitive. | Props: `width`, `height`, `borderRadius`, `className`, `style`. | `src/styles/skeleton.css` |
| `SkeletonAvatar`, `src/components/skeleton/SkeletonAvatar.jsx` | Circular avatar shimmer primitive. | Props: `size`, `className`, `style`. | `src/styles/skeleton.css` |
| `SkeletonButton`, `src/components/skeleton/SkeletonButton.jsx` | Pill button shimmer primitive. | Props: `width`, `height`, `className`, `style`. | `src/styles/skeleton.css` |
| `SkeletonCard`, `src/components/skeleton/SkeletonCard.jsx` | Card container shimmer primitive. | Props: `width`, `height`, `borderRadius`, `className`, `style`. | `src/styles/skeleton.css` |

## 4. Data and Content

Most reusable home-page content, navigation links, and gallery records are defined in `src/data/homeData.js`:

| Export | Contents | Consumed by |
| --- | --- | --- |
| `NAV_LINKS` | Home, About Us, Get Involved, Gallery (`/gallery`), and TNTS hrefs | `Navbar` |
| `FUN_FACTS` | Three impact statistics and descriptive labels | `FunFactsSection` |
| `HERO_CHILDREN` | Three image paths, alt text, card roles, and rotation values | `HeroSection` |
| `OUTREACHES` | Two outreach titles, descriptions, and image paths | `FoundationSection` |
| `PARTNERS` | Eight partner records with names, roles, images, patterns, bios, and optional URLs | `TeamSection`, `PersonalProfile`, `HomePage` |
| `TEAM_MEMBERS` | Seven team records with names, roles, images, patterns, and bios | `TeamSection`, `PersonalProfile`, `HomePage` |
| `TESTIMONIAL` | One quote, author, role, image, and star rating | `TestimonialsSection` |
| `CONTACT_INFO` | Physical address, email, phone numbers, website label, and copyright text | `Footer`, `ContactModal` |
| `SOCIAL_LINKS` | Five social media objects (Facebook, Instagram, TikTok, WhatsApp, YouTube) with names, links, and icons | `Footer` |
| `GALLERY_IMAGES` | 35 image objects with `id`, `image`, `src`, and `alt` properties mapped to design layout sections | `GalleryPage` |
| `NEXT_TEEN_STAR` | Winner object containing `name`, `title`, `role`, `image` path, and `alt` text for the competition hero stage | `TeenStarHero` |

### Client-side storage and cookies

The website implementation manages client-side storage as follows:
- **Storage engine**: Browser `window.localStorage`.
- **Key name**: `cookie_consent_choice`.
- **Allowed values**: `"accepted"` (set when clicking Accept) or `"declined"` (set when clicking Decline).
- **Behavior**: The initial value is read synchronously inside `CookieNotice.jsx`'s `useState` initializer to prevent banner flash during page load. If the key exists, the banner returns `null` and remains hidden. If absent, the banner appears.
- **Error handling**: Both `localStorage.getItem` and `localStorage.setItem` are enclosed in `try/catch` blocks so that browsers with strict security policies (or private/incognito modes blocking storage access) never crash.
- **Cookies**: The website application itself sets no tracking, advertising, session, or analytical cookies. External embeds (specifically YouTube video embeds) may set their own third-party cookies when played.

### Updating content

- Update arrays and `CONTACT_INFO` in `src/data/homeData.js` for navigation labels, stats, hero cards, outreach cards, partner/team bios, testimonial fields, gallery images, and footer details.
- Much of the Foundation, Donate, Teen Star, Gallery, Privacy Policy, Contact modal, and Get Involved copy is written directly in the corresponding JSX files. Search those component files to update that text.
- Images are referenced by `/assets/...` URLs. Place replacement files in `public/assets/` or `public/assets/gallery-images/` and update the corresponding path in `homeData.js` or component JSX.
- Profile routes are generated from each person's `name` by `src/utils/slugify.js`. Update route links and slug-sensitive code if naming conventions change.

### Activating "The Next Teen Star" Winner State

The hero section of the competition page (`/the-next-teen-star`) is currently styled in a desaturated, pre-event placeholder state while awaiting the crowning of the competition winner. Once the client has selected and announced the winner, activate the full celebratory, full-color winner stage by completing the following four steps:

#### 1. Update winner details in `src/data/homeData.js`
Locate the `NEXT_TEEN_STAR` export and replace the placeholder fields:
```javascript
export const NEXT_TEEN_STAR = {
  name: "Winner's Full Name",          // e.g. "Grace Evaly"
  title: "WINNER TNTS, 2026",          // Official award or winning title
  role: "",                            // Optional additional subtitle
  image: "/assets/winner-photo.png",   // Cutout portrait saved in /public/assets/
  alt: "The Next Teen Star Winner"     // Descriptive alt text
};
```
Save the winner's cutout photo (a transparent PNG with background removed) into `public/assets/` and point `image` to that file path.

#### 2. Re-enable concentric vector rings in `src/components/TeenStarHero.jsx`
In `src/components/TeenStarHero.jsx` (lines 24-32), uncomment the `.teen-star-profile-card-rings-bg` block so the radiating concentric rings render behind the winner's portrait:
```jsx
<div className="teen-star-profile-card-rings-bg" aria-hidden="true">
  <svg viewBox="0 0 400 520" fill="none" preserveAspectRatio="xMidYMid slice" className="concentric-rings-svg">
    <circle cx="200" cy="220" r="75" stroke="rgba(255, 255, 255, 0.16)" strokeWidth="1.5" />
    <circle cx="200" cy="220" r="130" stroke="rgba(255, 255, 255, 0.13)" strokeWidth="1.5" />
    <circle cx="200" cy="220" r="185" stroke="rgba(255, 255, 255, 0.10)" strokeWidth="1.5" />
    <circle cx="200" cy="220" r="240" stroke="rgba(255, 255, 255, 0.08)" strokeWidth="1.5" />
    <circle cx="200" cy="220" r="295" stroke="rgba(255, 255, 255, 0.06)" strokeWidth="1.5" />
  </svg>
</div>
```

#### 3. Restore full color and remove grayscale filters in `src/components/TeenStarHero.css`
The pre-event state applies grayscale filters across the hero elements. Update these rules to activate full color:
- **Profile card and golden stars**: In `.teen-star-stage .teen-star-featured-profile` (line 144), remove `filter: grayscale(100%);` so the winner portrait, placard, and the 5-star golden trophy overlay (`/assets/stars.png`) render in full vibrant color.
- **Card background**: In `.teen-star-profile-card-outer .teen-star-profile-card-inner` (line 89), change the flat grey `background: #EDEDED;` to the signature purple gradient (e.g. `background: radial-gradient(circle at 50% 50%, #8A38F5 0%, #6818D8 100%);` or `background: var(--color-purple, #8A38F5);`).
- **Stage spotlights**: In `.teen-star-light` (line 41), remove `filter: grayscale(100%);` so the stage lighting fixtures beam their purple-violet cones across the stage.
- **Background map**: In `.teen-star-hero::before` (line 29), remove `filter: grayscale(100%);` so the dot-matrix world map displays in its original lavender/purple tint.

#### 4. Build and verify
Run `npm run build` to verify image optimization of the new winner portrait asset and ensure zero build warnings or errors. Check the live page on mobile (360px), tablet, and desktop viewports to ensure the portrait remains centered and the golden stars overlay rests cleanly over the placard and podium.

## 5. Styling and `className` Conventions

The project uses ordinary global CSS selectors, not CSS Modules. JSX files import a same-name CSS file next to the component; page styles live beside page JSX. `src/index.css` supplies global resets and typography defaults. `src/styles/tokens.css` defines brand colors, typography variables, radii, and shadows. `src/styles/skeleton.css` defines the skeleton loading system.

### Skeleton loading styles

`src/styles/skeleton.css` provides the additive shimmer effects:
- CSS variables: `--skeleton-base: #e9e9ed`, `--skeleton-shimmer: #f5f5f8`, `--skeleton-radius: 6px`.
- Shimmer animation: `.skeleton` uses a 1.4s linear infinite sweep (`linear-gradient(90deg, base 0%, shimmer 50%, base 100%)`).
- Motion accessibility: `@media (prefers-reduced-motion: reduce)` disables keyframe animation and sets a static background color.
- Zero layout shift: `.skeleton-img-wrapper` and `.skeleton-img-placeholder` maintain dimensions while images load, applying `.img-loaded` with smooth opacity transitions.
- Route error fallback: `.route-error-container`, `.route-error-heading`, `.route-error-text`, and `.route-error-btn` provide a clean fallback layout if chunk fetching fails.

### Naming rules observed

| Rule | Examples from the code |
| --- | --- |
| Class names are usually lowercase kebab-case. | `.donate-transfer-panel` in `DonatePage.css`; `.gallery-grid-2col` in `GalleryPage.css`; `.cookie-notice-banner` in `CookieNotice.css`; `.privacy-page-card` in `PrivacyPolicyPage.css` |
| A component or feature name is commonly used as the prefix. | `.hero-title` in `HeroSection.css`; `.foundation-section` in `FoundationSection.css`; `.gallery-card` in `GalleryPage.css`; `.privacy-section` in `PrivacyPolicyPage.css` |
| Child parts append a descriptive word or phrase to the component prefix. | `.contact-modal-layout` and `.contact-modal-form`; `.gallery-hero-section` and `.gallery-lightbox-modal`; `.privacy-placeholder-box` |
| State and variants are appended as classes rather than using BEM double separators. | `.nav-hidden` and `.nav-visible`; `.mobile-nav-drawer.open`; `.cookie-notice-btn-accept`; `.img-loaded` and `.img-loading` |

### Shared and global selectors

Some class groups are reused across components:
- `.section-title` and `.section-eyebrow` (defined in `FunFactsSection.css` and reused in other home sections).
- `.brand-logo-mark` (used in Navbar and Footer markup).
- `.card-*` and `.modal-*` groups in dialogs.
- `index.css` includes global reset rules for `*`, `html`, `body`, `img`, `picture`, `video`, `canvas`, `svg`, form controls, headings, paragraphs, anchors, and `:focus-visible`.

## 6. Contact Form Flow

`ContactModal` renders required `name`, `email`, and `message` fields plus an optional `phone` field. On submit it serializes `FormData` as `URLSearchParams` and POSTs to `import.meta.env.VITE_SHEET_URL` with `mode: 'no-cors'`.

- Before the request, the component sets status to `sending` and disables the submit button.
- If `fetch` resolves, status becomes `success`, the form is reset, and a success message is shown.
- If `fetch` rejects, status becomes `error` and a generic error alert is shown.
- `no-cors` makes the response opaque. The code cannot inspect the response status or body, so the success message indicates that `fetch` resolved, not that the receiver confirmed storage or delivery.
- There is no client-side check that `VITE_SHEET_URL` is defined, and there is no timeout or retry logic.
- The endpoint service, accepted field names, validation, persistence, and retention policy are not implemented in this repository. Needs confirmation.

The Contact button in the Footer opens this dialog. Volunteer and Be a partner in `GetInvolvedModal` also switch to this dialog.

## 7. Environment Variables

The application reads one environment variable name:

| Name | Purpose | Read from |
| --- | --- | --- |
| `VITE_SHEET_URL` | URL endpoint for ContactModal POST submissions | `src/components/ContactModal.jsx` |

Create local configuration using `.env.example` as a template and provide the endpoint URL outside source control. Because this variable is bundled into browser-side client JavaScript by Vite (`import.meta.env`), it must never contain private server API tokens, passwords, or credentials. Actual production values are intentionally not recorded in documentation.

## 8. Routing, App Flow, and Hosting Requirements

`src/main.jsx` mounts `App` inside React Router's `BrowserRouter`. No app-wide React context or global application state is defined; state is local to pages/components and passed through props.

### Active routes

All routes are lazy-loaded via `React.lazy()` and wrapped in `Suspense` using `DelayedRouteFallback`. Route declarations in `App.jsx` are ordered specifically so that fixed routes precede dynamic parameters:

| Route | Page | Lazy fallback | Behavior |
| --- | --- | --- | --- |
| `/` | `HomePage` | `HomeSkeleton` | Home sections and profile/Get Involved modals |
| `/donate` | `DonatePage` | `DonateSkeleton` | Static bank transfer details and account copy control |
| `/the-next-teen-star` | `TeenStarPage` | `TeenStarSkeleton` | Teen Star hero, overview, benefits, and competition steps |
| `/gallery` | `GalleryPage` | `GallerySkeleton` | Photo collection and interactive fullscreen modal lightbox |
| `/privacy-policy` | `PrivacyPolicyPage` | `null` | Structured privacy policy document (11 sections) |
| `/:slug` | `PersonProfile` | `ProfileSkeleton` | Resolves a slug against `PARTNERS` and `TEAM_MEMBERS` |
| `/team/:slug` | `PersonProfile` | `ProfileSkeleton` | Profile-card destination generated by `TeamSection` |
| `*` | `HomePage` | `HomeSkeleton` | Unknown path fallback |

### Route mechanics and error resilience

- Route order protection: `/gallery` and `/privacy-policy` are declared before `/:slug` and `/team/:slug` so they are never intercepted as profile slugs.
- `DelayedRouteFallback`: Wraps route fallbacks with a 200ms debounce via `useDelayedLoading`. If a code chunk loads within 200ms (e.g. from browser cache), no skeleton is displayed, eliminating visual flicker.
- `ErrorBoundary`: Catches JavaScript and network chunk-loading failures across all routes, rendering a recovery UI with a "Reload Page" button.
- `ScrollToTop`: Listens to `pathname` and `hash` changes. If a matching hash element exists, it scrolls to that element immediately; otherwise it resets the window scroll to top.

### SPA rewrite requirement for hosting

The project is a client-side Single Page Application (SPA). Under client-side routing, navigation is handled dynamically in the browser by React Router using the HTML5 History API (`pushState`/`replaceState`), without making new server round-trips for HTML documents.

When a user accesses the site directly via a deep route (e.g. `https://example.com/the-next-teen-star`, `/gallery`, `/privacy-policy`, `/donate`, `/team/:slug`, or `/:slug`) or refreshes a non-root page, static file servers naturally attempt to locate a directory or file at that path on disk (e.g. `/gallery/index.html`). Because those static files do not exist, the server will return an HTTP 404 Not Found error unless an SPA rewrite rule is configured.

To prevent 404 errors, the hosting environment must rewrite all incoming route requests to the single root shell at `/index.html`:
- For **Vercel**, this rule is configured in `vercel.json`:
  ```json
  {
    "rewrites": [
      {
        "source": "/(.*)",
        "destination": "/index.html"
      }
    ]
  }
  ```
- Any alternative hosting platform (such as Netlify, Cloudflare Pages, Firebase Hosting, AWS S3/CloudFront, Nginx, or Apache) requires an equivalent rewrite fallback to `/index.html`.

### Search engine crawling and sitemaps

Search crawlers and indexers are configured via public root files:
- `public/sitemap.xml`: Declares 20 XML location entries, change frequencies, priorities, and `lastmod` dates for the 5 core pages (`/`, `/the-next-teen-star`, `/donate`, `/gallery`, `/privacy-policy`) and all 15 active partner and team profiles (`/team/<slug>`) matching `homeData.js`.
- `public/robots.txt` and `public/robot.txt`: Permit search crawler indexing for all public paths (`User-agent: *`, `Allow: /`) and declare the sitemap reference `https://www.chresthosempowermentfoundation.com/sitemap.xml`.

## 9. Accessibility and Behavior Notes

### Present in the code

- Main landmarks (`<main id="main-content">`, `<header>`, `<footer>`), section labels, dialog roles (`role="dialog"`, `aria-modal="true"`), and descriptive button labels are used across pages.
- Decorative maps, SVGs, and background layers use `aria-hidden="true"` and empty alt text.
- The navigation menu button exposes `aria-label` and `aria-expanded`.
- Dialogs (`ContactModal`, `ProfileModal`, `GetInvolvedModal`, and `GalleryPage` lightbox) listen for Escape to close and manage document body scroll locking.
- `GalleryPage` lightbox supports keyboard navigation via Left Arrow (previous) and Right Arrow (next), and photo cards support keyboard activation (`Enter` / `Space`).
- `CookieNotice` uses `role="region"` and `aria-label="Cookie and privacy notice"`, with clear Accept and Decline button controls.
- `ErrorBoundary` uses `role="alert"` for the error notification container.
- Skeleton placeholders use `aria-hidden="true"`, while image wrappers expose `aria-busy` during loading.
- Motion accessibility: `src/styles/skeleton.css` and `FunFactsSection.jsx` respect `prefers-reduced-motion: reduce`.
- Form labels wrap their inputs; required fields use `required`. Contact status updates use `role="status"` and error alerts use `role="alert"`.
- Global `:focus-visible` styling is defined in `src/index.css`.
- External links use `target="_blank"` with `rel="noopener noreferrer"`.

### Gaps

- Modals do not implement a strict circular focus trap or restore focus to the opening element upon close.
- The mobile navbar drawer has no Escape key handler or `aria-controls` reference.
- Team cards in `TeamSection` are anchor elements with `role="button"` and custom keyboard handlers, mixing link and button semantics.
- `ContactModal` cannot verify server-side storage because the network request uses `no-cors`.

## 10. Known Issues and Suggested Improvements

These items are directly supported by the current code. They are listed as findings, not claims about production behavior beyond what the implementation shows.

1. The Grace selection path uses `/grace-evaly`, while profile lookup slugifies `Mrs. Grace Evaly` to `mrs-grace-evaly`. That direct path will not match the record. See [HomePage.jsx, line 23](src/pages/HomePage.jsx#L23), [PersonalProfile.jsx, line 18](src/pages/PersonalProfile.jsx#L18), and [slugify.js, line 5](src/utils/slugify.js#L5).
2. At tablet widths up to 1100px, `TeamSection.css` sets `.figma-partner-card` width to `3000px`. This can overflow the grid. See [TeamSection.css, line 355](src/components/TeamSection.css#L355).
3. The Foundation map wrapper is styled but has no corresponding markup in `FoundationSection.jsx`; those map declarations currently have no effect. See [FoundationSection.css, line 15](src/components/FoundationSection.css#L15) and [FoundationSection.jsx](src/components/FoundationSection.jsx).
4. `TestimonialsSection` has one testimonial record, state and handlers for changing slides, but its arrow controls are commented out. The displayed slide cannot currently be changed through the UI. See [TestimonialsSection.jsx, line 6](src/components/TestimonialsSection.jsx#L6), [TestimonialsSection.jsx, line 9](src/components/TestimonialsSection.jsx#L9), and [TestimonialsSection.jsx, line 97](src/components/TestimonialsSection.jsx#L97).
5. The Contact form marks any resolved `no-cors` fetch as success without access to the response status or body, and does not validate the endpoint variable before sending. See [ContactModal.jsx, line 40](src/components/ContactModal.jsx#L40) and [ContactModal.jsx, line 43](src/components/ContactModal.jsx#L43).
6. `PrivacyPolicyPage.jsx` contains explicit administrative placeholders (`[BUSINESS NAME]`, `[PHYSICAL ADDRESS]`, `[CONTACT EMAIL]`, `[PHONE NUMBER]`, `[LAST UPDATED DATE]`, and retention/access details) that require confirmation and filling in with official foundation information prior to public deployment.

### Needs confirmation

- The production value and owner of `VITE_SHEET_URL`, the receiving service, accepted fields, and how success should be verified.
- Whether the static account number `0000000000` on the Donate page should be replaced with production bank details.
- The administrative details and placeholders in `PrivacyPolicyPage.jsx`.
- The deployment host is Vercel, as confirmed by the project owner. The release workflow and Vercel project settings are not defined in the repository. Needs confirmation.
