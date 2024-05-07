import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Params, Router } from '@angular/router'; // Import Router
import { ProductService } from '../product.service';
import { Product } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {
  productId!: number;
  product!: Product;

  constructor(
    private route: ActivatedRoute,
    private productService: ProductService,
    private router: Router // Inject Router
  ) { }

  ngOnInit() {
    this.route.params.subscribe((params: Params) => {
      const id = +params['id'];
      this.loadProduct(id);
    });
  }

  loadProduct(id: number): void {
    this.productService.getProductById(id).subscribe(
      (product: Product) => {
        this.product = product;
      },
      (error: any) => {
        console.error('Error loading product:', error);
      }
    );
  }

  saveProduct() {
    this.productService.editProduct(this.product).subscribe(
      () => {
        console.log('Product edited successfully');
        // Navigate to a specific route after successful editing
        // For example, navigate to the product detail page
        this.router.navigate([`/products`]);
      },
      (error: any) => {
        console.error('Error editing product:', error);
      }
    );
  }
}
