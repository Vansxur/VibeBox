import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reseaux',
  templateUrl: './reseaux.component.html',
  styleUrls: ['./reseaux.component.scss']
})


export class ReseauxComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

  check(): void {

    const errorAddress = document.querySelector('.erroraddress') as HTMLElement;
    const errorMask = document.querySelector('.errormask') as HTMLElement;
    const result = document.querySelector('.result') as HTMLElement;

    errorAddress.style.display = 'none';
    errorMask.style.display = 'none';
    result.style.display = 'none';

    // @ts-ignore
    const inputAddress = document.getElementById('address').value as HTMLInputElement;
    var inputAddressStr = inputAddress.toString();

    // @ts-ignore
    const inputMask = document.getElementById('mask').value as HTMLInputElement;
    var inputMaskStr = inputMask.toString();

    const regexAddress = /^(([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])\.){3}([0-9]|[1-9][0-9]|1[0-9]{2}|2[0-4][0-9]|25[0-5])$/gi;
    const regexMask = /^([0-9]|[1-9]){2}$/;

    var maskInt: number = +inputMaskStr;

    if (!(regexAddress.test(inputAddressStr))) {
      errorAddress.style.display = 'block';
    } else {

      if ( maskInt < 8 || maskInt > 32 ) {
        errorMask.style.display = 'block';
      } else {


        result.style.display = 'block';


        let block1 = "";
        let block2 = "";
        let block3 = "";
        let block4 = "";

        let counter = 0;

        // @ts-ignore
        for (let char of inputAddressStr) {
          if (char == ".") {
            counter++;
          } else {

            if (counter == 0) {
              block1 += char;
            }

            if (counter == 1) {
              block2 += char;
            }

            if (counter == 2) {
              block3 += char;
            }

            if (counter == 3) {
              block4 += char;
            }

          }
        }

        console.log(block1);
        console.log(block2);
        console.log(block3);
        console.log(block4);


        // @ts-ignore
        document.getElementById("subnet").textContent="" + block1 + "." + block2 + "." + block3 + "." + "0";
        // @ts-ignore
        document.getElementById("nofaddress").textContent="" + "256";
        // @ts-ignore
        document.getElementById("firstaddress").textContent="" + block1 + "." + block2 + "." + block3 + "." + "1";
        // @ts-ignore
        document.getElementById("lastaddress").textContent="" + block1 + "." + block2 + "." + block3 + "." + "255";
      }
    }
  }


}
