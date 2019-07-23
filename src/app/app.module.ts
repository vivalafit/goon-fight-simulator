import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { TopBarComponent } from './top-bar/top-bar.component';
import { GoonComponentComponent } from './goon-component/goon-component.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    GoonComponentComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
