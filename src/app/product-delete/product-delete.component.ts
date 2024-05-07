import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-product-delete',
  templateUrl: './product-delete.component.html',
  styleUrls: ['./product-delete.component.css']
})
export class ProductDeleteComponent implements OnInit {
deleteProductt() {
throw new Error('Method not implemented.');
}
  productId!: number;
  product: any;

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private productService: ProductService
  ) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      this.productId = +params['id'];
    });
  }

  

  deleteProduct() {
    this.productService.deleteProduct(this.productId).subscribe(
      () => {
         console.log('Product deleted successfully:', Response);
        // Navigate to a specific route after successful deletion
        // this.router.navigate([`/products/${this.productId}`]);
      },
      (error: any) => {
        console.error('Error deleting product:', error);
      }
    );
  }

 
}
  

 
 
