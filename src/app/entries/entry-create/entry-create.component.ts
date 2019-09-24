import { Component, EventEmitter } from '@angular/core';
import { NgForm } from '@angular/forms';
import { EntryService } from '../entry.service';

@Component ({
  selector: 'app-entry-create',
  templateUrl: './entry-create.component.html',
  styleUrls: ['./entry-create.component.scss']
})

export class EntryCreateComponent {

  entryAdded = new EventEmitter();

  constructor(public entryService: EntryService) {}

  onAddEntry(form: NgForm) {

    if (form.invalid) {
      return;
    }

    this.entryService.addEntry(form.value.title, form.value.content);
  }
}
