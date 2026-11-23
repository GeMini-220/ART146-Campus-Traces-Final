# Campus Traces

An Angular archive of overlooked traces of human activity on campus.

## Run locally

```sh
npm install
npm start
```

Open `http://localhost:4200/`. Run `npm run build` to create a production build in `dist/campus-traces/browser/`.

## Add an archive entry

1. Place the image in [public/entries](public/entries).
2. Add a record to [archive-entries.ts](src/app/archive-entries.ts) using entry `001` as a template. Use a unique string ID such as `'002-a'` and an image path such as `'entries/Entry002-a.jpg'`.
3. Open the archive to see the new record. Its detail page is available at `/archive/002-a`.
