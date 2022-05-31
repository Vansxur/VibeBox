import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';
import { MatDividerModule } from '@angular/material/divider';
import { HomeComponent } from './pages/home/home.component';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import { GenerateRandomComponent } from './pages/generate-random/generate-random.component';
import { CalculatorComponent } from './pages/calculator/calculator.component';
import { NoteComponent } from './pages/note/note.component';
import { DisplayNoteComponent } from './pages/display-note/display-note.component';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { MeteoComponent } from './pages/meteo/meteo.component';
import { HttpClientModule } from '@angular/common/http';
import { IdeComponent } from './pages/ide/ide.component';
import { AgendaComponent } from './pages/agenda/agenda.component';
import {
  RecurrenceEditorModule,
  ScheduleModule,
  DayService,
  WeekService,
  MonthService,
  MonthAgendaService,
  DragAndDropService, ResizeService
} from '@syncfusion/ej2-angular-schedule';
import { AddgroupeComponent } from './pages/addgroupe/addgroupe.component';
import {WorkGestComponent} from './pages/work-gest/work-gest.component';
import { ReseauxComponent } from './pages/reseaux/reseaux.component';
import { PasswordComponent } from './pages/password/password.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NotFoundComponent,
    GenerateRandomComponent,
    CalculatorComponent,
    NoteComponent,
    DisplayNoteComponent,
    MeteoComponent,
    IdeComponent,
    AgendaComponent,
    AddgroupeComponent,
    WorkGestComponent,
    ReseauxComponent,
    PasswordComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    ScheduleModule,
    RecurrenceEditorModule,
  ],
  providers: [DayService, WeekService, MonthService, MonthAgendaService, DragAndDropService, ResizeService],
  bootstrap: [AppComponent],
})
export class AppModule {}
