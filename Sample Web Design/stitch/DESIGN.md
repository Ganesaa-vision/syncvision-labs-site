```markdown
# Design System Specification: The Kinetic Noir

## 1. Overview & Creative North Star
**Creative North Star: "The Digital Architect’s Shadow"**

This design system is engineered to break the "template" fatigue of modern SaaS. We are moving away from the safety of centered, symmetrical layouts and embracing **Intentional Asymmetry**. The aesthetic is high-end, editorial, and unapologetically dark. It mimics the experience of a premium physical gallery—where light is used sparingly to guide the eye, and the "void" (negative space) is as important as the content.

By utilizing an **"Anti-Grid" approach**, we challenge the user's expectations. Elements should feel like they are floating in a pressurized vacuum, held together by tension rather than rigid containers. This is achieved through overlapping typography, staggered image placements, and a depth model built on light refraction rather than drop shadows.

---

## 2. Color Theory & The "No-Line" Rule
The palette is rooted in deep obsidian and charcoal tones, punctuated by a hyper-saturated Neon Cobalt micro-interaction layer.

### The "No-Line" Rule
**Strict Mandate:** Designers are prohibited from using 1px solid borders for sectioning or containment. 
*   **Boundaries** must be defined solely through background tonal shifts.
*   **Example:** A `surface_container_low` section sitting on a `surface` background provides enough contrast to define a zone without the "cheapness" of a stroke.

### Surface Hierarchy & Nesting
Treat the UI as a series of physical layers of smoked glass.
*   **Base:** `surface` (#131313) or `surface_container_lowest` (#0E0E0E) for high-impact hero sections.
*   **Nesting:** When placing a card or container, use a step-up approach. An inner container should move from `surface` to `surface_container_low`. 
*   **Glass & Gradient:** For floating elements (navigation bars, modal overlays), use a backdrop-blur (16px–32px) with `surface_variant` at 40% opacity. Main CTAs should utilize a subtle linear gradient from `primary` (#B8C3FF) to `primary_container` (#2E5BFF) at a 135° angle to add "soul" to the action point.

---

## 3. Typography: Editorial Dominance
We use a high-contrast pairing of **Space Grotesk** (Display/Headline) and **Manrope** (Body/Labels). 

*   **Display-LG (3.5rem):** Reserved for "Hero" moments. Use a tight letter-spacing (-0.04em) to create a monolithic, architectural feel.
*   **Asymmetrical Hierarchy:** Don't be afraid to use `display-md` next to `body-sm`. The extreme contrast in scale is what creates the "Award-Winning" editorial look.
*   **Functionality:** **Space Grotesk** provides the "Tech" edge—its geometric quirks feel intentional and premium. **Manrope** provides the readability—its humanist qualities ensure the technical data remains accessible.

---

## 4. Elevation & Depth: Tonal Layering
Traditional shadows are too heavy for this system. We use **Luminance and Refraction** to define depth.

*   **The Layering Principle:** Stacking `surface_container` tiers creates a soft, natural lift. A card should be `surface_container_high` sitting on `surface_container_low`.
*   **Ambient Shadows:** If a floating effect is required (e.g., a "Neon Cobalt" CTA), use a shadow with a blur of 40px and 6% opacity, tinted with the `primary` color (#B8C3FF) rather than black.
*   **The "Ghost Border" Fallback:** If a boundary is required for accessibility, use the `outline_variant` token at **15% opacity**. It should be felt, not seen.
*   **Glassmorphism:** Use `surface_bright` with a 20% opacity and a `backdrop-filter: blur(24px)` for all high-level navigation components to ensure the "Anti-Grid" content remains visible as it scrolls beneath.

---

## 5. Component Logic

### Buttons
*   **Primary:** A pill-shape (`full` roundedness). Background: `primary_container`. Text: `on_primary_container`. On hover, a "Neon Cobalt" glow should emanate from the base.
*   **Tertiary:** No background. Text: `primary`. Micro-interaction: A 2px underline that expands from the center on hover.

### Input Fields
*   **Styling:** Forbid boxes. Use a `surface_container_highest` background with a bottom-only "Ghost Border."
*   **Focus State:** The bottom border transforms into a `primary` (#B8C3FF) 2px line with a subtle neon outer glow.

### Cards & Lists
*   **Anti-Border Rule:** Use `spacing-8` (2.75rem) or `spacing-10` (3.5rem) to separate list items instead of divider lines. 
*   **Interactivity:** On hover, a card should shift from `surface_container_low` to `surface_container_high` with a transition-duration of 400ms (Ease-Out).

### Signature Component: The "Kinetic Cursor"
Because this is a tech agency system, the cursor should be replaced with a `primary` tinted circle at 10% opacity that expands and blurs when hovering over clickable elements, acting as a "spotlight" on the dark background.

---

## 6. Do’s and Don’ts

### Do:
*   **Do** embrace negative space. If a section feels "empty," add more padding, not more content.
*   **Do** overlap elements. Allow a `display-lg` headline to partially overlap an image container to create depth.
*   **Do** use `primary_fixed` (#DDE1FF) for "over-exposed" text highlights in dark areas.

### Don't:
*   **Don't** use pure white (#FFFFFF). Use `on_surface` (#E5E2E1) to keep the "Noir" atmosphere.
*   **Don't** use 1px solid dividers. Ever. It breaks the "premium" illusion.
*   **Don't** align everything to a 12-column center. Use the **Spacing Scale** to stagger elements (e.g., Image at Col 2, Text at Col 7).

---

## 7. Spacing & Rhythm
Rhythm in this system is syncopated. Use the larger spacing tokens (`20`, `24`) to create "breathing rooms" between major narrative shifts. 

*   **Vertical Rhythm:** Always use `spacing-16` (5.5rem) between sections.
*   **Internal Rhythm:** Use `spacing-4` (1.4rem) for grouping related text to maintain a tight, editorial "lockup."

*Director's Note: Every pixel must feel like it was placed by a human hand, not a layout engine. If it looks too organized, break it.*```