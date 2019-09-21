import { Component, EventEmitter, Output } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Entry } from '../entry.model';

@Component ({
  selector: 'app-entry-create',
  templateUrl: './entry-create.component.html',
  styleUrls: ['./entry-create.component.scss']
})

export class EntryCreateComponent {

  @Output()
  entryAdded = new EventEmitter();

  onAddEntry(form: NgForm) {

    if (form.invalid) {
      return;
    }

    const entryData: Entry = {
      title: form.value.title,
      content: form.value.content
    };

    this.entryAdded.emit(entryData);
  }
}
