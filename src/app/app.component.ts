import {Component, ViewChild, OnInit, HostListener, Input, AfterViewInit} from '@angular/core';
import { BreakpointObserver } from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';
import { delay, filter } from 'rxjs/operators';
import { NavigationEnd, Router } from '@angular/router';
import { UntilDestroy, untilDestroyed } from '@ngneat/until-destroy';
import loader from '@angular-devkit/build-angular/src/webpack/plugins/single-test-transform';



@UntilDestroy()
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})

export class AppComponent implements AfterViewInit, OnInit{
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  private red: any =
    '#961a7f'
  ;
  private blue: any =
    '#177a7a'
  ;
  private green: any =
    '#197719'
  ;
  private orange: any =
    '#e7560d'
  ;
  public color: any = localStorage.getItem('theme-color');

  constructor(private observer: BreakpointObserver, private router: Router) { }
  ngOnInit(){
    this.color = JSON.parse(this.color);
    console.log(this.color);
  }

  ngAfterViewInit() {
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
    this.color = this.red;
    localStorage.setItem('theme-color', JSON.stringify(this.red));

  }
  onBlue() {
    this.color = this.blue;
    localStorage.setItem('theme-color', JSON.stringify(this.blue));

  }
  onGreen() {
    this.color = this.green;
    localStorage.setItem('theme-color', JSON.stringify(this.green));

  }
  onOrange() {
    this.color = this.orange;
    localStorage.setItem('theme-color', JSON.stringify(this.orange));
  }



}
