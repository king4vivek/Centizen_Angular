import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IUser } from '../interfaces/userdetails.interface';

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  userList: Array<IUser>;
  constructor(private httpClient: HttpClient) {

  }

  ngOnInit() {
    this.httpClient.get<Array<IUser>>("https://jsonplaceholder.typicode.com/users").subscribe(resp => { this.userList = resp })
  }
}
