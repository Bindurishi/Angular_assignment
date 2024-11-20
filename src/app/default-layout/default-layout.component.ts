import { ChangeDetectorRef, Component } from '@angular/core';
import { ProductService } from '../service/product.service';

@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.scss']
})
export class DefaultLayoutComponent {

  cartLength = 0;

  constructor(private productService: ProductService,private cd: ChangeDetectorRef) {}
  
  ngOnInit(){
    this.productService.cart$.subscribe((cart:any) => {
      this.cartLength = cart.length;
      this.cd.detectChanges();
    });
  }
}
