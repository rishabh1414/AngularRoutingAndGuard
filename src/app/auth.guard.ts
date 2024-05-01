import { inject } from '@angular/core';
import { CanActivateFn, Router } from '@angular/router';

export const authGuard: CanActivateFn = (route, state) => {
  let myrouter = inject(Router);

  let isLoggedIn = localStorage.getItem('isLoggedin');

  if (!isLoggedIn || isLoggedIn === 'false') {
    myrouter.navigate(['login']);
    return false;
  }

  return true;
};
