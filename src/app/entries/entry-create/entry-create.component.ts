import { Component, EventEmitter, Output } from '@angular/core';

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
    const entryData = {
      title: this.entryTitle,
      content: this.entryInput};

    this.entryAdded.emit(entryData);
  }
}
