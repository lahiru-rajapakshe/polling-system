import {Component, ElementRef, OnInit} from '@angular/core';
import {UserService} from "../service/user-service";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  name = "";
  valid=false;
  txtName!:ElementRef<HTMLInputElement>;


  constructor(private userService: UserService) {
  }

  ngOnInit(): void {
  }

  enter(): void {
    if (this.userService.login(this.name)) {
      alert('Goda');
      this.valid=true;
    } else {
      alert('Kachal');
      this.valid=false;
      this.txtName.nativeElement.select();
      this.txtName.nativeElement.focus();
    }
  }
}
