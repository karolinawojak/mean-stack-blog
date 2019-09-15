import { Component } from '@angular/core';

@Component ({
  selector: 'app-entry-create',
  templateUrl: './entry-create.component.html'
})

export class EntryCreateComponent {
  onAddEntry() {
    alert('Entry added');
  }
}
