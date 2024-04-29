import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent {
  form:any={
    data:{},
    message:"",
  }
  inputerror:any={}
  constructor(private httClient:HttpClient){

  }
  signUp(){
    var self=this;
    this.httClient.post('http://localhost:8082/Auth/signUp',this.form.data).subscribe((res:any)=>{
      self.form.message=res.result.message;

    })
  }

}
