interface ArchiveImage {
  readonly id: string;
  readonly src: string;
  readonly alt: string;
}

export interface ArchiveEntry {
  readonly title: string;
  readonly date: string;
  readonly time: string;
  readonly location: string;
  readonly coordinates: string;
  readonly previous?: string;
  readonly next?: string;
  readonly images: readonly [ArchiveImage, ...ArchiveImage[]];
}

export function formatEntryIds(entry: ArchiveEntry): string {
  return entry.images.map((image) => image.id).join(', ');
}

export const archiveEntries: readonly ArchiveEntry[] = [
  {
    title: 'Indentation and scribble marks on pillar',
    date: 'Oct 22nd, 2026',
    time: '10:22 AM',
    location: 'ART STUDIO 165',
    coordinates: '33°39.0115′ N 117°50.6998′ W',
    next: '004',
    images: [
      {
        id: '001',
        src: 'entries/Entry001.jpg',
        alt: 'Black scribbles and dents in the off-white paint of a pillar.',
      },
    ],
  },
  {
    title: 'Peeling wall paint and black scuff marks on wall',
    date: 'Oct 25th, 2026',
    time: '11:16 PM',
    location: 'ARC Training Zone',
    coordinates: '33°38.6023′ N 117°49.6460′ W',
    images: [
      {
        id: '002-a',
        src: 'entries/Entry002-a.jpg',
        alt: 'An irregular patch of peeling white paint exposes a gray layer and a black screw on the wall.',
      },
      {
        id: '002-b',
        src: 'entries/Entry002-b.jpg',
        alt: 'A long, curved black scuff and smaller marks on an off-white wall with chipped paint along the lower edge.',
      },
    ],
  },
  {
    title: 'Black, used sports mouthguard on bench; Black scuff marks and scratches on wall',
    date: 'Oct 25th, 2026',
    time: '2:17 PM',
    location: 'ARC Training Zone',
    coordinates: '33°38.6015′ N 117°49.6454′ W',
    images: [
      {
        id: '003',
        src: 'entries/Entry003.jpg',
        alt: 'A black U-shaped mouthguard rests on a wooden bench below a pale wall with dark scuffs and scratches.',
      },
    ],
  },
  {
    title: 'Re: Indentation and scribble marks on pillar',
    date: 'Nov 12th, 2026',
    time: '11:47 AM',
    location: 'ART STUDIO 165',
    coordinates: '33°39.0115′ N 117°50.6998′ W',
    previous: '001',
    images: [
      {
        id: '004',
        src: 'entries/Entry004.jpg',
        alt: 'Black scribbles, chipped paint, and deep dents along the rounded edge of an off-white pillar.',
      },
    ],
  },
];
