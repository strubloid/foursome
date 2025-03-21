import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';

@NgModule({
  imports: [
    BrowserModule,
    AppComponent // ✅ Importing the standalone component here
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}