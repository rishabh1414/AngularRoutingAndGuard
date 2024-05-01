import { Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { ServicesComponent } from './components/services/services.component';
import { ContactComponent } from './components/contact/contact.component';
import { ProductsComponent } from './components/products/products.component';
import { SingleProductComponent } from './components/single-product/single-product.component';
import { LoginComponent } from './components/login/login.component';
import { authGuard } from './auth.guard';

export const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    title: 'DemoProject | Home',
    canActivate: [authGuard],
  },
  {
    path: 'about',
    component: AboutComponent,
    title: 'DemoProject | About',
    canActivate: [authGuard],
  },
  {
    path: 'services',
    component: ServicesComponent,
    title: 'DemoProject | Services',
    canActivate: [authGuard],
  },
  {
    path: 'contact',
    component: ContactComponent,
    title: 'DemoProject | Contact',
    canActivate: [authGuard],
  },
  {
    path: 'products',
    component: ProductsComponent,
    title: 'DemoProject | Products',
    canActivate: [authGuard],
  },
  {
    path: 'products/:id',
    component: SingleProductComponent,
    title: 'DemoProject | Single-Product',
    canActivate: [authGuard],
  },
  {
    path: 'login',
    component: LoginComponent,
    title: 'DemoProject | login',
  },
  {
    path: '**',
    component: LoginComponent,
    title: 'DemoProject | login',
  },
];
