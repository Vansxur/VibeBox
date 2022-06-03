import { Component, OnInit } from '@angular/core';
import Typewriter from 't-writer.js';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})

export class HomeComponent implements OnInit {

  constructor() { }

  ngOnInit(): any {
    const txtAnim = document.querySelector('h4');
    const writer = new Typewriter(txtAnim, {
      loop: true,
      typeSpeed: 80,
      deleteSpeed: 80,
      typeColor: 'white'
    });
    writer
      .type('Discovr ')
      .rest(500)
      .changeOps({ deleteSpeed: 80 })
      .remove(4)
      .type('over')
      .rest(500)
      .type(' our')
      .rest(500)
      .changeOps({ deleteSpeed: 20 })
      .remove(21)
      .type('Press on button to start')
      .rest(500)
      .clear()
      .start();
  }
}
