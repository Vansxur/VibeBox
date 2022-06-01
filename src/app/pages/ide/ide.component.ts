import {AfterViewInit, Component, OnInit} from '@angular/core';
import * as ace from 'ace-builds';



@Component({
  selector: 'app-ide',
  templateUrl: './ide.component.html',
  styleUrls: ['./ide.component.scss']
})
export class IdeComponent implements OnInit, AfterViewInit {
  constructor() { }


  // 4️⃣
  ngAfterViewInit(): any {

    const executeCodeBtn: any = document.querySelector('.editor__run');
    const resetCodeBtn: any = document.querySelector('.editor__reset');
    let consoleExec: any = document.getElementById('console');

// Setup Ace
    const codeEditor = ace.edit('editorCode');
    const defaultCode = 'console.log("Hello World!");';

    const editorLib = {
      init(): any {
        // Configure Ace

        // Theme
        codeEditor.setTheme('ace/theme/dreamweaver');

        // Set language
        codeEditor.session.setMode('ace/mode/javascript');

        // Set Options
        codeEditor.setOptions({
          fontFamily: 'Inconsolata',
          fontSize: '12pt',
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
        });

        // Set Default Code
        codeEditor.setValue(defaultCode);
      }
    };
// Events
    executeCodeBtn.addEventListener('click', () => {
      // Get input from the code editor
      const userCode = codeEditor.getValue();
      // Run the user code
      try {
        new Function(userCode)();
      } catch (err) {
        console.error(err);
      }
    });
    resetCodeBtn.addEventListener('click', () => {
      // Clear ace editor
      codeEditor.setValue(defaultCode);
    });
    // editorLib.init();
  }

  ngOnInit(): void {
  }

}
