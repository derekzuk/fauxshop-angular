import { Injectable } from '@angular/core';
import { NgbModal, NgbModalRef, NgbModalOptions } from '@ng-bootstrap/ng-bootstrap';

import { JhiLoginModalComponent } from './login.component';

@Injectable()
export class LoginModalService {
    private isOpen = false;
    constructor(
        private modalService: NgbModal,
    ) {}

    open(): NgbModalRef {
        if (this.isOpen) {
            return;
        }
        this.isOpen = true;
        const options: NgbModalOptions = {windowClass: 'modal-opened'};
        const modalRef = this.modalService.open(JhiLoginModalComponent, options);
        modalRef.result.then((result) => {
            console.log(result);
            this.isOpen = false;
        }, (reason) => {
            console.log(reason);
            this.isOpen = false;
        });
        return modalRef;
    }
}
