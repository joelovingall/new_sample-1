import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';

//import './rxjs-operators';
import { AppComponent } from './app.component';
import { SampleService } from './sample.service';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule, HttpClientModule
  ],
  providers: [SampleService],
  bootstrap: [AppComponent]
})
export class AppModule { }
