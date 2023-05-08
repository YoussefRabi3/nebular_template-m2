import {ChangeDetectionStrategy, Component, Inject, NgModule, OnInit} from '@angular/core';
import {NB_WINDOW, NbMenuItem, NbMenuService, NbSidebarService} from "@nebular/theme";
import { filter, map } from 'rxjs/operators';


@Component({
  selector: 'app-template',
  templateUrl: './template.component.html',
  styleUrls: ['./template.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,

})
export class TemplateComponent implements OnInit {
  itemsRightNav = [
    { title: 'Profile' },
    { title: 'Logout' },
  ];
  items: NbMenuItem[] = [
    {
      title: 'Regles à respecter',
      icon: 'home-outline',
      link:'regle-respecter'
    },
    {
      title: 'Traitement RPA',
      expanded: true,
      icon: 'file-text-outline',
      children: [
        {
          title: 'Déposer un fichier',
          link:'text'
        },
        {
          title: 'Saisie Manuelle ',
          link:'deposer'
        },
        {
          title: 'Panier',
          link:'user'
        },

      ],
    },
    // {
    //   title: 'Historique de demandes',
    //   icon: { icon: 'clock-outline', pack: 'eva' },
    //   link:'historique'
    // },
    {
      title: 'Historique de controles',
      icon: { icon: 'calendar', pack: 'eva' },
      link:'historique'
    },
    /*{
      title: 'Gestion  Utilisateurs',
      icon: { icon: 'people', pack: 'eva' },
      link:'user'
    }*/
    /*{
      title: 'Pilotage',
      icon: 'trending-up-outline',
      link:'pilotage'
    },*/
    {
      title: 'Gestion de referentiel',
      icon: 'book-open-outline',
    },
    {
      title: 'Gestion d\'utilisateur',
      icon: 'people-outline',
      link: 'utilisateur'
    },
    {
      title: 'Audit & Pilotage',
      icon: 'home-outline',
      link:'processus'
    },

    // {
    //   title: 'progress-bar',
    //   icon: 'home-outline',
    //   link:'progress-bar'
    // },
   /* {
      title: 'Déposer un fichier',
      icon: 'file-add-outline',
      link:'deposer'
    },*/
    /*{
      title: 'tester file',
      icon: 'file-add-outline',
      link:'text'
    }*/
  ];
  constructor(private service:NbSidebarService,
              private nbMenuService: NbMenuService,
              @Inject(NB_WINDOW) private window:any) { }

  ngOnInit(): void {
    this.nbMenuService.onItemClick()
      .pipe(
        filter(({ tag }) => tag === 'my-context-menu'),
        map(({ item: { title } }) => title),
      )
      .subscribe(title => this.window.alert(`${title} was clicked!`));
  }

  toggleSidebar() {
    this.service.toggle(true)
    return false;
  }
}
