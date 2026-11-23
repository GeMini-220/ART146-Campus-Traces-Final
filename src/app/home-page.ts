import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

import { archiveEntries } from './archive-entries';

@Component({
  selector: 'app-home-page',
  imports: [RouterLink],
  templateUrl: './home-page.html',
})
export class HomePage {
  protected readonly featuredEntry = archiveEntries.at(0);
}
