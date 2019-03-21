import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularDynamicStylePluginLibModule } from 'angular-dynamic-style-plugin-lib';
import { AppComponent } from './app.component';

@NgModule({
  declarations: [AppComponent],
  imports: [BrowserModule, AngularDynamicStylePluginLibModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {}
