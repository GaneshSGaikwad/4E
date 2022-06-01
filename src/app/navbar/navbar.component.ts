import { Component } from "@angular/core";
import { TokenStorageService } from '../token.service';

@Component({
    selector:'app-navbar',
    templateUrl:'./navbar.component.html'

})


export class Navbar{

    constructor(private ts:TokenStorageService){}

    x=localStorage.getItem('user');

    logout(){
        this.ts.signOut();
        window.location.reload();
        
     }

}