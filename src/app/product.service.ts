import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Product } from './product'; // Assuming your interface is in a file named product.interface.ts

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  httpClient: any;
  getProductBy(id: number) {
    throw new Error('Method not implemented.');
  }
  // editProductBy(pId: any) {
  //   throw new Error('Method not implemented.');
  // }
  // editProduct1(pId: any) {
  //   throw new Error('Method not implemented.');
  // }
  editProductById(pId: any) {
    throw new Error('Method not implemented.');
  }
  deleteProductById(id: number) {
    throw new Error('Method not implemented.');
  }
  
  private apiUrl ="http://localhost:8080/api/products"; 
  
  
  constructor(private http: HttpClient) { }

  getProductById(id: number): Observable<Product> 
  
 
  {
    const url = `${this.apiUrl}/${id}`;
     return this.http.get<Product>(url);
    

  }

  // Create a new product
  createProduct(product: Product): Observable<Product> {
    return this.http.post<Product>(this.apiUrl, product);
  }

  // Read all products
  getProducts(): Observable<Product[]> {
    return this.http.get<Product[]>(this.apiUrl);
  }

  // Read a single product by ID
  getProduct(productById: number): Observable<Product> {
    const url = `${this.apiUrl}/${productById}`;
    return this.http.get<Product>(url);
  }

  // Update a product
  editProduct(productId: Product): Observable<Product> {
    const url = `${this.apiUrl}/${productId.productId}`;
    return this.http.put<Product>(url, productId);
  }

  // Delete a product by ID
  deleteProduct(id: number): Observable<any> {
    return this.http.delete(`${this.apiUrl}/${id}`);
  }
}
