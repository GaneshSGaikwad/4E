import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class TokenStorageService {
  constructor() { }
  signOut(): void {
    localStorage.clear();
  }
   saveToken(token: string): void {

    localStorage.removeItem(token);
    localStorage.setItem('token', token);
    
  }
   getToken(): string | null {
    return localStorage.getItem('token');
  }
   saveUser(user: any) {
    localStorage.removeItem('user');
    localStorage.setItem('user', JSON.stringify(user));
  }
   getUser(): any {
    const user = localStorage.getItem('user');
    if (user) {
      return JSON.parse(user);
    }
    return {};
  }


  
 
}