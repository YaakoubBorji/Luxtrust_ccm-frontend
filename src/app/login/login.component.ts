import { User } from "../shared/models/user.model";
import { Router } from "@angular/router";
import { AuthService } from "./../shared/services/authentification/auth.service";
import { UserService } from "./../shared/services/users/user.service";
import { Component, OnInit } from "@angular/core";
import {
  FormGroup,
  FormBuilder,
  Validators,
  AbstractControl,
  FormControl
} from "@angular/forms";
import { Observable } from "rxjs";

@Component({
  selector: "app-login",
  templateUrl: "./login.component.html",
  styleUrls: ["./login.component.css"]
})
export class LoginComponent implements OnInit {
  public erreurMessage : string;
  constructor(
    private fb: FormBuilder,
    private authService: AuthService,
    private router: Router,
    private userService: UserService
  ) {}

  public loginForm: FormGroup;

  ngOnInit() {
    this.loginForm = this.fb.group({
      login: ["", [Validators.required], this.loginValidatorAsync.bind(this)],
      password: ["", Validators.required]
    });
  }

  doSend() {
    if (this.loginForm.status === "VALID") {
      this.authService.login(this.loginForm.value).subscribe((x: boolean) => {
        console.log("x ====> "+x);
        if (x) {
          this.router.navigate(["/home"]);
        } else {
          this.erreurMessage = "Login/password invalid"
        }
      });
    }
  }

  loginValidatorAsync(
    formControl: FormControl
  ): Promise<{ [s: string]: boolean }> | Observable<{ [s: string]: boolean }> {
    return new Promise((resolve, reject) => {
      if (formControl.pristine) resolve(null);
      setTimeout(() => {
        resolve(null);
      }, 3000);
    });
  }

  public verifier(formControlName: string, errorName: string): boolean {
    return (
      this.loginForm.get(formControlName).dirty &&
      this.loginForm.get(formControlName).hasError(errorName)
    );
  }

 
}
