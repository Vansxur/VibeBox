import { Component, OnInit } from '@angular/core';
import {NgForm} from '@angular/forms';
import {Router} from "@angular/router";

class Notes{
  note!: any;
}

@Component({
  selector: 'app-display-note',
  templateUrl: './display-note.component.html',
  styleUrls: ['./display-note.component.scss']
})

export class DisplayNoteComponent implements OnInit {

  notes: Notes[] = [];
  newNotes: Notes = new Notes();


  constructor(public router: Router) { }

  ngOnInit(): void {
    if (localStorage.getItem('notes') != null){
      // @ts-ignore
      this.notes = JSON.parse(localStorage.getItem('notes'));
    }
  }

  saveData(registerForm: NgForm): void {
    console.log('valeur : ', JSON.stringify(registerForm.value));
  }

  addNote(): any {
    // @ts-ignore
    this.notes.push(this.newNotes);
    localStorage.setItem('notes', JSON.stringify(this.notes));
  }

  removeAllNotes(): void {
    localStorage.removeItem('notes');
    location.reload();
  }

  removeNote(id: any): void {
    for (let i = 0; i < this.notes.length; i++){
      if (this.notes[i].note === id){
        this.notes.splice(i, 1);
      }
    }
    localStorage.setItem('notes', JSON.stringify(this.notes));
    if (this.notes.length < 1){
      localStorage.clear();
    }
  }

  newNote(): void {
    this.router.navigateByUrl('note');
  }
}
