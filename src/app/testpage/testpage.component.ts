import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-testpage',
  templateUrl: './testpage.component.html',
  styleUrls: ['./testpage.component.css']
})
export class TestpageComponent {
login=''
password=''
message=''
constructor(private router: Router){

}
signInNew(){
  if(this.login=='admin' && this.password=='admin'){
    this.router.navigateByUrl("/login")
  }
  else{
    this.message="invalid login id & password"
  }
}
}

