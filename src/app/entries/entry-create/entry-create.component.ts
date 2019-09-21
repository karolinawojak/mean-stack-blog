import { Component, EventEmitter, Output } from '@angular/core';
import { Entry } from '../entry.model';

@Component ({
  selector: 'app-entry-create',
  templateUrl: './entry-create.component.html',
  styleUrls: ['./entry-create.component.scss']
})

export class EntryCreateComponent {

  entryTitle = '';
  entryInput = '';
  @Output()
  entryAdded = new EventEmitter();

  onAddEntry() {
    const entryData: Entry = {
      title: this.entryTitle,
      content: this.entryInput};

    this.entryAdded.emit(entryData);
  }
}
