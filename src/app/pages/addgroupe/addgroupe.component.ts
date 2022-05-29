import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

class User{
  username!: string;
}

@Component({
  selector: 'app-addgroupe',
  templateUrl: './addgroupe.component.html',
  styleUrls: ['./addgroupe.component.scss']
})
export class AddgroupeComponent implements OnInit {

  users: User[] = [];
  newUsers: User = new User();

  constructor(public router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('users') != null){
      // @ts-ignore
      this.users = JSON.parse(localStorage.getItem('users'));
    }
  }

  addUser(): void {
    // @ts-ignore
    this.users.push(this.newUsers);
    this.newUsers = new User();
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  saveData(registerForm: NgForm): void {
    console.log('valeur : ', JSON.stringify(registerForm.value));
  }

  showWork(): void {
    this.router.navigateByUrl('Work');
  }
}
