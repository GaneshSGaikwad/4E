import { Component, OnInit } from '@angular/core';
import { TokenStorageService } from './token.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'App';


  constructor(private tokenService:TokenStorageService){}
  
  
  ngOnInit(): void {

    
  }
;

hideNavbar(){
 
  if(this.tokenService.getToken()){
    return true;
}else {
return false;
}

}

  
}
