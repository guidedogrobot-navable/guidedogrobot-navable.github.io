# NavAble project website

Standalone static research page for NavAble, intended for https://guidedogrobot-navable.github.io/.

## Preview

Run `python3 -m http.server 8000 --bind 127.0.0.1` from this directory and open http://127.0.0.1:8000/.

No build step or JavaScript dependencies are required. `.nojekyll` lets GitHub Pages serve the files directly.

## Content

- `index.html`: authors, descriptions, dataset details, resource links, and a copyable BibTeX citation.
- `static/css/index.css`: responsive academic page styles.
- `static/js/index.js`: reduced-motion-aware video autoplay, the research menu, and the BibTeX Copy button.
- `static/images/`: video posters, figures extracted from the supplied paper, the original colored SVG logo used in the title (`navable-logo-color.svg`), and its arrow emblem used as the favicon (`favicon.svg`).
- `static/videos/`: the 2:55 NeurIPS project video (`navable-demo-neurips.mp4`), the 30-second synthetic data demo, and the ten-second teaser.
- `static/papers/`: local research inputs, excluded from Git and deployment.

The `#video` link opens the project video directly below the title, authors, and resource buttons, with its caption underneath and no visible section heading. The abstract follows, then the ten-second teaser, its caption, and dataset highlights. The shorter synthetic demo remains at `#synthetic-demo`. Resource buttons link to the paper, video, dataset/assets, released checkpoints, and `#citation`; older `#bibtex` links still work.

## Data and result sources

Updated on 2026-11-06 using the supplied `NavAble_NeurIPS_2026.pdf` (42 pages, dated 2026-11-05) and the [Hugging Face dataset card](https://huggingface.co/datasets/NavAble/NeurIPS_2026_BLV/blob/0c36e45e704c29c93688a9445a0bc2d8f5ee0733/README.md).

- Current release: 450,860 synthetic frames, 36,466 curated images, and 5,681 collected image records (5,581 released plus 100 supplementary revolving-door images). The released collected records represent 5,479 distinct photos; the 100-image addition remains outside the released train/validation/test splits.
- Released collected splits: 3,703 train, 396 validation, and 1,482 test records. The supplementary 100-frame revolving-door evaluation is separate from the paper's main benchmark.
- Retained release highlights: 11 foreground classes, 37 environments, and 500 released assets. Class 11 is `revolving_door`.
- Performance summaries use the updated paper's 10-class foreground metrics (Tables 2, 4, and 5), not the background-inclusive averages in parts of the Hugging Face checkpoint documentation. Seven fine-tuned architectures and four data configurations produce 28 checkpoints.
- The paper's benchmark results and the latest re-rendered synthetic release describe different data versions. The HF card also documents duplicate records and location overlap in the released metadata; the website does not assert location-disjointness for that release.
- `static/images/robot-evaluation.png` uses the corrected four-column Figure 4, rendered from the supplied `neurips26_fig4_first_four_columns.pdf`; the repeated rightmost columns from the older website figure are removed.

## Publication notes

- The Paper button links to the public arXiv paper. The anonymous submission PDF is excluded from publication.
- Confirm author affiliations and the equal-contribution note; author order follows the personal website bibliography.
- Add a public code URL when available. No placeholder code link is shown.

## Publish

Repository: `guidedogrobot-navable/guidedogrobot-navable.github.io`.
In GitHub Settings → Pages, choose Deploy from a branch, `main`, `/ (root)`.
The repository must have GitHub Pages access under its organization's plan.

The page follows the visual style of the GuideTWSI and Quiet Locomotion project sites and credits Nerfies as their design inspiration.
