import { Inject, Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

@Injectable()
export class UUIDService {
    uuid: number;

    constructor(private $localStorage: LocalStorageService,
                private $sessionStorage: SessionStorageService) {
    }

    public getUUID(account): number {
        console.log('account: ' + account);
        if (account != null) {
            this.uuid = account.id;
            this.$localStorage.store('uuidValue', this.uuid);
        } else {
            const existingUUID = this.$localStorage.retrieve('uuidValue');
            console.log(existingUUID);
            if (existingUUID == null) {
                this.uuid = Math.floor(Math.random() * 10000000000000000) + 1;
                this.$localStorage.store('uuidValue', this.uuid);
            } else {
                this.uuid = existingUUID;
            }
        }
        console.log(this.uuid);
        console.log(this.$localStorage.retrieve('uuidValue'));
        return this.uuid;
    }

}
