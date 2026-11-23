import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { archiveEntries } from './archive-entries';

@Component({
  selector: 'app-archive-page',
  imports: [RouterLink],
  templateUrl: './archive-page.html',
})
export class ArchivePage {
  protected readonly entries = archiveEntries;
}
