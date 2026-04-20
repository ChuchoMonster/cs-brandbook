# Colors

Pulled from `CSS-styles.json` and deduplicated. Near-identical values collapsed into a single semantic token.

---

## Brand / Primary

| Swatch | Hex | Token | Notes |
|---|---|---|---|
| 🟧 | `#ff8b48` | **brand-primary** (Orange) | Hero accent, CTAs, alternate borders/links. Most-used brand color. |
| 🟨 | `#ffc800` | **brand-secondary** (Yellow) | Declared but not visible in screenshot — verify actual usage before keeping. |

## Accent

| Swatch | Hex | Token | Notes |
|---|---|---|---|
| 🟦 | `#8b9cf7` | **accent-cool** (Periwinkle) | Current `--accent`. Cool blue/lavender. |
| 🟪 | `#c4a0f7` | **accent-violet** | Current `--accent-warm` — **misnamed**, this is a cool violet, not warm. Rename. |

## Neutrals / Grays

| Swatch | Hex / rgba | Token | Notes |
|---|---|---|---|
| ⬛ | `#050508` | **bg-base** (near-black) | Primary page background. |
| 🟦 | `#091626` | **neutral-900** (navy) | Aliased **4 times**: `neutral--black`, `brand--black`, `text-primary`, `background-tertiary`, `link-secondary`. Collapse. |
| ⬜ | `#f5f5f7` | **neutral-50** (off-white) | Aliased **4 times**: `neutral-lightest`, `brand--off-white`, `text-secondary`, `background-primary`. Collapse. |
| ⬜ | `#ffffff` | **neutral-0** (white) | Aliased 4x: `brand--white`, `neutral--white`, `background-secondary`, `link-primary`. |
| ▫️ | `#e8e8ec` | **text-primary** | Default body text on dark bg. |
| ▫️ | `rgba(232,232,236,0.55)` | **text-muted** | Secondary copy, nav inactive. |
| ▫️ | `rgba(232,232,236,0.30)` | **text-dim** | Tertiary, disabled. |

## Semantic (status)

| Swatch | Hex | Token | Notes |
|---|---|---|---|
| 🟩 | `#027a48` | **success** | Text + fg |
| 🟩 | `#ecfdf3` | **success-bg** | Light fill |
| 🟥 | `#b42318` | **error** | Text + fg |
| 🟥 | `#fef3f2` | **error-bg** | Light fill |
| — | — | **warning** | ⚠️ **Not defined.** Add one (e.g. `#b54708` / `#fffaeb`) for completeness. |

## Surface / Background

| Swatch | Hex | Token | Notes |
|---|---|---|---|
| ⬛ | `#050508` | **surface-base** | Body background |
| 🟦 | `#091626` | **surface-elevated** | Card/section (`background-tertiary`, also tagged as `background-alternate`) |
| ⬜ | `#f5f5f7` | **surface-inverse** | Light sections |
| ⬜ | `#ffffff` | **surface-inverse-high** | Pure white surfaces |

## Borders

| Swatch | Hex | Token | Notes |
|---|---|---|---|
| ▫️ | `#ffffff14` | **border-subtle** | White @ 8% — hairline dividers on dark. |
| 🟧 | `#ff8b48` | **border-accent** | Orange accent border (same as brand-primary). |
| ▫️ | `#1a1a1a29` | **border-legacy** | ⚠️ Dark color on a dark-themed site — likely legacy from a light theme. Remove or reassign. |

---

## ⚠️ Inconsistencies to rationalize

1. **Alias explosion.** `#091626` has 5 names, `#f5f5f7` has 4, `white` has 4. Keep one canonical token per value and delete the rest.
2. **`accent-warm` is not warm.** `#c4a0f7` is a cool violet. Rename.
3. **Brand secondary (`#ffc800`) is declared but invisible in the live site.** Either use it or cut it — undocumented brand colors drift.
4. **No warning color.** Success + error exist; warning doesn't. Fix the set.
5. **`border-primary` is dark (`#1a1a1a29`).** Invisible on the dark bg — almost certainly a Relume default that wasn't pruned. Delete or replace.
6. **Text opacity ladder vs. solid text color.** `#e8e8ec` (solid) is the "primary text," then `text-muted` and `text-dim` use alpha on the same base. Fine, but inconsistent with `text-primary` being solid — document the convention.
7. **No dedicated link color.** `link-primary = white`, `link-alternate = #ff8b48`. Works, but make the rule explicit (inline = orange, nav = white).
