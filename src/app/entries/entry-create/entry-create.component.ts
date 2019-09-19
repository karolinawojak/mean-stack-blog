import { Component } from '@angular/core';

@Component ({
  selector: 'app-entry-create',
  templateUrl: './entry-create.component.html',
  styleUrls: ['./entry-create.component.scss']
})

export class EntryCreateComponent {

  entryInput = '';
  newEntry = '';

  onAddEntry() {
    this.newEntry = this.entryInput;
  }
}
