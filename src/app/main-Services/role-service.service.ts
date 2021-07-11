import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class RoleServiceService {

  constructor(
  ) { }

  setItem(key: string, value: any): any {
    try {
      window.localStorage.setItem(key, JSON.stringify(value));
    } catch (err) {
      console.log(err);
    }
  }

  get(id: string): any {
    const item = window.localStorage.getItem(id);
    try {
      return item ? JSON.parse(item) : null;
    } catch (err) {
      console.error(err);
      return null;
    }
  }

  clear(): void {
    return window.localStorage.clear();
  }

}
