import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-products',
  templateUrl: './products.component.html'
})
export class ProductsComponent implements OnInit {
    productNumber: string;

    constructor(
        private router: Router
    ) { }

    ngOnInit() {
        this.productNumber = this.router.url.replace('/','');
    }

    ngOnDestroy() {
    }

}
