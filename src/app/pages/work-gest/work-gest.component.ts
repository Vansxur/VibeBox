import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';

class User{
  username!: string;
}

class Project{
  projectName!: string;
}

class List{
  listName!: string;
}


@Component({
  selector: 'app-work-gest',
  templateUrl: './work-gest.component.html',
  styleUrls: ['./work-gest.component.scss']
})
export class WorkGestComponent implements OnInit {

  users: User[] = [];
  newUsers: User = new User();

  projects: Project[] = [];
  newProject: Project = new Project();

  lists: List[] = [];
  newList: List = new List();

  constructor(public router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('users') != null){
      // @ts-ignore
      this.users = JSON.parse(localStorage.getItem('users'));
    }
    if (localStorage.getItem('projects') != null){
      // @ts-ignore
      this.projects = JSON.parse(localStorage.getItem('projects'));
    }
    if (localStorage.getItem('lists') != null){
      // @ts-ignore
      this.lists = JSON.parse(localStorage.getItem('lists'));
    }
  }
  saveData(registerForm: NgForm): void {
    console.log('valeur : ', JSON.stringify(registerForm.value));
  }
  saveDataProject(registerForm: NgForm): void {
    console.log('valeur : ', JSON.stringify(registerForm.value));
  }
  saveDataList(registerForm: NgForm): void {
    console.log('valeur : ', JSON.stringify(registerForm.value));
  }
  addUser(): any {
    // @ts-ignore
    this.users.push(this.newUsers);
    this.newUsers = new User();
    localStorage.setItem('users', JSON.stringify(this.users));
  }
  removeUser(id: any): void {
    for (let i = 0; i < this.users.length; i++){
      if (this.users[i].username === id){
        this.users.splice(i, 1);
      }
    }
    localStorage.setItem('users', JSON.stringify(this.users));
  }

  addProject(): any {
    // @ts-ignore
    this.projects.push(this.newProject);
    this.newProject = new Project();
    localStorage.setItem('projects', JSON.stringify(this.projects));
  }
  removeProject(id: any): void {
    for (let i = 0; i < this.projects.length; i++){
      if (this.projects[i].projectName === id){
        this.projects.splice(i, 1);
      }
    }
    localStorage.setItem('projects', JSON.stringify(this.projects));
    if (this.projects.length < 1){
      localStorage.removeItem('lists');
      localStorage.removeItem('projects');
    }
  }

  addList(): any {
    // @ts-ignore
    this.lists.push(this.newList);
    this.newList = new List();
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }
  removeList(a: any): void {
    for (let i = 0; i < this.lists.length; i++){
      if (this.lists[i].listName === a){
        this.lists.splice(i, 1);
      }
    }
    localStorage.setItem('lists', JSON.stringify(this.lists));
  }


}
