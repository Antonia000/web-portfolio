import { Injectable } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class RouterService {
  constructor(private readonly router: Router) {}

  getActivatedRoute() {
    return this.router.url;
  }
}
