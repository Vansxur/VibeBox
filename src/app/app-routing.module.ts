import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { NotFoundComponent } from './pages/not-found/not-found.component';
import {GenerateRandomComponent} from './pages/generate-random/generate-random.component';
import {CalculatorComponent} from './pages/calculator/calculator.component';
import {NoteComponent} from './pages/note/note.component';
import {DisplayNoteComponent} from './pages/display-note/display-note.component';
import {MeteoComponent} from './pages/meteo/meteo.component';
import {IdeComponent} from './pages/ide/ide.component';
import {AgendaComponent} from './pages/agenda/agenda.component';
import {WorkGestComponent} from './pages/work-gest/work-gest.component';
import {AddgroupeComponent} from './pages/addgroupe/addgroupe.component';
import {ReseauxComponent} from './pages/reseaux/reseaux.component';
import {HomeComponent} from './pages/home/home.component';
import {PasswordComponent} from './pages/password/password.component';


const routes: Routes = [
  {
    path: '',
    // pathMatch: 'full',
    // redirectTo: '/',
    component: HomeComponent,
  },
  {
    path: 'random-generator',
    component: GenerateRandomComponent,
  },
  {
    path: 'calculator',
    component: CalculatorComponent,
  },
  {
    path: 'note',
    component: NoteComponent,
  },
  {
    path: 'show-notes',
    component: DisplayNoteComponent,
  },
  {
    path: 'weather',
    component: MeteoComponent,
  },
  {
    path: 'ide',
    component: IdeComponent,
  },
  {
    path: 'agenda',
    component: AgendaComponent,
  },
  {
    path: 'Vb_Work',
    component: AddgroupeComponent,
  },
  {
    path: 'Work',
    component: WorkGestComponent,
  },
  {
    path: 'Masque',
    component: ReseauxComponent,
  },
  {
    path: 'Password',
    component: PasswordComponent,
  },
  {
    path: '**',
    component: NotFoundComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
