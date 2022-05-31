import {Component, ViewChild, OnInit, HostListener, Input} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';



@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  private red: any = [
    '#961a7f'
  ];
  private blue: any = [
    '#177a7a'
  ];
  private green: any = [
    '#197719'
  ];
  private orange: any = [
    '#e7560d'
  ];
  public color: string | null | undefined;

  constructor(private observer: BreakpointObserver, private router: Router) { }
  ngOnInit(){
  }

  ngAfterViewInit() {
    this.router.events
      .pipe(filter((rs): rs is NavigationEnd => rs instanceof NavigationEnd))
      .subscribe(event => {
        if (
          event.id === 1 &&
          event.url === event.urlAfterRedirects
        ){
          // Your code here for when the page is refreshd
          this.color = localStorage.getItem('theme-color');
          console.log(this.color);
        }
      });
    this.observer
      .observe(['(max-width: 800px)'])
      .pipe(delay(1), untilDestroyed(this))
      .subscribe((res) => {
        if (res.matches) {
          this.sidenav.mode = 'over';
          this.sidenav.close();
        } else {
          this.sidenav.mode = 'side';
          this.sidenav.open();
        }
      });

    this.router.events
      .pipe(
        untilDestroyed(this),
        filter((e) => e instanceof NavigationEnd)
      )
      .subscribe(() => {
        if (this.sidenav.mode === 'over') {
          this.sidenav.close();
        }
      });

  }
  onRed() {
    this.color = this.red[Math.floor(Math.random() * this.red.length)];
    localStorage.setItem('theme-color', JSON.stringify(this.red));

  }
  onBlue() {
    this.color = this.blue[Math.floor(Math.random() * this.blue.length)];
    localStorage.setItem('theme-color', JSON.stringify(this.blue));

  }
  onGreen() {
    this.color = this.green[Math.floor(Math.random() * this.green.length)];
    localStorage.setItem('theme-color', JSON.stringify(this.green));

  }
  onOrange() {
    this.color = this.orange[Math.floor(Math.random() * this.orange.length)];
    localStorage.setItem('theme-color', JSON.stringify(this.orange));
  }

}
