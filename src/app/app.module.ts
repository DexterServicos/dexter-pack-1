import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { MaterializeModule } from 'angular2-materialize';

import { AppComponent } from './app.component';
import { MouseEnterDirective } from './shared/mouse-enter.directive';
import { SobreNosComponent } from './sobre-nos/sobre-nos.component';
import { HomeComponent } from './home/home.component';
import { FaleConoscoComponent } from './fale-conosco/fale-conosco.component';
import { ValidateFormDirective } from './shared/validate-form.directive';

@NgModule({
  declarations: [
    AppComponent,
    MouseEnterDirective,
    SobreNosComponent,
    HomeComponent,
    FaleConoscoComponent,
    ValidateFormDirective
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MaterializeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
