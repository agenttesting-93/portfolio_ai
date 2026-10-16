# Ahmad Raza — portfolio

Next.js 15 static portfolio with a crimson/black design, an introductory name loader, a cursor-responsive portrait, a scroll-linked hero-to-work transition, downloadable CV, and email contact links.

## Development

Run `npm install`, then `npm run dev`. The preview is at http://localhost:3000. Run `npx tsc --noEmit` for type checking and `npm run build` for the production static export in `out/`. Development uses `.next-dev/` and production uses `.next/`, so builds do not overwrite the running dev server's files. Fonts are bundled locally; Google Fonts network access is not required.

## Content and assets

- `components/PortfolioExperience.tsx`: page content, project overviews, loader and animation.
- `app/globals.css`: styling and mobile / reduced-motion fallbacks.
- `public/files/Ahmad-Raza-CV.pdf`: original user-supplied CV, served for direct download.
- `public/assets/ahmad-portrait.webp`: optimized AI-rendered portrait based on the user's reference photo.
- `public/assets/ahmad-reference.jpg`: photo fallback if the rendered portrait cannot load.
- `public/assets/convaryx-home.jpg`: first-screen capture of the live Convaryx website, linked to https://convaryx.razaahmad.tech/ in its project card.

The portrait is a rendered bitmap with perspective and parallax interaction. It is **not a rigged 3D mesh** and does not independently animate the head or eyes. True gaze tracking needs a separately prepared rigged GLB with head/eye controls. Keep that asset boundary explicit when extending the experience.

Zeno Trade Pro experience comes from the supplied CV. The other workflow descriptions are retained from the previous repository content. Their project graphics are explicitly labeled interface concepts / workflow visualizations. Convaryx uses a real homepage screenshot and the user-provided live URL and technology stack.

No database is needed. The page has no AI API calls and exposes no API key. Legacy landing-page components, chatbot, theme switcher, and their unused dependencies have been removed.

## Portrait generation

Generated with the built-in image generation tool (not the API/CLI), using the supplied photo as an identity reference. Optimized to WebP using Sharp. Original output retained at the tool's generated-image location.

Final prompt:

> Use case: identity-preserve / stylized-concept. Create a high-end 3D-rendered upper-body portrait asset for this exact person's personal frontend and AI engineer portfolio. Reference image is identity reference: preserve recognizable young South Asian man's facial structure, slim build, warm skin, expressive brown eyes, thick eyebrows, tousled dark wavy hair, thin mustache and short goatee. Face toward camera, relaxed confident expression, mouth closed. Premium lifelike stylized 3D character, subtle sculptural smoothness but identity faithful, not cartoonish. Chest-up / mid-torso framing, complete hair and shoulders with generous transparent padding, arms relaxed down and no objects. Simple black short-sleeve collared shirt with subtle deep crimson side panels inspired by the reference's red/black palette, no logos or text. Dramatic but flattering soft studio key on face, crimson rim light along shoulders and hair. True transparent background, clean silhouette alpha, no floor, no backdrop, no UI, no writing, no watermarks, no cricket bat. Portrait will be composited over near-black website. Subject centered in vertical frame.
