import { Component, input, linkedSignal } from '@angular/core';
import { RouterLink } from '@angular/router';

import { type ArchiveEntry, formatEntryIds } from './archive-entries';

@Component({
  selector: 'app-entry-page',
  imports: [RouterLink],
  templateUrl: './entry-page.html',
})
export class EntryPage {
  readonly entry = input<ArchiveEntry>();
  readonly id = input.required<string>();

  protected readonly formatEntryIds = formatEntryIds;
  protected readonly activeIndex = linkedSignal(() => {
    const id = this.id();
    const index = this.entry()?.images.findIndex((image) => image.id === id);
    return Math.max(0, index ?? 0);
  });

  protected moveImage(step: -1 | 1, event?: Event): void {
    event?.preventDefault();
    const count = this.entry()?.images.length ?? 0;
    if (count > 1) {
      this.activeIndex.update((index) => (index + step + count) % count);
    }
  }
}
