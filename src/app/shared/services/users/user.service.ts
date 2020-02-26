import { Credential } from '../../models/credential.model';
import { environment } from '../../../../environments/environment';

import { User } from '../../models/user.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { ApiResponse } from '../../models/api-response.model';

@Injectable()
export class UserService {

  //private readonly url = "http://localhost:9090";
  constructor(private http: HttpClient) {}

  public getUserByLoginPassword(credential: Credential): Observable<User> {
    return this.http.post<User>(
      environment.apiUrl+"/authenticate",  credential);
  }
  
  
  public existLogin(login: string): boolean {
    return null;
  }

  
  public getAll(): Observable<Array<User>> {
    return   this.http.get<Array<User>>(
      environment.apiUrl+"/users",{headers:{'Authorization':'Basic '+this.getConnectedUser().authData}});
      //environment.apiUrl+"/users");
  }

  /**
   * return connected user
   */
  public getConnectedUser(): User {
    //And to retrieve data from localstorage
    return  JSON.parse(sessionStorage.getItem("connectedUser"));
    
  }

  /**
   * return user by ID
   * @param id 
   */
  public getUserByUserName(userName : string):Observable<User> {
    return this.http.get<User>(
      environment.apiUrl+"/user/"+userName);
  }

  /**
   * 
   * @param user Create user.
   * don't need authentication
   */
  public createUser(user : User):Observable<ApiResponse> {
    return this.http.post<ApiResponse>(
      environment.apiUrl+"/register", user);
  }

  public getRoles():Observable<any> {
    return this.http.get<any>(
      environment.apiUrl+"/roles");
  }
}