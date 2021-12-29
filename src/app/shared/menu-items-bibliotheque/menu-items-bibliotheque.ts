import {Injectable} from '@angular/core';

export interface BadgeItem {
  type: string;
  value: string;
}

export interface ChildrenItems {
  state: string;
  target?: boolean;
  name: string;
  type?: string;
  children?: ChildrenItems[];
}

export interface MainMenuItems {
  state: string;
  short_label?: string;
  main_state?: string;
  target?: boolean;
  name: string;
  type: string;
  icon: string;
  badge?: BadgeItem[];
  children?: ChildrenItems[];
}

export interface Menu {
  label: string;
  main: MainMenuItems[];
}

const MENUITEMS = [
  {
    label: 'Gestion Bibliothèque',
    main: [
      {
        state: 'gestion-bibliotheque',
        short_label: 'GB',
        name: 'Gestion Bibliothèque',
        type: 'sub',
        icon: 'ti-package',
        children: [
          {
            state: 'abonnements',
            name: 'Abonnements'
          },
          {
            state: 'categories',
            name: 'Categories'
          },
          {
            state: 'abonnements-effectues',
            name: 'Abonnement-effecutes'
          },
          {
            state: 'emprunts',
            name: 'Emprunts'
          },
          {
            state: 'etat-livres',
            name: 'Etat-Livres'
          },
          {
            state: 'lecteurs',
            name: 'Lecteurs'
          },
          {
            state: 'livres',
            name: 'Livres'
          },
          {
            state: 'rayons',
            name: 'Rayons'
          }
        ]
      }
    ]
  }
];

@Injectable()
export class MenuItemsBibliotheque {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
