import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import * as ace from 'ace-builds';

let code!: any;
let script!: any;

@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.scss']
})
export class IdeComponent implements OnInit {

  @ViewChild('editor') private editor: ElementRef<HTMLElement> | any;


  constructor() {
  }


  // 4️⃣
  ngAfterViewInit(): void {
    ace.config.set('fontSize', '14px');
    ace.config.set('basePath', 'https://unpkg.com/ace-builds@1.4.12/src-noconflict');

    const aceEditor = ace.edit(this.editor.nativeElement);
    aceEditor.session.setValue('//VibeBox ide');

    aceEditor.setTheme('ace/theme/twilight');
    aceEditor.session.setMode('ace/mode/html');

    aceEditor.on('change', () => {
      console.log(aceEditor.getValue());
    });
  }

  ngOnInit(): void {
  }

  onRun() {
    script = document.getElementById('script');
    try {
      script.appendChild(document.createTextNode(code));
      document.body.appendChild(script);
    } catch (e) {
      script.text = code;
      document.body.appendChild(script);
    }
    console.log(code);
  }
}
