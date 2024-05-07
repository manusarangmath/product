import { Component } from '@angular/core';
import { ProductService } from '../product.service'; 
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-product-add',
  templateUrl: './product-add.component.html',
  styleUrls: ['./product-add.component.css']
})
export class ProductAddComponent {
// onSubmit() {
// throw new Error('Method not implemented.');
// }
product: any;
createdBy: any;
// onSubmit() {
// throw new Error('Method not implemented.');
// }
  productCode: string = '';
  initialMeanValue: number | null = null;
  initialMaxValue: number | null = null;
  metricMeanValue: number | null = null;
  metricMaxValue: number | null = null;
  units: string = '';
  isActive: boolean = false;
modified_by: any;
modifiedBy: any;
productDate: any;


  
  constructor(
    private productService: ProductService ,
  private http: HttpClient, private router: Router )
  
  { }

 
  onSubmit() {
    console.log("my data");
    console.log('Product Code:', this.productCode);
    console.log('CreadedBy', this.createdBy);
    console.log('Initial Mean Value:', this.initialMeanValue);
    console.log('Initial Max Value:', this.initialMaxValue);
    console.log('Metric Mean Value:', this.metricMeanValue);
    console.log('Metric Max Value:', this.metricMaxValue);
    console.log('Units:', this.units);
    console.log('Is Active:', this.isActive);
  //   this.product.createdBy = this.createdBy; // Assign createdBy value to product object
  //   this.productService.createProduct(this.product).subscribe(
  //     (response) => {
  //       console.log('Product created successfully:', response);
  //       this.resetForm();
  //     },
  //     (error) => {
  //       console.error('Error creating product:', error);
  //     }
  //   );
  // }

  // resetForm() {
  //   this.product = {};
  //   this.createdBy = '';
  // }
  const newProduct = {
    // productId: 90,
    // productCode: this.productCode,
    // createdBy:this.createdBy,
    // initialMeanValue: this.initialMeanValue,
    // initialMaxValue: this.initialMaxValue,
    // metricMeanValue: this.metricMeanValue,
    // metricMaxValue: this.metricMaxValue,
    // units: this.units,
    // isActive: this.isActive,
    // modified_by: "2024-04-29 13:50:01",
    // productDate: "2023-07-09"
    productId:this.product,
    productCode: this.productCode,
    intrialMean: this.initialMeanValue,
    intrialMax: this.initialMaxValue,
    metricMean: this.metricMeanValue,
    metricMax: this.metricMaxValue,
    units: this.units,
    createdBy: this.createdBy,
    modifiedBy: this.modifiedBy,
    productDate: this.productDate,
    active:this.isActive
  };

  // Make HTTP POST request to your API endpoint
  this.http.post<any>('http://localhost:8080/api/products', newProduct).subscribe(
    (response) => {
      console.log('Product created successfully:', response);
      // Optionally, reset form fields or perform other actions
      this.goToProductList();
    },
    (error) => {
      console.error('Error creating product:', error);
    }
        
  );
  
}
goToProductList(){
  this.router.navigate(['/products']);
}
  }
  

