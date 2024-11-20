import { Component } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.scss']
})
export class ProductComponent {
  product: any;
  relatedProducts:any=[];

  constructor(private route: ActivatedRoute, private productService: ProductService) {}

  ngOnInit() {
    const id = this.route.snapshot.paramMap.get('id');
    const productId = id ? +id : null;
    this.product = this.productService.getProducts().find(p => p.id === productId);
    this.relatedProducts = this.productService.getrelatedProducts();
  }

  increaseQuantity() {
    this.product.quantity += 1;
  }

  decreaseQuantity() {
    if (this.product.quantity > 1) {
      this.product.quantity -= 1;
    }
  }

  addToCart(product: any) {
    this.productService.addToCart(product);
  }
}
