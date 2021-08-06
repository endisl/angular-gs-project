import { ProductService } from "./../product.service";
import { Product } from "./../product.model";
import { Component, OnInit } from "@angular/core";
import { ActivatedRoute, Router } from "@angular/router";

@Component({
  selector: "app-product-delete",
  templateUrl: "./product-delete.component.html",
  styleUrls: ["./product-delete.component.css"],
})
export class ProductDeleteComponent implements OnInit {
  product: Product = {
    id: 0,
    name: "",
    price: 0,
  };

  constructor(
    private productService: ProductService,
    private router: Router,
    private route: ActivatedRoute
  ) {}

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.readById(`${id}`).subscribe((product) => {
      this.product = product;
    });
  }

  deleteProduct(): void {
    const id = this.route.snapshot.paramMap.get("id");
    this.productService.delete(this.product.id).subscribe(() => {
      this.productService.showMessage("Produto excluído com sucesso!");
      this.router.navigate(["/products"]);
    });
  }

  cancel(): void {
    this.router.navigate(["/products"]);
  }
}
