import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { TopBarComponent } from './top-bar/top-bar.component';
import { GoonComponentComponent } from './goon-component/goon-component.component';


import { AppComponent } from './app.component';


@NgModule({
  declarations: [
    AppComponent,
    TopBarComponent,
    GoonComponentComponent

  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
