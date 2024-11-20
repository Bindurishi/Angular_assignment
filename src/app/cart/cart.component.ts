import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.scss']
})
export class CartComponent {
  cart:any = [];
  total = 0;
  discount = 100;
  maintotal = 0;
  display:boolean= true;

  constructor(private productService: ProductService) {}

  ngOnInit() {
    this.productService.cart$.subscribe(cart => {
      this.cart = cart;
      this.total = this.productService.calculateTotal();
    });
    if(this.total !== 0){
      this.maintotal = this.total - this.discount;
      this.display = true;
    }else{
      this.discount = 0;
      this.display = false;
    }
  }

  removeItem(index: number) {
    this.cart.splice(index, 1);
    this.productService.updateCart(this.cart);
    this.total = this.productService.calculateTotal();
    if(this.total !== 0){
      this.maintotal = this.total - this.discount;
      this.display = true;
    }else{
      this.discount = 0;
      this.display = false;
    }
    }

    updateQuantity(index: number, change: number): void {
      const updatedQuantity = this.cart[index].quantity + change;
      if (updatedQuantity >= 0) {
        this.cart[index].quantity = updatedQuantity;
    
        this.productService.updateCart(this.cart);
        this.total = this.productService.calculateTotal();
        if (this.total !== 0) {
          this.maintotal = this.total - this.discount;
          this.display = true;
        } else {
          this.discount = 0;
          this.display = false;
        }
      }
    }

  buyNow() {
    console.log('Order Placed JSON:', JSON.stringify(this.cart));
  }
}
