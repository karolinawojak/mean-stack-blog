import { Component } from '@angular/core';

@Component ({
  selector: 'app-entry-create',
  templateUrl: './entry-create.component.html'
})

export class EntryCreateComponent {

  entryInput = '';
  newEntry = '';

  onAddEntry() {
    this.newEntry = this.entryInput;
  }
}
