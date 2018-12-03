import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = 'uuidStorageKey';

@Injectable()
export class UUIDService {
    uuid: number;

    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {
    }

    public getUUID(accountId): number {
        console.log('accountId: ' + accountId);
        // account.id == 2 is anonymoususer
        if (accountId !== 2) {
            this.uuid = accountId;
            this.storage.set(STORAGE_KEY, this.uuid);
        } else {
            const existingUUID: number = this.storage.get(STORAGE_KEY);
            if (existingUUID == null) {
                this.uuid = Math.floor(Math.random() * 10000000000000000) + 1;
                this.storage.set(STORAGE_KEY, this.uuid);
            } else {
                this.uuid = existingUUID;
            }
        }
        console.log(this.uuid);
        return this.uuid;
    }

}
