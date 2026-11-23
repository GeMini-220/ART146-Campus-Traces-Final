# Campus Traces

An Angular archive of overlooked traces of human activity on campus.

## Run locally

```sh
npm install
npm start
```

Open `http://localhost:4200/`. Run `npm run build` to create a production build in `dist/campus-traces/browser/`.

## Add an archive entry

1. Place the photos in [public/entries](public/entries).
2. Add a record to [archive-entries.ts](src/app/archive-entries.ts). Give each item in `images` a unique string `id`, a photo path such as `'entries/Entry002-a.jpg'`, and descriptive `alt` text.
3. Open the archive to see the new record. The list links to the first photo. A direct link such as `/archive/002-b` opens the record on that photo.
