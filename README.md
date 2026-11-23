# Campus Traces

An Angular archive of overlooked traces of human activity on campus.

## Run locally

```sh
npm install
npm start
```

Open `http://localhost:4200/`. Run `npm run build` to create a production build in `dist/campus-traces/browser/`.

## Deploy to GitHub Pages

In the GitHub repository, open **Settings → Pages** and select **GitHub Actions** as the publishing source. [GitHub Pages setup](https://docs.github.com/en/pages/getting-started-with-github-pages/configuring-a-publishing-source-for-your-github-pages-site#publishing-with-a-custom-github-actions-workflow)

The [deployment workflow](.github/workflows/deploy-pages.yml) builds and publishes the site on each push to `main`. You can also run **Deploy to GitHub Pages** from the **Actions** tab. The deployment displays the published URL.

## Add an archive entry

1. Place the photos in [public/entries](public/entries).
2. Add a record to [archive-entries.ts](src/app/archive-entries.ts). Give each item in `images` a unique string `id`, a photo path such as `'entries/Entry002-a.jpg'`, and descriptive `alt` text.
3. Open the archive to see the new record. The list links to the first photo. A direct link such as `/archive/002-b` opens the record on that photo.
