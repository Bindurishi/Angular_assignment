import { Component } from '@angular/core';
import { ProductService } from '../service/product.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-burger-queen',
  templateUrl: './burger-queen.component.html',
  styleUrls: ['./burger-queen.component.scss']
})
export class BurgerQueenComponent {

  products:any = [];
  specialProducts:any = [];
  newArrivalProducts:any = [];
  searchTerm: string = ''; 

  constructor(private productService: ProductService,private router: Router) {}

  ngOnInit() {
    this.products = this.productService.getProducts();
    this.specialProducts = this.productService.getSpecialProducts();
    this.newArrivalProducts = this.productService.getNewArrivalProducts();
  }

  addToCart(product: any): void {
    this.productService.addToCart(product);
    // alert(`${product.name} added to cart!`);
  }

  filteredProducts(products: any[]): any[] {
    if (!this.searchTerm) {
      return products;  
    }
    return products.filter(product => product.name.toLowerCase().includes(this.searchTerm.toLowerCase()));
  }

  viewProductDetails(product: any): void {
    this.router.navigate(['/product', product.id]);
  }

}
