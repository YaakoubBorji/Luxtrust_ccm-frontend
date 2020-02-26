import { UserService } from "./../shared/services/users/user.service";
import { User } from "../shared/models/user.model";
import { Router, ActivatedRoute } from "@angular/router";
import { Component, OnInit } from "@angular/core";

@Component({
  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  public users: Array<User>;
  public search: string;
  constructor(
    private router: Router,
    private activatedRoute: ActivatedRoute,
    private userService: UserService
  ) {}

  ngOnInit() {
    this.userService.getAll().subscribe((allUsers: Array<User>) => {
      this.users = allUsers;
    });
  }

  redirect(userName: string) {
    this.router.navigate(["/users/details", userName]);
  }

  filtrer(event): void {
    console.log(event.target.value);
  }


}
