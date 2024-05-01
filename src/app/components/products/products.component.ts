import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-products',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './products.component.html',
  styleUrl: './products.component.css',
})
export class ProductsComponent {
  products: any = [];

  constructor(http: HttpClient) {
    http.get<any>('https://dummyjson.com/products').subscribe((response) => {
      console.log(response);
      this.products = response.products;
    });
  }
}
