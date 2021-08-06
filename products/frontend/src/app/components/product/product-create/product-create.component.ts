import { Product } from './../product.model';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProductService } from 'src/app/components/product/product.service';


@Component({
  selector: 'app-product-create',
  templateUrl: './product-create.component.html',
  styleUrls: ['./product-create.component.css']
})
export class ProductCreateComponent implements OnInit {

  product: Product = {
    id: 0, //Tive que acrescentar "id" por causa da alteração feita em product.model.ts //Alteração 2
    name: '',
    price: 0    
  }


  constructor(private productService: ProductService, private router: Router) { }

  ngOnInit(): void {
    
  }
    

  createProduct(): void {

    this.productService.create(this.product).subscribe(() => {
      this.productService.showMessage("Produto criado!")
      this.router.navigate(['/products'])
    })

  }

  cancel(): void {
    this.router.navigate(['/products'])
  }


}
