import { Injectable } from '@angular/core';
import { LoggerService } from '../logger/logger.service';

@Injectable({
  providedIn: 'root'
})
export class StoreService {

  private memory: any = {};

  constructor(
    private logger: LoggerService
  ) { }

  save(key: string, data: any, cache = false, options?: any) {
    this.logger.debug('Store : save :: item whit key', key, 'data', data, 'cache', cache);
    this.memory[key] = data;

    if (cache) {
      sessionStorage.setItem(key, JSON.stringify(data));
    }
  }

  recover<T>(key: string, erase = false): T {
    const data = { ...this.memory[key] } || JSON.parse(sessionStorage.getItem(key));

    if (erase) {
      delete this.memory[key];
      sessionStorage.removeItem(key)
    }

    return data;
  }

}
