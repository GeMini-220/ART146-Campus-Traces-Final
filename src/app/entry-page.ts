import { Component, input } from '@angular/core';
import { RouterLink } from '@angular/router';

import { ArchiveEntry } from './archive-entries';

@Component({
  selector: 'app-entry-page',
  imports: [RouterLink],
  templateUrl: './entry-page.html',
})
export class EntryPage {
  readonly entry = input<ArchiveEntry>();
}
