# Ampleat Help Center

The public documentation lives at `/help`; each of the 50 guides has a stable
`/help/[slug]` address. Content and category definitions live in
`src/content/help.ts`. The index searches titles, descriptions, keywords, and
article bodies, with optional category filtering. Titles receive higher search
priority than body matches. All articles are prerendered and have page metadata.

## Product source

Verified against the neighboring `nouria-mobile` checkout on November 3, 2026.
User-facing screens take precedence over older handoff documents, particularly
for controls currently hidden during beta.

| Help topics | Primary mobile source |
| --- | --- |
| Getting started and access | `app/onboarding.tsx`, `app/access.tsx`, `app/verify-email.tsx`, `app/login.tsx`, `app/account-recovery.tsx` |
| Today and planning | `app/(tabs)/(main)/index.tsx`, `app/(tabs)/(main)/week.tsx`, `components/kitchen-change-sheet.tsx`, `components/meal-plan-card.tsx` |
| Pantry and inventory | `app/(tabs)/(main)/pantry.tsx`, `src/utils/pantry-quantity.ts`, `src/utils/pantry-expiry.ts` |
| Vision and scans | `components/nouria-vision.tsx`, `src/services/nouria-vision.ts`, `functions/src/nouria-vision.ts` |
| Recipes and cooking | `app/(tabs)/(main)/recipes.tsx`, `components/cooking-step-help.tsx`, `src/services/cook-session.ts`, `functions/src/cooking-help.ts` |
| Groceries and prepared food | `app/(tabs)/shopping.tsx`, `functions/src/intelligence.ts` |
| Household sharing | `app/(tabs)/household.tsx`, `src/context/household.tsx`, `functions/src/households.ts` |
| Intelligence and memory | `app/(tabs)/memory.tsx`, `functions/src/intelligence.ts`, `functions/src/intelligence-cloud.ts` |
| Preferences and device features | `app/(tabs)/(main)/settings.tsx`, `components/kitchen-search.tsx`, `src/services/siri-shortcuts.ts`, `docs/apple-experience.md`, `docs/cooking-and-security.md` |
| Account, membership, and privacy | `app/delete-account.tsx`, `app/(tabs)/membership.tsx`, `src/content/legal.ts`, `src/constants/release.ts` |

`README.md`, `docs/AMPLEAT_INTELLIGENCE.md`, and
`docs/AMPLEAT_FEEDBACK_RELEASE.md` provide supporting context. Administrative
operations, credentials, infrastructure, deployment instructions, and account
identifiers are not customer Help Center content.

## Availability details to preserve

- Private beta is free and invitation-only. Saving a launch membership
  preference is not checkout; do not invent launch prices.
- In-app feedback/research and the export control are not exposed in the current
  beta Settings screen. Direct customers to support instead.
- Kitchen labels are Today, Your Plan, Kitchen, Recipes, and Settings. Some
  older source text still says Pantry or You.
- Checking groceries does not add stock. Planning reserves ingredients;
  confirmed cooking usage consumes them. Prepared-food completion does not
  consume raw ingredients again.
- Vision observations replace a confirmed remaining amount; purchases add the
  newly bought amount. Unknown previous amounts require a confirmed total or
  separate batch. Items outside the photo are not deleted.
- Household invitations are single-use, expire after 24 hours, and do not grant
  beta approval. Shared kitchen membership supports up to eight accounts.
- Plan undo has a 15-minute window and stops being valid after conflicting
  changes or cooking starts. Other undo actions have their own safeguards.
- Widgets, Live Activities, and Siri require a compatible installed iPhone
  build. Source implementation is not evidence of installed-device testing.
- Food rules, dates, photos, and AI answers have the limitations disclosed in
  the mobile app. Do not turn software checks into guarantees about food.

## Updating guides

Add or edit an article in `src/content/help.ts`, keep its slug stable, assign an
existing category, and verify related slugs. The shared article template handles
metadata, reading time, the table of contents, topic navigation, and related
guides. Put customer steps in the article and implementation evidence here.

Run the production build and check the affected flows, article links, keyboard
navigation, mobile widths, search, and empty results. This feature requires no
mobile repository changes, new service, or additional package dependency.
