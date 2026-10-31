# Chresthos Empowerment Foundation

This document describes the current implementation in the repository. It reflects the source code, package manifest, and Vite configuration reviewed for this project. It does not describe functionality that is not present in the code.

## 1. Project Overview

The site presents the Chresthos Empowerment Foundation, its outreach work, impact statistics, partners, team, and a supporter testimonial. It also includes individual partner/team profile routes, a donation information page, and a page for The Next Teen Star singing competition.

The contact dialog collects a name, email address, optional phone number, and message. It submits these fields to the endpoint configured by `VITE_SHEET_URL`. The code does not identify the endpoint's backend service. Needs confirmation: who operates that endpoint, its production URL, and its retention/processing behavior.

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

The project uses ES modules (`"type": "module"`) and is marked private in `package.json`.

### Scripts

| Command | Script | Purpose |
| --- | --- | --- |
| `npm run dev` | `vite` | Starts the Vite development server. `vite.config.js` sets port `3000` and `open: false`. |
| `npm run build` | `vite build` | Creates the production output in `dist`. |
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
|-- vite.config.js               Vite React plugin, dev port, and build output behavior
|-- dist/                        Generated production build output
|-- node_modules/                Installed dependencies
|-- public/
|   `-- assets/                  Logos, maps, portraits, outreach images, icons, and Teen Star media
`-- src/
    |-- App.jsx                  Route declarations and route scroll behavior
    |-- main.jsx                 React root and BrowserRouter setup
    |-- index.css                Global reset, typography defaults, and focus-visible styling
    |-- components/               Reusable page sections, navigation, footer, and modal UI
    |-- data/
    |   `-- homeData.js           Navigation, stats, images, profiles, testimonial, and contact data
    |-- hooks/
    |   `-- useViewport.js        Browser viewport and breakpoint values
    |-- pages/                    Route-level page compositions and page-specific CSS
    |-- styles/
    |   `-- tokens.css            Shared CSS custom properties
    `-- utils/
        `-- slugify.js            Name-to-route-slug conversion
```

`src/components/` contains paired JSX and CSS files for `ContactModal`, `Footer`, `FoundationSection`, `FunFactsSection`, `GetInvolvedModal`, `HeroSection`, `Navbar`, `ProfileModal`, `TeamSection`, `TeenStarBenefits`, `TeenStarCompetitionSteps`, `TeenStarFindVoice`, `TeenStarHero`, `TeenStarIntroduction`, and `TestimonialsSection`.

`src/pages/` contains `HomePage`, `PersonalProfile`, `DonatePage`, and `TeenStarPage`, with corresponding page CSS files.

Vite is configured with `build.emptyOutDir: false`. Builds write to `dist` but do not clear that directory first.

## 3. Components

The table lists the exported UI components, the local helper components, their props/state/effects, where they are used, and their imported CSS. "None" means the component declares no props or React state/effects in its own file.

| Component and file | What it renders and where it is used | Props, state, and effects | CSS |
| --- | --- | --- | --- |
| `App`, `src/App.jsx` | Route switch for all pages. Mounted by `src/main.jsx`. | No props or local state. Renders `ScrollToTop` and `Routes`. | None |
| `ScrollToTop`, `src/App.jsx` | Internal helper used by `App`. | Reads `pathname` and `hash` from `useLocation`; effect scrolls to an existing hash target or to page top. | None |
| `HomePage`, `src/pages/HomePage.jsx` | Home composition: navbar, hero, facts, foundation, team, testimonials, footer, and modals. Route `/`. | `useNavigate`, `useViewport`; state for selected member and Get Involved modal. Passes handlers to child components. | `src/pages/HomePage.css` |
| `PersonProfile`, `src/pages/PersonalProfile.jsx` | Profile card, biography, breadcrumbs, navbar, footer, and Get Involved modal. Used by `/:slug` and `/team/:slug`. | Reads `slug` using `useParams`; finds a record in `PARTNERS` and `TEAM_MEMBERS`; `useViewport`; state for donation notice and Get Involved modal; effect sets the document title and scrolls to top. | `src/pages/PersonalProfile.css` |
| `DonatePage`, `src/pages/DonatePage.jsx` | Donation information with child photo, bank transfer panel, copy-account control, navbar, and footer. Route `/donate`. | Uses `useNavigate`; state for thank-you notice and account-copy feedback. Clipboard write is caught; the confirmation button only shows a thank-you message. | `src/pages/DonatePage.css` |
| `TeenStarPage`, `src/pages/TeenStarPage.jsx` | Teen Star page composition: navbar, hero, Find Your Voice, Introduction/Mission & Vision, benefits, competition steps, footer. Route `/the-next-teen-star`. | No page-local state or props. | `src/pages/TeenStarPage.css` |
| `Navbar`, `src/components/Navbar.jsx` | Responsive desktop navigation, mobile drawer, Teen Star star link, and Donate button. Used by all four pages. | Optional `onDonateClick` and `onGetInvolvedClick`. State tracks mobile drawer open, scrolled state, and visibility. Effect subscribes to scroll and removes the listener. | `src/components/Navbar.css` |
| `HeroSection`, `src/components/HeroSection.jsx` | Home hero headline, CTAs, child image cards, and map layers. Used by `HomePage`. | Optional `onGetInvolvedClick` and `onDonateClick`; ref plus effect tracks scroll and writes `--hero-scroll` on the section. | `src/components/HeroSection.css` |
| `FunFactsSection`, `src/components/FunFactsSection.jsx` | Three impact statistic cards. Used by `HomePage`. | No props. Ref and `hasStarted` state; an `IntersectionObserver` starts the count animation when the section enters view. Maps `FUN_FACTS`. | `src/components/FunFactsSection.css` |
| `StatCounter`, `src/components/FunFactsSection.jsx` | Internal animated number used within each facts card. | Props: `target`, `suffix`, `startAnimation`, `duration` (default `2500`). Local `count` state and an animation-frame effect. Respects `prefers-reduced-motion` by setting the target immediately. | Uses `FunFactsSection.css` classes from its parent file |
| `FoundationSection`, `src/components/FoundationSection.jsx` | Foundation overview and outreach cards. Used by `HomePage`. | No props or local state. Maps `OUTREACHES`; image error hides the image and adds `image-fallback` to its container. | `src/components/FoundationSection.css` |
| `TeamSection`, `src/components/TeamSection.jsx` | Partner and team grids. Used by `HomePage`. | Optional `onSelectMember`; reads `PARTNERS` and `TEAM_MEMBERS`; creates `/team/:slug` links using `slugify`. | `src/components/TeamSection.css` |
| `CardPattern`, `src/components/TeamSection.jsx` | Internal SVG pattern for profile cards: circles, diamonds, prisms, or default stripes. Used by `TeamSection`. | Props: `pattern` and `id`; no state. | `src/components/TeamSection.css` |
| `TestimonialsSection`, `src/components/TestimonialsSection.jsx` | Testimonial image, quote, star rating, and author. Used by `HomePage`. | No props. `activeSlide` state and previous/next handlers exist, but the arrow markup is commented out and the array currently contains one testimonial. | `src/components/TestimonialsSection.css` |
| `Footer`, `src/components/Footer.jsx` | Contact details, Teen Star link, brand information, copyright, and Contact button. Used by all four pages. | No props. Local state controls `ContactModal`. Reads `CONTACT_INFO`. | `src/components/Footer.css` |
| `GetInvolvedModal`, `src/components/GetInvolvedModal.jsx` | Volunteer, partner, and donate cards. Used by `HomePage` and `PersonProfile`. | Props: `isOpen`, `onClose`, `onDonateClick`. State switches to `ContactModal` for Volunteer/Partner. Effect handles Escape and body scroll lock. Donate closes this dialog and calls `onDonateClick`. | `src/components/GetInvolvedModal.css` |
| `ContactModal`, `src/components/ContactModal.jsx` | Contact details and message form. Used by `Footer` and `GetInvolvedModal`. | Props: `isOpen`, `onClose`. State: `status` (`idle`, `sending`, `success`, `error`); ref focuses the name input. Effect handles Escape and body scroll lock. Submit posts form data to `VITE_SHEET_URL`. | `src/components/ContactModal.css` |
| `ProfileModal`, `src/components/ProfileModal.jsx` | Selected member details, photo/logo/fallback, bio, optional external link. Used by `HomePage`. | Props: `member`, `onClose`. Effect handles Escape and body scroll lock. | `src/components/ProfileModal.css` |
| `TeenStarHero`, `src/components/TeenStarHero.jsx` | Spotlight lights, shared profile-card styling for Grace, stars, and podium. Used by `TeenStarPage`. | No props or React state. | `src/components/TeenStarHero.css`; also uses profile-card selectors from `src/pages/PersonalProfile.css` |
| `TeenStarFindVoice`, `src/components/TeenStarFindVoice.jsx` | Find Your Voice eyebrow, competition heading, and summary. Used by `TeenStarPage`. | No props or state. | `src/components/TeenStarFindVoice.css` |
| `TeenStarIntroduction`, `src/components/TeenStarIntroduction.jsx` | Introduction text/image and Mission & Vision text/collage. Used by `TeenStarPage`. | No props or state. | `src/components/TeenStarIntroduction.css` |
| `TeenStarBenefits`, `src/components/TeenStarBenefits.jsx` | Singer photo and three benefit cards. Used by `TeenStarPage`. | No props or state. Static benefit data and Lucide icons are local constants. | `src/components/TeenStarBenefits.css` |
| `TeenStarCompetitionSteps`, `src/components/TeenStarCompetitionSteps.jsx` | Four numbered competition steps with icons. Last main section in `TeenStarPage`. | No props or state. Step data and Lucide icons are local constants. | `src/components/TeenStarCompetitionSteps.css` |

`parseStat` in `FunFactsSection.jsx` is a helper function, not a component. It extracts a number and suffix from each stat string.

## 4. Data and Content

Most reusable home-page content is in `src/data/homeData.js`:

| Export | Contents | Consumed by |
| --- | --- | --- |
| `NAV_LINKS` | Home, About us, Get involved, and TNTS hrefs | `Navbar` |
| `FUN_FACTS` | Three impact statistics and labels | `FunFactsSection` |
| `HERO_CHILDREN` | Three image paths, alt text, card roles, and rotation values | `HeroSection` |
| `OUTREACHES` | Two outreach titles, descriptions, and image paths | `FoundationSection` |
| `PARTNERS` | Eight partner records with names, roles, images, patterns, bios, and optional URLs | `TeamSection`, `PersonalProfile`, `HomePage` |
| `TEAM_MEMBERS` | Seven team records with names, roles, images, patterns, and bios | `TeamSection`, `PersonalProfile`, `HomePage` |
| `TESTIMONIAL` | One quote, author, role, image, and rating | `TestimonialsSection` |
| `CONTACT_INFO` | Address, email, phone numbers, website label, and copyright text | `Footer`, `ContactModal` |

### Updating content

- Update arrays and `CONTACT_INFO` in `src/data/homeData.js` for navigation labels/URLs, stats, hero cards, outreach cards, partner/team bios, testimonial fields, and footer contact details.
- Much of the Foundation, Donate, Teen Star, Contact modal, and Get Involved copy is written directly in the corresponding JSX files. Search those component files to update that text.
- Images are referenced by `/assets/...` URLs. Place replacement files in `public/assets/` and update the corresponding path in `homeData.js` or component JSX. The project does not include a content-management UI.
- Profile card routes are generated from each person's `name` by `src/utils/slugify.js`. Update route links and slug-sensitive code if the naming convention changes.
- Navigation links are data-driven in `NAV_LINKS`, but some star links and page CTA behavior are hard-coded in JSX.

## 5. Styling and `className` Conventions

The project uses ordinary global CSS selectors, not CSS Modules. JSX files usually import a same-name CSS file next to the component; page styles live beside page JSX. `src/index.css` supplies the reset and global element rules. `src/styles/tokens.css` defines CSS custom properties.

### Naming rules observed

| Rule | Examples from the code |
| --- | --- |
| Class names are usually lowercase kebab-case. | `.donate-transfer-panel` in `DonatePage.css`; `.teen-star-steps-grid` in `TeenStarCompetitionSteps.css`; `.contact-modal-submit` in `ContactModal.css`; `.profile-card-inner` in `PersonalProfile.css` |
| A component or feature name is commonly used as the prefix. | `.hero-title` in `HeroSection.css`; `.foundation-section` in `FoundationSection.css`; `.teen-star-benefits-map` in `TeenStarBenefits.css`; `.donate-account-value` in `DonatePage.css` |
| Child parts append a descriptive word or phrase to the component prefix. | `.contact-modal-layout` and `.contact-modal-form`; `.teen-star-about-copy` and `.teen-star-about-image`; `.hero-title-line-1` and `.hero-title-line-2` |
| State and variants are appended as classes, rather than consistently using BEM double separators. | `.nav-hidden` and `.nav-visible`; `.mobile-nav-drawer.open`; `.modal-photo.is-logo`; `.person-page-wrapper.is-mobile`; `.card-volunteer` |

### Shared and global selectors

Some class groups are intentionally reused across components. Examples include `.section-title` and `.section-eyebrow` (defined in `FunFactsSection.css` and also used by other home sections), `.brand-logo-mark` (used in Navbar and Footer markup), `card-*` groups, and `modal-*` in the profile dialog. These are global selectors, so a change can affect more than the file where the selector is defined.

`index.css` includes global selectors for `*`, `html`, `body`, `img`, `picture`, `video`, `canvas`, `svg`, form controls, headings, paragraphs, anchors, and `:focus-visible`.

### Deviations and caveats

- The convention is not strict. Prefixes include feature names such as `contact-modal-*`, generic names such as `contact-row`, and shared families such as `card-*` and `section-*`.
- `brand-logo-mark` is used on different element types in `Navbar.jsx` and `Footer.jsx`; both `Navbar.css` and `Footer.css` define it with different sizing/layout declarations. The resulting computed styles depend on stylesheet cascade order. Needs confirmation: verify computed styles on both instances before changing this shared name.
- The profile root JSX uses `person-page-wrapper`, but `PersonalProfile.css` targets `person-evaly-page-wrapper`. See the known issues section.
- `.foundation-mid-map-wrapper` selectors exist in `FoundationSection.css`, but `FoundationSection.jsx` currently renders no element with that class.
- `TestimonialsSection.css` defines `.testimonials-arrows`, but the matching JSX is commented out.

### How to name a new class

1. Use lowercase kebab-case.
2. Prefix component-local selectors with the component or feature, for example `.teen-star-section-title` or `.contact-modal-submit`.
3. Append a semantic child name, such as `-header`, `-image`, `-form`, or `-status`.
4. For a state used by an existing component, follow its established suffix form, such as `.open`, `.is-mobile`, or `.nav-hidden`.
5. Use an unprefixed class only when it is intentionally shared, and check all existing selectors before adding or changing it.

## 6. Contact Form Flow

`ContactModal` renders required `name`, `email`, and `message` fields plus an optional `phone` field. On submit it serializes `FormData` as `URLSearchParams` and POSTs to `import.meta.env.VITE_SHEET_URL` with `mode: 'no-cors'`.

- Before the request, the component sets status to `sending` and disables the submit button.
- If `fetch` resolves, status becomes `success`, the form is reset, and a success message is shown.
- If `fetch` rejects, status becomes `error` and a generic error alert is shown.
- `no-cors` makes the response opaque. The code cannot inspect the response status or body, so the success message means only that `fetch` resolved, not that the receiver confirmed storage or delivery.
- There is no client-side check that `VITE_SHEET_URL` is defined, and there is no timeout or retry logic.
- The endpoint service, accepted field names, validation, persistence, and retention policy are not implemented in this repository. Needs confirmation.

The Contact button in the Footer opens this dialog. Volunteer and Be a partner in `GetInvolvedModal` also switch to this dialog. Those are the only form entry points found in the current source.

## 7. Environment Variables

The source reads one Vite variable. The actual `.env` value is intentionally not reproduced here.

| Name | Purpose | Read from |
| --- | --- | --- |
| `VITE_SHEET_URL` | URL used as the ContactModal POST endpoint | `src/components/ContactModal.jsx` |

Create local configuration from `.env.example` and supply the endpoint URL outside source control. Because this value is read by browser-side Vite code, it must not contain a secret credential. Whether the configured URL is the correct production receiver is Needs confirmation.

## 8. Routing and App Flow

`src/main.jsx` mounts `App` inside React Router's `BrowserRouter`. No app-wide React context or global application state is defined. State is local to pages/components and passed through props.

| Route | Page | Behavior |
| --- | --- | --- |
| `/` | `HomePage` | Home sections and profile/Get Involved modals |
| `/donate` | `DonatePage` | Static bank transfer details and account copy control |
| `/the-next-teen-star` | `TeenStarPage` | Teen Star hero, overview, benefits, and competition steps |
| `/:slug` | `PersonProfile` | Resolves a slug against `PARTNERS` and `TEAM_MEMBERS` |
| `/team/:slug` | `PersonProfile` | Profile-card destination generated by `TeamSection` |
| `*` | `HomePage` | Unknown path fallback |

`ScrollToTop` in `App.jsx` listens to both pathname and hash changes. If a matching hash ID exists, it scrolls that element to the top; otherwise it resets to page top. The profile breadcrumb links to `/#team`.

The Home page passes callbacks into `Navbar`, `HeroSection`, and `GetInvolvedModal`. The profile page passes callbacks into `Navbar` and `GetInvolvedModal`. The Donate page passes a self-navigation callback to `Navbar`. The Teen Star page currently renders `<Navbar />` without those callbacks.

## 9. Accessibility and Behavior Notes

### Present in the code

- Main landmarks, section labels/headings, dialog roles, `aria-modal`, `aria-labelledby`, and descriptive button labels are used in many sections.
- Decorative maps, SVGs, and decorative icons commonly use `aria-hidden="true"` and empty alt text.
- The navigation menu button exposes `aria-label` and `aria-expanded`.
- `ContactModal`, `ProfileModal`, and `GetInvolvedModal` close on Escape and apply body scroll locking. `ContactModal` focuses the name input when opened.
- Form labels wrap their inputs; required fields use the native `required` attribute. Contact status uses `role="status"` and errors use `role="alert"`.
- Global `:focus-visible` styling is defined in `src/index.css`.
- `FunFactsSection` observes `prefers-reduced-motion` for the counter animation.
- External partner links use `target="_blank"` with `rel="noopener noreferrer"`.

### Gaps

- The modal components do not implement a focus trap or restore focus to the opener after closing. `GetInvolvedModal` and `ProfileModal` do not explicitly move initial focus into the dialog.
- The mobile navbar drawer has no Escape-key handler or `aria-controls` reference in its markup.
- `ProfileModal` has `role="dialog"` and `aria-modal`, but no `aria-labelledby` or `aria-describedby`.
- Team cards are anchors with `role="button"` and custom keyboard handling. This mixes link and button semantics.
- `ContactModal` cannot announce a verified server result because the request uses `no-cors`.

## 10. Known Issues and Suggested Improvements

These items are directly supported by the current code. They are listed as findings, not claims about production behavior beyond what the implementation shows.

1. The Grace selection path uses `/grace-evaly`, while profile lookup slugifies `Mrs. Grace Evaly` to `mrs-grace-evaly`. That direct path will not match the record. See [HomePage.jsx, line 23](src/pages/HomePage.jsx#L23), [PersonalProfile.jsx, line 18](src/pages/PersonalProfile.jsx#L18), and [slugify.js, line 5](src/utils/slugify.js#L5).
2. At tablet widths up to 1100px, `TeamSection.css` sets `.figma-partner-card` width to `3000px`. This likely overflows the grid. See [TeamSection.css, line 355](src/components/TeamSection.css#L355).
3. The profile wrapper selector does not match: JSX uses `person-page-wrapper`, while CSS targets `person-evaly-page-wrapper`. See [PersonalProfile.jsx, line 41](src/pages/PersonalProfile.jsx#L41) and [PersonalProfile.css, line 6](src/pages/PersonalProfile.css#L6).
4. The Foundation map wrapper is styled but has no corresponding markup in `FoundationSection.jsx`; those map declarations currently have no effect. See [FoundationSection.css, line 15](src/components/FoundationSection.css#L15) and [FoundationSection.jsx](src/components/FoundationSection.jsx).
5. `TestimonialsSection` has one testimonial record, state and handlers for changing slides, but its arrow controls are commented out. The displayed slide cannot currently be changed through the UI. See [TestimonialsSection.jsx, line 6](src/components/TestimonialsSection.jsx#L6), [TestimonialsSection.jsx, line 9](src/components/TestimonialsSection.jsx#L9), and [TestimonialsSection.jsx, line 97](src/components/TestimonialsSection.jsx#L97).
6. The Contact form marks any resolved `no-cors` fetch as success without access to the response status or body, and does not validate the endpoint variable before sending. See [ContactModal.jsx, line 40](src/components/ContactModal.jsx#L40) and [ContactModal.jsx, line 43](src/components/ContactModal.jsx#L43).
7. `TeenStarPage` does not pass `onDonateClick` or `onGetInvolvedClick` to `Navbar`. The Donate button's click callback is therefore undefined on that page, and the Get Involved link falls back to the relative `.#outreaches` href even though the Teen Star page has no `outreaches` ID. See [TeenStarPage.jsx, line 14](src/pages/TeenStarPage.jsx#L14), [Navbar.jsx, line 192](src/components/Navbar.jsx#L192), and [Navbar.jsx, line 80](src/components/Navbar.jsx#L80).
8. The profile-page Donate action shows a four-second test-mode notice rather than navigating to the Donate page or processing a payment. See [PersonalProfile.jsx, line 30](src/pages/PersonalProfile.jsx#L30) and [PersonalProfile.jsx, line 48](src/pages/PersonalProfile.jsx#L48).
9. Vite is configured with `emptyOutDir: false`; old files in `dist` are not automatically removed by a build. See [vite.config.js, line 11](vite.config.js#L11).

### Needs confirmation

- The production value and owner of `VITE_SHEET_URL`, the receiving service, accepted fields, and how success should be verified.
- Whether the static account number `0000000000` on the Donate page should be replaced with production bank details.
- The deployment host and release process for `dist`; neither is configured in the inspected source.
