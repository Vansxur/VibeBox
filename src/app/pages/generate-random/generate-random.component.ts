import { Component, OnInit } from '@angular/core';


class Man {
  name!: string;
}
class Woman {
  name!: string;
}
class Gamer {
  name!: string;
}

let allColors!: any;
let niceColors!: any;
let colorsThree!: any;
let hex!: any;
let hex1!: any;
let hex3!: any;

@Component({
  selector: 'app-generate-random',
  templateUrl: './generate-random.component.html',
  styleUrls: ['./generate-random.component.scss']
})

export class GenerateRandomComponent implements OnInit {
  man: Man[] = [
    {name: 'Adam'},
    {name: 'Agent 007'},
    {name: 'Albatros'},
    {name: 'Alex'},
    {name: 'Alpha'},
    {name: 'Anonymous'},
    {name: 'Apache'},
    {name: 'Argan'},
    {name: 'Arve'},
    {name: 'Aslan'},
    {name: 'Atlas'},
    {name: 'Avatar'},
  ];
  woman: Woman[] = [
    {name: 'ADN'},
    {name: 'Alfa'},
    {name: 'Albatros'},
    {name: 'Aliénor'},
    {name: 'Alpha'},
    {name: 'Alinéa'},
    {name: 'Alix'},
    {name: 'Argan'},
    {name: 'Ayla'},
    {name: 'Beatrix'},
    {name: 'Bellinda'},
    {name: 'BettyBoop'},
  ];
  gamer: Gamer[] = [
    {name: 'AlCapone'},
    {name: 'AnTiiCZzZ'},
    {name: 'AudaciouS'},
    {name: 'CaSHFloW'},
    {name: 'ClowN'},
    {name: 'iDeaan'},
    {name: 'InFINITy'},
    {name: 'MoSTWanTeD'},
    {name: 'NeFaRiouZ'},
    {name: 'OwnZ'},
    {name: 'NuvkleZ'},
    {name: 'chRoNiCz'},
  ];
  constructor() { }

  ngOnInit(): void {
  }

  gen_man_pseudo(): any {
    const randomPseudo = this.man[Math.floor(Math.random() * this.man.length)];
    // @ts-ignore
    document.getElementById('man-pseudo-affichage').value = JSON.stringify(randomPseudo.name);
  }


  gen_woman_pseudo(): any {
    const randomPseudo = this.woman[Math.floor(Math.random() * this.woman.length)];
    // @ts-ignore
    document.getElementById('woman-pseudo-affichage').value = JSON.stringify(randomPseudo.name);
  }

  gen_gamer_pseudo(): any {
    const randomPseudo = this.gamer[Math.floor(Math.random() * this.gamer.length)];
    // @ts-ignore
    document.getElementById('gamer-pseudo-affichage').value = JSON.stringify(randomPseudo.name);
  }

  generateAllColor(): void {
    hex = '#' + Math.floor(Math.random() * 16777215).toString(16);
    allColors.style.backgroundColor = hex;
    allColors.style.color = 'black';
  }

  allColor(): void{
    allColors = document.getElementById('all-colors');
    allColors.addEventListener('click', this.generateAllColor());
    allColors.innerHTML = hex;
  }


  generateNiceColor(): void {
    hex1 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    niceColors.style.backgroundColor = hex1;
    niceColors.style.color = 'black';
  }

  niceColors(): void{
    niceColors = document.getElementById('nice-colors');
    niceColors.addEventListener('click', this.generateNiceColor());
    niceColors.innerHTML = hex1;
  }


  generateThreeColor(): void {
    hex3 = '#' + Math.floor(Math.random() * 16777215).toString(16);
    colorsThree.style.backgroundColor = hex3;
    colorsThree.style.color = 'black';
  }

  colorsThree(): void{
    colorsThree = document.getElementById('colors3');
    colorsThree.addEventListener('click', this.generateThreeColor());
    colorsThree.innerHTML = hex3;
  }
}
