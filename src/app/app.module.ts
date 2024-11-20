import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BurgerQueenComponent } from './burger-queen/burger-queen.component';
import { ProductComponent } from './product/product.component';
import { CartComponent } from './cart/cart.component';
import { DefaultLayoutComponent } from './default-layout/default-layout.component';
import { FormsModule } from '@angular/forms';
@NgModule({
  declarations: [
    AppComponent,
    BurgerQueenComponent,
    ProductComponent,
    CartComponent,
    DefaultLayoutComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
