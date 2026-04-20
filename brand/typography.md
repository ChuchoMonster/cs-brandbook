# Typography

## Fonts

| Role | Family | Source | Notes |
|---|---|---|---|
| Heading | **Cabinet Grotesk** | Custom web font (Indian Type Foundry, via Fontshare) | Used for h1/h2 in observed render. Fallback: Arial, sans-serif. |
| Body / UI | **Inter** | Web font (Google Fonts / rsms.me) | Used for all body copy, nav, buttons, labels in observed render. Fallback: sans-serif. |
| Display | **Unbounded** | Web font (Google Fonts) | Declared as `--font-display` but **not used anywhere in the rendered page**. Decide: keep for future display headlines, or remove. |

No system font stacks are used — every role resolves to a custom web font with a generic fallback.

## Semantic Type Scale (desktop — source of truth)

Sizes pulled from `--_typography---font-size--*` vars. Observed rendered values are mobile-breakpoint scaled (~0.6x for h1, varies for others) — treat the rem values below as the canonical desktop scale.

| Role | Token | Font | Weight | Size | Line-height | Tracking | Transform |
|---|---|---|---|---|---|---|---|
| Display | `--font-size-display` | Cabinet Grotesk | 700 | 4.769rem / 76px | 1.1 | -0.03em | none |
| H1 | `--font-size-h1` | Cabinet Grotesk | 700 | 4rem / 64px | 1.1 | -0.025em | none |
| H2 | `--font-size-h2` | Cabinet Grotesk | 700 | 3.5rem / 56px | 1.12 | -0.03em | none |
| H3 | `--font-size-h3` | Cabinet Grotesk | 700 | 2.5rem / 40px | 1.2 | -0.02em | none |
| H4 | `--font-size-h4` | Cabinet Grotesk | 700 | 2rem / 32px | 1.2 | -0.01em | none |
| H5 | `--font-size-h5` | Cabinet Grotesk | 600 | 1.75rem / 28px | 1.3 | -0.01em | none |
| H6 | `--font-size-h6` | Cabinet Grotesk | 600 | 1.25rem / 20px | 1.4 | normal | none |
| Lead / body-large | `--font-size-p-large` | Inter | 300 | 1.25rem / 20px | 1.5 (35px observed) | 0.01em | none |
| Body | `--font-size-p-regular` | Inter | 400 | 1rem / 16px | 1.5 | normal | none |
| Body medium | `--font-size-p-medium` | Inter | 500 | 1.125rem / 18px | 1.5 | normal | none |
| Small | `--font-size-p-small` | Inter | 500 | 0.875rem / 14px | 1.5 (20.4px observed) | 0.01em | none |
| Button | `--font-size-button` | Inter | 500–600 | 0.8rem / 12.8px | 1.5 | 0.06em | none |
| Label / eyebrow | `--font-size-eyebrow` | Inter | 500 | 0.65rem / 10.4px | 1.5 | 0.25em (2.6px) | UPPERCASE |
| Tiny | `--font-size-p-tiny` | — | — | 0.75rem / 12px | 1.5 | — | — |

### Observed rendered specs (mobile, from screenshot)

| Element | Family | Weight | Size | LH | Tracking |
|---|---|---|---|---|---|
| H1 "Yes. Claude Can Do That." | Cabinet Grotesk | 700 | 38.4px | 44.2px | -0.96px |
| H2 "100x Faster" | Cabinet Grotesk | 700 | 28.8px | 32.3px | -0.86px |
| Eyebrow "AI AUTOMATION FOR B2B" | Inter | 500 | 10.4px | 15.6px | 2.6px, UPPER |
| Lead body | Inter | 300 | 20px | 35px | 0.16px |
| Logo wordmark | Inter | 600 | 20.8px | 31.2px | -0.21px |
| Nav link | Inter | 500 | 13.6px | 20.4px | 0.16px |
| CTA pill (dark text) | Inter | 600 | 13.6px | 20.4px | 0.16px |
| Secondary button | Inter | 500 | 12.8px | 19.2px | 0.77px |

## ⚠️ Inconsistencies to rationalize

1. **Body font conflict.** `--_typography---fonts--body` = Cabinet Grotesk, but `--font-body` = Inter — and the page actually renders body in Inter. Delete or fix the first.
2. **Heading weight mismatch.** `--_typography---fonts--heading-weight` = 400, but rendered h1/h2 are 700. The variable is misleading; set to 700.
3. **Body medium == body bold.** Both defined as 800. Medium should be 500 (as used in live render). Bold stays 700 or 800 — pick one.
4. **h6 == p-large.** Both 1.25rem. Either give h6 a heading treatment (Cabinet Grotesk) that differentiates it visually, or collapse them.
5. **Unbounded declared, unused.** `--font-display` is loaded but no element uses it. Either wire it into a display role or remove the import (saves page weight).
6. **No `p-tiny` role mapped in render.** Defined but not observed — decide if it's in the scale or cut.
7. **Desktop vs mobile scale undefined.** Observed h1 is 0.6x its defined size on mobile. Define explicit responsive breakpoints rather than relying on implicit scaling.
8. **Letter-spacing tokens are cryptic.** `--letter-spacing--1/3/5/10` with values `-.01em / -.03em / -.05em / 1.6px` mix units and don't correspond to a scale. Rename to `tight / tighter / tightest / wide`.
