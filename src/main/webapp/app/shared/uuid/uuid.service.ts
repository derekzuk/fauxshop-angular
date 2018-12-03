import { Inject, Injectable } from '@angular/core';
import { SESSION_STORAGE, StorageService } from 'angular-webstorage-service';

const STORAGE_KEY = 'uuid';

@Injectable()
export class UUIDService {

    constructor(@Inject(SESSION_STORAGE) private storage: StorageService) {

    }

    public getUUID(): number {
        let uuid: number;
        let existingUUID: number = this.storage.get(STORAGE_KEY);
        if (existingUUID == null) {
            uuid = Math.floor(Math.random() * 10000000000000000) + 1;
            this.storage.set(STORAGE_KEY, uuid);
        } else {
            uuid = existingUUID;
        }
        console.log(uuid);
        return uuid;
    }
}
