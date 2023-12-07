import { Component } from '@angular/core';

@Component({
  selector: 'app-auth-form',
  templateUrl: './auth-form.component.html',
  styleUrl: './auth-form.component.scss',
})
export class AuthFormComponent {
  viewpass() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }
  visible: boolean = true;
  changetype: boolean = true;
  deleteType: boolean = true;

  togglePasswordVisibility() {
    this.visible = !this.visible;
    this.changetype = !this.changetype;
  }

  rememberMe: boolean = false;

  toggleCheckbox() {
    this.rememberMe = !this.rememberMe;
  }
  public inputText = '';
}
