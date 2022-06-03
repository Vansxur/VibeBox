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
    const executeCodeBtnHtml: any = document.querySelector('.editor__runHtml');
    const resetCodeBtn: any = document.querySelector('.editor__reset');
    const resetCodeBtnHtml: any = document.querySelector('.editor__resetHtml');
    const consoleExec: any = document.getElementById('console');
    const consoleExecHtml: any = document.getElementById('consoleHtml');

// Setup Ace
    const codeEditor = ace.edit('editorCode');
    const defaultCode = 'console.log("Hello World!");';
    const defaultCodeHtml = '<h1>test</h1>';
    const codeEditorHtml = ace.edit('editorCodeHtml');

    const editorLib = {
      init(): any {
        // Configure Ace

        // Theme
        codeEditor.setTheme('ace/theme/dreamweaver');
        codeEditorHtml.setTheme('ace/theme/tomorrow_night_eighties');

        // Set language
        codeEditor.session.setMode('ace/mode/javascript');
        codeEditorHtml.session.setMode('ace/mode/html');

        // Set Options
        codeEditor.setOptions({
          fontFamily: 'Inconsolata',
          fontSize: '12pt',
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
        });
        codeEditorHtml.setOptions({
          fontFamily: 'Inconsolata',
          fontSize: '12pt',
          enableBasicAutocompletion: true,
          enableLiveAutocompletion: true,
        });

        // Set Default Code
        codeEditor.setValue(defaultCode);
        codeEditorHtml.setValue(defaultCodeHtml);
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
      const logBak: any = console.log;
      const logMessages: any = [];

      // tslint:disable-next-line:only-arrow-functions typedef
      console.log = function(value) {
        logMessages.push(value);
        logBak.call(console, value);
        consoleExec.innerHTML = value;
      };
    });
    resetCodeBtn.addEventListener('click', () => {
      // Clear ace editor
      codeEditor.setValue(defaultCode);
      consoleExec.innerHTML = '';
    });

    executeCodeBtnHtml.addEventListener('click', () => {
      // Get input from the code editor
      const userCodeHtml = codeEditorHtml.getValue();
      // Run the user code
      try {
        new Function(userCodeHtml)();
      } catch (err) {
        console.error(err);
      }
      const logBak: any = console.log;
      const logMessages: any = [];

      // tslint:disable-next-line:only-arrow-functions typedef
      console.log = function(value1) {
        logMessages.push(value1);
        logBak.call(console, value1);
        consoleExecHtml.innerHTML = value1;
      };
    });
    resetCodeBtnHtml.addEventListener('click', () => {
      // Clear ace editor
      codeEditorHtml.setValue(defaultCodeHtml);
      consoleExecHtml.innerHTML = '';
    });
    // editorLib.init();
  }

  ngOnInit(): void {
  }
}
