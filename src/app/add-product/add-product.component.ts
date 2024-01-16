import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';

@Component({
  selector: 'app-add-product',
  templateUrl: './add-product.component.html',
  styleUrls: ['./add-product.component.css']
})
export class AddProductComponent implements OnInit{
  productForm!: FormGroup;

  constructor(private fb: FormBuilder, 
    private productService: ProductService){}
  
  ngOnInit(): void {
    this.productForm = this.fb.group({
      name: ['' , Validators.required],
      description: ['', Validators.required],
      wholesalePrice: ['', [Validators.required, Validators.min(0)]],
      retailPrice: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
    });
  }
  
  onSubmit(): void{
    if(this.productForm.valid){
      const formData = this.productForm.getRawValue();
      this.productService.addProduct(formData as Product);
    }
  }
}
