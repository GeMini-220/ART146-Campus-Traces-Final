import type { ActivatedRouteSnapshot, Routes } from '@angular/router';

import { archiveEntries } from './archive-entries';
import { ArchivePage } from './archive-page';
import { EntryPage } from './entry-page';
import { HomePage } from './home-page';

export const routes: Routes = [
  { path: '', component: HomePage, pathMatch: 'full', title: 'Campus Traces' },
  { path: 'archive', component: ArchivePage, title: 'Archive | Campus Traces' },
  {
    path: 'archive/:id',
    component: EntryPage,
    resolve: {
      entry: ({ paramMap }: ActivatedRouteSnapshot) => {
        const id = paramMap.get('id');
        return archiveEntries.find((entry) => entry.images.some((image) => image.id === id));
      },
    },
    title: ({ paramMap }) => `Entry ${paramMap.get('id')} | Campus Traces`,
  },
  { path: '**', redirectTo: '' },
];
