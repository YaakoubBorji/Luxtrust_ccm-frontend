import { User } from "../models/user.model";
import { Pipe, PipeTransform } from "@angular/core";

@Pipe({ name: "filtre" ,pure :false})
export class FiltrePipe implements PipeTransform {
  transform(users: Array<User>, search: string) {

    if (users){
    return users.filter((u : User) => {
      return u.userName.toUpperCase().includes(search?search.toUpperCase():"");
    });
  }
}
}

