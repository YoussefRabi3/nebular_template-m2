import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {
    NbThemeModule,
    NbLayoutModule,
    NbFormFieldModule,
    NbButtonModule,
    NbInputModule,
    NbSelectModule,
    NbSidebarModule,
    NbMenuModule,
    NbCardModule,
    NbIconModule,
    NbUserModule,
    NbContextMenuModule,
    NbStepperModule, NbProgressBarModule, NbChatModule
} from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { AuthentificationComponent } from './authentification/authentification.component';
import { ApplicationComponent } from './application/application.component';
import { TemplateComponent } from './template/template.component';
import {RouterModule} from "@angular/router";
import { DemandeRapportPPComponent } from './demande-rapport-pp/demande-rapport-pp.component';
import {CdkTableModule} from "@angular/cdk/table";
import { ProcessusComponent } from './processus/processus.component';
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {HttpClientModule} from "@angular/common/http";
import { ExcelTableComponent } from './excel-table/excel-table.component';
import { ObjectValuesPipe } from './object-values.pipe';
import { HistoriqueComponent } from './historique/historique.component';
import { UserComponent } from './user/user.component';
import { UtilisateurComponent } from './utilisateur/utilisateur.component';
import { ProgressBarComponent } from './progress-bar/progress-bar.component';
import { DeposerComponent } from './deposer/deposer.component';
import { TextComponent } from './text/text.component';
import { RegleRespecterComponent } from './regle-respecter/regle-respecter.component';

@NgModule({
  declarations: [
    AppComponent,
    AuthentificationComponent,
    ApplicationComponent,
    TemplateComponent,
    DemandeRapportPPComponent,
    ProcessusComponent,
    ExcelTableComponent,
    ObjectValuesPipe,
    HistoriqueComponent,
    UserComponent,
    UtilisateurComponent,
    ProgressBarComponent,
    DeposerComponent,
    TextComponent,
    RegleRespecterComponent,
  ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        NgbModule,
        BrowserAnimationsModule,
        NbThemeModule.forRoot({name: 'corporate'}),
        NbLayoutModule,
        NbEvaIconsModule,
        NbFormFieldModule,
        NbButtonModule,
        NbInputModule,
        NbSelectModule,
        RouterModule, // RouterModule.forRoot(routes, { useHash: true }), if this is your app.module
        NbLayoutModule,
        NbSidebarModule.forRoot(), // NbSidebarModule.forRoot(), //if this is your app.module
        NbButtonModule,
        NbMenuModule.forRoot(),
        NbCardModule,
        NbIconModule,
        NbUserModule,
        NbContextMenuModule,
        CdkTableModule,
        NbStepperModule,
        ReactiveFormsModule,
        HttpClientModule,
        NbProgressBarModule,
        NbChatModule,
        FormsModule,

    ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
