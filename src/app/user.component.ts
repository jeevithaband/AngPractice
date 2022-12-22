import { Component } from "@angular/core";
import { UsersService } from "./users.service";

@Component({
    selector : 'app-user',
    template : '<h1>hello</h1>'
})
export class UserComponent{
    constructor(private userser :UsersService){
        this.userser.getUsers().subscribe((user:any)=>{
            console.log(user)
        })
    }
}