# NavAble project website

Standalone static research page for NavAble, intended for https://guidedogrobot-navable.github.io/.

## Preview

Run `python3 -m http.server 8000 --bind 127.0.0.1` from this directory and open http://127.0.0.1:8000/.

No build step or JavaScript dependencies are required. `.nojekyll` lets GitHub Pages serve the files directly.

## Content

- `index.html`: authors, descriptions, dataset details, resource links, and a copyable BibTeX citation.
- `static/css/index.css`: responsive academic page styles.
- `static/js/index.js`: reduced-motion-aware video autoplay, the research menu, and the BibTeX Copy button.
- `static/images/`: video poster and figures extracted from the supplied paper.
- `static/videos/`: compressed full 30-second video and the 20–30-second teaser.
- `static/papers/`: local research inputs, excluded from Git and deployment.

## Content to confirm before publication

- The Paper button links to the public arXiv paper. The anonymous submission PDF is excluded from publication.
- Confirm author affiliations and the equal-contribution note; author order follows the personal website bibliography.
- Add a public code URL when available. No placeholder code link is shown.
- Numerical performance highlights are deliberately omitted because the draft abstract and result tables disagree.
- Dataset counts and the `turnstile` class name follow the public Hugging Face release; the draft uses different wording and rounded counts in places.

## Publish

Repository: `guidedogrobot-navable/guidedogrobot-navable.github.io`.
In GitHub Settings → Pages, choose Deploy from a branch, `main`, `/ (root)`.
The repository must have GitHub Pages access under its organization's plan.

The page follows the visual style of the GuideTWSI and Quiet Locomotion project sites and credits Nerfies as their design inspiration.
