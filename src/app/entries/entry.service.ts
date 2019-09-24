import { Entry } from './entry.model';

export class EntryService {
  private entries: Entry[] = [];

  getEntries() {
    // a copy of entries array
    return [...this.entries];
  }
}
