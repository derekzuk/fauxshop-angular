import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-product1',
  templateUrl: './product1.component.html'
})
export class Product1Component implements OnInit {
    productNumber: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.productNumber = this.router.url.replace('/','');
    }

    ngOnDestroy() {
    }

}
