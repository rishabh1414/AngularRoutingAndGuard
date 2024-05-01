import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';

@Component({
  selector: 'app-single-product',
  standalone: true,
  imports: [],
  templateUrl: './single-product.component.html',
  styleUrl: './single-product.component.css',
})
export class SingleProductComponent {
  product: any;
  id: string | undefined;

  constructor(route: ActivatedRoute, http: HttpClient) {
    route.params.subscribe((param) => {
      console.log(param['id']);
      this.id = param['id'];
    });

    http
      .get<any>(`https://dummyjson.com/products/${this.id}`)
      .subscribe((response) => {
        console.log(response);
        this.product = response;
      });
  }
}
