export interface ArchiveEntry {
  readonly id: string;
  readonly title: string;
  readonly date: string;
  readonly time: string;
  readonly location: string;
  readonly coordinates: string;
  readonly image: {
    readonly src: string;
    readonly alt: string;
  };
}

export const archiveEntries: readonly ArchiveEntry[] = [
  {
    id: '001',
    title: 'Indentation and scribble marks on pillar',
    date: 'Oct 22nd, 2026',
    time: '10:22 AM',
    location: 'ART STUDIO 165',
    coordinates: '33°39.0115′ N 117°50.6998′ W',
    image: {
      src: 'entries/Entry001.jpg',
      alt: 'Black scribbles and dents in the off-white paint of a pillar.',
    },
  },
];
