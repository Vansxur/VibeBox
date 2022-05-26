import { Component, OnInit } from '@angular/core';
import {Router} from '@angular/router';
import {NgForm} from '@angular/forms';


class Notes{
  note!: string;
}

@Component({
  selector: 'app-note',
  templateUrl: './note.component.html',
  styleUrls: ['./note.component.scss']
})
export class NoteComponent implements OnInit {

  notes: Notes[] = [];
  newNotes: Notes = new Notes();

  constructor(public router: Router) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('notes') != null){
      // @ts-ignore
      this.notes = JSON.parse(localStorage.getItem('notes'));
    }
  }


  showNotes(): void {
    this.router.navigateByUrl('show-notes');
  }

  addNote(): void {
    // @ts-ignore
    this.notes.push(this.newNotes);
    this.newNotes = new Notes();
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }
  saveData(registerForm: NgForm): void {
    console.log('valeur : ', JSON.stringify(registerForm.value));
  }


}
