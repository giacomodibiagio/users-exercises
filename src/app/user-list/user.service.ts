import { Injectable } from '@angular/core';
import {environment} from "../../environments/environment";
import {HttpClient} from "@angular/common/http";
import {map, Observable} from "rxjs";
import {User, UserResponse} from "./user.model";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient) { }

  getUsers(): Observable<User[]> {
    return this.http.get<UserResponse[]>(environment.basePaths.users).pipe(map(resp => {
      return this._getUsersResponse(resp)
      })
    )
  }

  private _getUsersResponse(resp: UserResponse[]): User[] {
    const mappedResponse: User[] = []
    resp.forEach((item) => mappedResponse.push(<User>{
      id: item.id,
      name: item.name,
      username: item.username,
      city: item.address.city,
      companyName: item.company.name,
      email: item.email,
      phone: item.phone,
      website: item.website,
      address: item.address.street + ', ' + item.address.zipcode + ', ' + item.address.city
    }))
    return mappedResponse
  }
}
