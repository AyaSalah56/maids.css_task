import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  searchInput:BehaviorSubject<number>= new BehaviorSubject(-1)

  constructor(private HttpClient:HttpClient) { }

  getAllUsers(pageNum:number=1):Observable<any>
  {
    return this.HttpClient.get(`https://reqres.in/api/users?page=${pageNum}`)
  }

  getSpecUser(userId:number):Observable<any>
  {
    return this.HttpClient.get(`https://reqres.in/api/users/${userId}`)
  }

  
}
