import { Component, Input, OnDestroy, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ProductService } from '../services/product.service';
import { Product } from '../interfaces/product';
import { ActivatedRoute } from '@angular/router';


@Component({
  selector: 'app-edit-product',
  templateUrl: './edit-product.component.html',
  styleUrls: ['./edit-product.component.css'],
})
export class EditProductComponent implements OnInit{
  productForm!: FormGroup;
  productId!: number;

  constructor(private fb: FormBuilder,
    private productService: ProductService,
    private route: ActivatedRoute){}

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.productId = params['id'];
    });

    this.productForm = this.fb.group({
      name: ['' , Validators.required],
      description: ['', Validators.required],
      wholesalePrice: ['', [Validators.required, Validators.min(0)]],
      retailPrice: ['', [Validators.required, Validators.min(0)]],
      quantity: ['', [Validators.required, Validators.min(0)]],
    });

    this.productService.getProductById(this.productId).subscribe(
      (response: any) => {
        if(response.success && response.data){
          this.productForm.patchValue(response.data);
        }
      }
    );


  }

  submitForm(){
    if(this.productForm.valid){
      const formData = this.productForm.getRawValue();
      formData.id = this.productId;
      this.productService.updateProduct(formData);
    }
  }
}
