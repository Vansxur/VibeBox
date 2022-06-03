import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-password',
  templateUrl: './password.component.html',
  styleUrls: ['./password.component.scss']
})
export class PasswordComponent implements OnInit {

  constructor() {
  }

  ngOnInit(): void {
    const recent = document.querySelector('.recentpassword') as HTMLElement;
    recent.style.display = "block";
    // @ts-ignore
    document.getElementById("passwordrecent").textContent="" + localStorage.getItem('password');
  }

  check(): void {
    const recent = document.querySelector('.recentpassword') as HTMLElement;
    recent.style.display = "none";

    const error = document.querySelector('.error') as HTMLElement;
    error.style.display = "none";

    const result = document.querySelector('.result') as HTMLElement;
    result.style.display = "none";

    // @ts-ignore
    const inputPassword = document.getElementById('password').value as HTMLInputElement;
    let inputPasswordStr = inputPassword.toString();

    if ( inputPasswordStr == "" ) {
      error.style.display = "block";
    } else {
      result.style.display = "block";
      // @ts-ignore
      document.getElementById("passwordresult").textContent="" + btoa(inputPasswordStr);
      localStorage.setItem('password', btoa(inputPasswordStr));
      // @ts-ignore
      document.getElementById("passwordrecent").textContent="" + localStorage.getItem('password');

    }
  }

  generate(): void {

    const recent = document.querySelector('.recentpassword') as HTMLElement;
    recent.style.display = "none";

    const result = document.querySelector('.result') as HTMLElement;
    result.style.display = "none";

    const error = document.querySelector('.error') as HTMLElement;
    error.style.display = "none";

    var randomstring = Math.random().toString(36).slice(-10);

    result.style.display = "block";
    // @ts-ignore
    document.getElementById("passwordresult").textContent="" + randomstring;
    localStorage.setItem('password', randomstring);
    // @ts-ignore
    document.getElementById("passwordrecent").textContent="" + localStorage.getItem('password');

  }


  copyInputMessage(): void {
    // @ts-ignore
    const texttocopy = document.getElementById("passwordresult").innerHTML ;
    let texttocopyStr = texttocopy.toString();
    if ( texttocopyStr != null ) {
      navigator.clipboard.writeText(texttocopyStr).then().catch(e => console.error(e));
    }
  }


}
