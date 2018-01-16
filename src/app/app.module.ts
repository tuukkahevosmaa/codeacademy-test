import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { HelloWorld } from './helloworld.component';
import { MyList } from './mylist.component';


@NgModule({
  declarations: [
    AppComponent,
    HelloWorld,
    MyList
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
