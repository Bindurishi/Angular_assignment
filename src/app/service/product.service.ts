import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Product {
  id: number;
  name: string;
  price: number;
  image: string;
  quantity: number;
}

@Injectable({
  providedIn: 'root'
})
export class ProductService {

  private products: Product[] = [
    { id: 1, name: 'Cheese Burger', price: 389, image: "assets/image.png", quantity: 1 },
    { id: 2, name: 'Chicken Burger', price: 309, image: "assets/image1.png", quantity: 1 },
    { id: 3, name: 'Aloo Burger', price: 380, image: "assets/image2.png", quantity: 1 },
    { id: 4, name: 'Veg Burger', price: 369, image: "assets/image4.png", quantity: 1 },
  ];

  private specialProducts: Product[] = [
    { id: 5, name: 'Special Cheese Burger', price: 219, image: "assets/image.png", quantity: 1 },
    { id: 6, name: 'Special Chicken Burger', price: 229, image: "assets/image2.png", quantity: 1 },
    { id: 7, name: 'New Cheese Burger', price: 250, image: "assets/image5.png", quantity: 1 },
    { id: 8, name: 'New Veg Burger', price: 200, image: "assets/image4.png", quantity: 1 },
  ];

  private newArrivalProducts: Product[] = [
    { id: 9, name: 'New Cheese Burger', price: 450, image: "assets/image5.png", quantity: 1 },
    { id: 10, name: 'New Veg Burger', price: 400, image: "assets/image4.png", quantity: 1 },
    { id: 11, name: 'New Cheese Burger', price: 450, image: "assets/image2.png", quantity: 1 },
  ];

  private relatedProducts: Product[] = [
    { id: 12, name: 'Chicken Leg Piece', price: 550, image: "assets/image11.png", quantity: 1 },
    { id: 13, name: 'Mango Juice', price: 200, image: "assets/image12.png", quantity: 1 },
    { id: 14, name: 'Strawberry Ice Cream', price: 150, image: "assets/image13.png", quantity: 1 },
    { id: 15, name: 'Chocklate Cake', price: 650, image: "assets/image14.png", quantity: 1 },
  ];

  private cart: Product[] = [];

  private cartSubject = new BehaviorSubject<Product[]>(this.cart);

  cart$ = this.cartSubject.asObservable();


  getProducts() {
    return this.products;
  }

  getSpecialProducts() {
    return this.specialProducts;
  }

  getNewArrivalProducts() {
    return this.newArrivalProducts;
  }

  getrelatedProducts() {
    return this.relatedProducts;
  }

  addToCart(product: Product) {
    const existingProduct = this.cart.find(item => item.id === product.id);
    if (existingProduct) {
      existingProduct.quantity += 1;
    } else {
      this.cart.push({ ...product });
    }
    this.cartSubject.next(this.cart); 
  }

  getCart() {
    return this.cart;
  }

  calculateTotal() {
    return this.cart.reduce((total, item) => total + item.price * item.quantity, 0);
  }

  updateCart(cart: Product[]) {
    this.cart = cart;
    this.cartSubject.next([...this.cart]);
  }

}