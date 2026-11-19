# Image guide

All site images live here and are served from `/images/...`. **Replace a file using the exact same filename and the site updates, no code changes.**

| Section | File | Size | Format |
|---|---|---|---|
| Hero portrait | `profile/profile-photo.webp` | ~900×1400 (4:5), face in upper half | WebP, under 100 KB |
| Project 1 | `projects/task-management-bot.webp` | tall phone screenshot, ~760 px wide | WebP, under 100 KB |
| Project 2 | `projects/gadget-lead-capture.webp` | ~760 px wide | same |
| Project 3 | `projects/hotel-automation.webp` | ~760 px wide | same |
| Project 4 | `projects/website-projects.webp` | ~760 px wide | same |
| Hero backdrop (faint, optional) | `backgrounds/hero-background.webp` | 1280×720 | dark image, tiny file |
| Icons (spare) | `icons/` | SVG | — |

## Replace an image
Rename your new image to the exact filename above (same extension), drop it in the same folder, overwrite, commit and push.
Different extension (e.g. `.jpg`)? Update that path in `src/data/portfolio.js`.

## Add a project image
1. Put `my-project.webp` in `projects/`.
2. In `src/data/portfolio.js`, copy a project block and set `image: '/images/projects/my-project.webp'`.

## Avoid broken paths
- Paths start with `/images/` (never `public/images` or `./`).
- Filenames are case sensitive on Vercel: `Profile-Photo.webp` ≠ `profile-photo.webp`.
- No spaces in filenames. Missing images show a striped placeholder showing the expected path.
- **Privacy:** crop out real customer names/phone numbers from screenshots.

## Convert a PNG to WebP (keeps pages fast)
```bash
python3 -c "from PIL import Image; Image.open('in.png').convert('RGB').save('out.webp','WEBP',quality=78)"
```
Or use squoosh.app.

## Social preview
`public/images/og-image.jpg` (1200×630) is what WhatsApp/LinkedIn/X show when your link is shared.
