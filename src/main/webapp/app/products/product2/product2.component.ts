import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'jhi-product2',
  templateUrl: './product2.component.html'
})
export class Product2Component implements OnInit {
    productNumber: string;

    constructor(private router: Router) {
    }

    ngOnInit() {
        this.productNumber = this.router.url.replace('/','');
    }

    ngOnDestroy() {
    }

}
