import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { NgModule } from '@angular/core';
import { AppComponent } from './app.component';
import { EntryCreateComponent } from './entries/entry-create/entry-create.component';
import { EntriesListComponent } from './entries/entries-list/entries-list.component';

@NgModule({
  declarations: [
    AppComponent,
    EntryCreateComponent,
    EntriesListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
