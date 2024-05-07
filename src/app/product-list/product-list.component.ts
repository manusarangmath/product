import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';
import { Product } from '../product';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';
import * as XLSX from 'xlsx';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  products: Product[] = [];
  pageProducts: Product[] = [];
  searchTerm: string = '';
  sortCriteria: keyof Product = 'productCode';
  sortOrder: number = 1;

  constructor(private productService: ProductService, private router: Router, private authService: AuthService) {}

  ngOnInit() {
    // Check if the user is logged in when the component initializes
    if (!this.authService.isLoggedIn) {
      // Redirect to login page if not logged in
      window.location.href = '/login';
    }
    this.loadProducts();
  }
  
  loadProducts(): void {
    this.productService.getProducts().subscribe(
      (data: Product[]) => {
        // Filter products where active is true
        const filteredProducts = data.filter(product => product.active === true);
        this.products = filteredProducts; // Assign filtered products to products array
        this.pageProducts = filteredProducts; // Assign filtered products to pageProducts array
        this.applyFilterAndSort(); // Apply initial filtering and sorting
      },
      (error) => {
        console.error('Error loading products:', error);
      }
    );
  }

  applyFilterAndSort(): void {
    let filteredProducts = this.products.filter(product => {
      // Filter products based on search term
      return product.productCode.toLowerCase().includes(this.searchTerm.toLowerCase());
    });
  
    // Sort products based on sort criteria and order
    filteredProducts.sort((a, b) => {
      // Use keyof Product to ensure sortCriteria is a valid property of Product
      const propA = a[this.sortCriteria] as string;
      const propB = b[this.sortCriteria] as string;
      
      if (propA < propB) {
        return -1 * this.sortOrder;
      } else if (propA > propB) {
        return 1 * this.sortOrder;
      }
      return 0;
    });
  
    this.pageProducts = filteredProducts; // Update the displayed products
  }
  

  sortProducts(criteria: keyof Product): void {
    // Toggle sort order if same criteria is selected again
    if (this.sortCriteria === criteria) {
      this.sortOrder *= -1;
    } else {
      this.sortCriteria = criteria;
      this.sortOrder = 1; // Reset sort order to ascending if sorting by a new criteria
    }

    this.applyFilterAndSort(); // Apply sorting
  }

  downloadExcel(): void {
    const filteredProducts = this.products.filter(product => {
      return product.productCode.toLowerCase().includes(this.searchTerm.toLowerCase());
    });

    const data: any[] = filteredProducts.map(product => {
      return {
        'Product Code': product.productCode,
        'Intrial Mean': product.intrialMean,
        'Intrial Max': product.intrialMax,
        'Metric Mean': product.metricMean,
        'Metric Max': product.metricMax,
        'Units': product.units,
        'Created By': product.createdBy,
        'Modified By': product.modifiedBy,
        'Product Date': product.productDate,
        'Active': product.active
      };
    });

    const ws: XLSX.WorkSheet = XLSX.utils.json_to_sheet(data);
    const wb: XLSX.WorkBook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(wb, ws, 'Product List');
    XLSX.writeFile(wb, 'product_list.xlsx');
  }

  deleteProductid(id: any) {    
    this.productService.deleteProduct(id).subscribe(data => {
      console.log(data);
      this.loadProducts(); // Reload products after deletion
    },
      (error: any) => {
        console.error('Error deleting product:', error);
      }
    );
  }
  
  editProduct(id: any) {
    
         console.log('Product edited successfully:', Response);
        // Navigate to a specific route after successful deletion
        this.router.navigate([`/products/edit/${id}`]);
      
  }
  
}
