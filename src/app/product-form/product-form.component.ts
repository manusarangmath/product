import { Component } from '@angular/core';

@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

  
  productCode: string = '';
  initialMeanValue: number | null = null;
  initialMaxValue: number | null = null;
  metricMeanValue: number | null = null;
  metricMaxValue: number | null = null;
  units: string = '';
  isActive: boolean = false;
testForm: any;
createdBy: any;
modifiedBy: any;
productDate: any;

  constructor() { }

  submitForm() {
    console.log('Form submitted!');
    console.log('Product Code:', this.productCode);
    // console.log('Product Code:', this.productCode);
    // console.log('Initial Mean Value:', this.initialMeanValue);
    // console.log('Initial Max Value:', this.initialMaxValue);
    // console.log('Metric Mean Value:', this.metricMeanValue);
    // console.log('Metric Max Value:', this.metricMaxValue);
    // console.log('Units:', this.units);
    // console.log('Is Active:', this.isActive);
  }
}