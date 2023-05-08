import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {AuthentificationComponent} from "./authentification/authentification.component";
import {ApplicationComponent} from "./application/application.component";
import {DemandeRapportPPComponent} from "./demande-rapport-pp/demande-rapport-pp.component";
import {ProcessusComponent} from "./processus/processus.component";
import {ExcelTableComponent} from "./excel-table/excel-table.component";
import {HistoriqueComponent} from "./historique/historique.component";
import {UserComponent} from "./user/user.component";
import {UtilisateurComponent} from "./utilisateur/utilisateur.component";
import {ProgressBarComponent} from "./progress-bar/progress-bar.component";
import {DeposerComponent} from "./deposer/deposer.component";
import {TextComponent} from "./text/text.component";
import {RegleRespecterComponent} from "./regle-respecter/regle-respecter.component";

const routes: Routes = [
  { path: '', redirectTo: 'auth', pathMatch: 'full' },
  {
    path: 'auth', component: AuthentificationComponent,
    children: [
      {path: '', component: AuthentificationComponent}
    ]
  },
  { path: '', redirectTo: 'application', pathMatch: 'full' },
  {
    path: 'application', component: ApplicationComponent,
    children: [
      {path: 'saisieDemande', component: DemandeRapportPPComponent},
      {path: 'processus', component: ProcessusComponent},
      {path: 'excelTable', component: ExcelTableComponent},
      {path: 'historique', component: HistoriqueComponent},
      {path: 'user',component:UserComponent },
      {path: 'utilisateur',component:UtilisateurComponent },
      {path: 'progress-bar',component:ProgressBarComponent },
      {path: 'deposer',component:DeposerComponent },
      {path: 'text',component:TextComponent },
      {path:'regle-respecter' ,component:RegleRespecterComponent },

    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
