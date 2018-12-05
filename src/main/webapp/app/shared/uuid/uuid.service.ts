import { Inject, Injectable } from '@angular/core';
import { LocalStorageService, SessionStorageService } from 'ngx-webstorage';

const STORAGE_KEY = 'uuidStorageKey';

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
            this.$localStorage.store(STORAGE_KEY, this.uuid);
        } else {
            const existingUUID: number = this.$localStorage.retrieve(STORAGE_KEY);
            if (existingUUID == null) {
                this.uuid = Math.floor(Math.random() * 10000000000000000) + 1;
                this.$localStorage.store(STORAGE_KEY, this.uuid);
            } else {
                this.uuid = existingUUID;
            }
        }
        console.log(this.uuid);
        return this.uuid;
    }

}
