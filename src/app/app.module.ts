import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { ProdutoComponent } from './produto/produto.component';
import { ClienteComponent } from './cliente/cliente.component';

@NgModule({
  declarations: [
    AppComponent,
    ProdutoComponent,
    ClienteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
