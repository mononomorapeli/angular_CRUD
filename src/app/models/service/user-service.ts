import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { user } from "../user";

@Injectable({
    providedIn: 'root'
})
export class UserServices{
    baseUrl="/api/users"
    constructor(private http:HttpClient){

    }
 getUsers(){
    return this.http.get<user[]>(this.baseUrl);
 }
 createUsers(user:user){
    return this.http.post(this.baseUrl,user);
 }
}