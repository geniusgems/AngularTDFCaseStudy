import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {
  isRegistered: boolean = false;

  registerUser() {
    // Logic to register the user can be added here (e.g., sending data to a server).
    // For this example, we'll simply mark the user as registered.

    this.isRegistered = true;
  }
  registeredUser = {fname:'',lname:'',email:'',password:'',cnfpassword:'',dob:'',gender:''};

  onsubmit(){
    console.log(this.registeredUser.email);
    console.log(this.registeredUser.password);
    alert("User registration is successful. You are now registered as "+ this.registeredUser.fname+ ' ' + this.registeredUser.lname);
  }
}
