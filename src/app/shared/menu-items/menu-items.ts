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
    label: 'Navigation',
    main: [
      {
        state: 'dashboard',
        short_label: 'D',
        name: 'Dashboard',
        type: 'sub',
        icon: 'ti-home',
        children: [
          {
            state: 'default',
            name: 'Default'
          },
          {
            state: 'ecommerce',
            name: 'Ecommerce'
          },
          {
            state: 'crm',
            name: 'CRM'
          },
          {
            state: 'analytics',
            name: 'Analytics',
            badge: [
              {
                type: 'info',
                value: 'NEW'
              }
            ]
          },
          {
            state: 'project',
            name: 'Project'
          }
        ]
      },
      {
        state: 'widget',
        short_label: 'W',
        name: 'Widget',
        type: 'sub',
        icon: 'ti-view-grid',
        badge: [
          {
            type: 'danger',
            value: '100+'
          }
        ],
        children: [
          {
            state: 'static',
            name: 'Widget Statistic'
          },
          {
            state: 'data',
            name: 'Widget Data'
          },
          {
            state: 'chart',
            name: 'Widget Chart'
          },
          {
            state: 'advanced',
            name: 'Widget Chart Advcance'
          }
        ]
      }
    ],
  },
  {
    label: 'UI Element',
    main: [
      {
        state: 'basic',
        short_label: 'B',
        name: 'Basic Components',
        type: 'sub',
        icon: 'ti-layout-grid2-alt',
        children: [
          {
            state: 'alert',
            name: 'Alert'
          },
          {
            state: 'breadcrumb',
            name: 'Breadcrumbs'
          },
          {
            state: 'button',
            name: 'Button'
          },
          {
            state: 'accordion',
            name: 'Accordion'
          },
          {
            state: 'generic-class',
            name: 'Generic Class'
          },
          {
            state: 'tabs',
            name: 'Tabs'
          },
          {
            state: 'label-badge',
            name: 'Label Badge'
          },
          {
            state: 'typography',
            name: 'Typography'
          },
          {
            state: 'other',
            name: 'Other'
          },
        ]
      },
      {
        state: 'advance',
        short_label: 'A',
        name: 'Advance Components',
        type: 'sub',
        icon: 'ti-crown',
        children: [
          {
            state: 'modal',
            name: 'Modal'
          },
          {
            state: 'notifications',
            name: 'Notifications'
          },
          {
            state: 'notify',
            name: 'PNOTIFY',
            badge: [
              {
                type: 'info',
                value: 'New'
              }
            ]
          },
        ]
      },
      {
        state: 'animations',
        short_label: 'A',
        name: 'Animations',
        type: 'link',
        icon: 'ti-reload rotate-refresh'
      }
    ]
  },
  {
    label: 'Forms',
    main: [
      {
        state: 'forms',
        short_label: 'F',
        name: 'Form Components',
        type: 'sub',
        icon: 'ti-layers',
        children: [
          {
            state: 'basic-elements',
            name: 'Form Components'
          }, {
            state: 'add-on',
            name: 'Form-Elements-Add-On'
          }, {
            state: 'advance-elements',
            name: 'Form-Elements-Advance'
          }, {
            state: 'form-validation',
            name: 'Form Validation'
          }
        ]
      },
      {
        state: 'picker',
        short_label: 'P',
        main_state: 'forms',
        name: 'Form Picker',
        type: 'link',
        icon: 'ti-pencil-alt',
        badge: [
          {
            type: 'warning',
            value: 'New'
          }
        ]
      },
      {
        state: 'select',
        short_label: 'S',
        main_state: 'forms',
        name: 'Form Select',
        type: 'link',
        icon: 'ti-shortcode'
      },
      {
        state: 'masking',
        short_label: 'M',
        main_state: 'forms',
        name: 'Form Masking',
        type: 'link',
        icon: 'ti-write'
      }
    ]
  },
  {
    label: 'Tables',
    main: [
      {
        state: 'bootstrap-table',
        short_label: 'B',
        name: 'Bootstrap Table',
        type: 'sub',
        icon: 'ti-receipt',
        children: [
          {
            state: 'basic',
            name: 'Basic Table'
          }, {
            state: 'sizing',
            name: 'Sizing Table'
          }, {
            state: 'border',
            name: 'Border Table'
          }, {
            state: 'styling',
            name: 'Styling Table'
          }
        ]
      },
      {
        state: 'data-table',
        short_label: 'D',
        name: 'Data Table',
        type: 'sub',
        icon: 'ti-widgetized',
        children: [
          {
            state: 'basic',
            name: 'Basic Table'
          }, {
            state: 'editable',
            name: 'Editable'
          }, {
            state: 'row-details',
            name: 'Row Details Table'
          }, {
            state: 'paging',
            name: 'Paging Table'
          }, {
            state: 'selection',
            name: 'Selection Table'
          }, {
            state: 'other',
            name: 'Other Table'
          }
        ]
      }
    ]
  },
  {
    label: 'Chart And Map',
    main: [
      {
        state: 'charts',
        short_label: 'C',
        name: 'Charts',
        type: 'sub',
        icon: 'ti-bar-chart-alt',
        children: [
          {
            state: 'google',
            name: 'Google'
          }, {
            state: 'chart-js',
            name: 'ChartJS'
          }, {
            state: 'knob',
            name: 'Knob'
          }, {
            state: 'echart',
            name: 'E-Chart'
          }, {
            state: 'peity',
            name: 'Peity'
          }, {
            state: 'radial',
            name: 'Radial'
          }, {
            state: 'sparklines',
            name: 'Sparklines'
          }, {
            state: 'c3-js',
            name: 'C3 JS'
          }
        ]
      },
      {
        state: 'map',
        short_label: 'M',
        name: 'Maps',
        type: 'sub',
        icon: 'ti-map-alt',
        children: [
          {
            state: 'google',
            name: 'Google'
          }, {
            state: 'vector',
            name: 'Vector'
          }
        ]
      },
      {
        state: 'landing',
        short_label: 'L',
        external: 'http://bit.ly/2CWWUnN',
        name: 'Landing Page',
        type: 'external',
        icon: 'ti-mobile',
        target: true
      }
    ]
  },
  {
    label: 'Pages',
    main: [
      {
        state: 'auth',
        short_label: 'A',
        name: 'Authentication',
        type: 'sub',
        icon: 'ti-unlock',
        children: [
          {
            state: 'login',
            type: 'sub',
            name: 'Login Pages',
            children: [
              {
                state: 'simple',
                name: 'Simple',
                target: true
              }, {
                state: 'header-footer',
                name: 'Header & Footer',
                target: true
              }, {
                state: 'social',
                name: 'Social Icon',
                target: true
              }, {
                state: 'social-header-footer',
                name: 'Social Header & Footer',
                target: true
              }
            ]
          }, {
            state: 'registration',
            type: 'sub',
            name: 'Registration Pages',
            children: [
              {
                state: 'simple',
                name: 'Simple',
                target: true
              }, {
                state: 'header-footer',
                name: 'Header & Footer',
                target: true
              }, {
                state: 'social',
                name: 'Social',
                target: true
              }, {
                state: 'social-header-footer',
                name: 'Social Header & Footer',
                target: true
              }
            ]
          },
          {
            state: 'forgot',
            name: 'Forgot Password',
            target: true
          },
          {
            state: 'lock-screen',
            name: 'Lock Screen',
            target: true
          },
        ]
      },
      {
        state: 'maintenance',
        short_label: 'A',
        name: 'Maintenance',
        type: 'sub',
        icon: 'ti-settings',
        children: [
          {
            state: 'error',
            name: 'Error'
          },
          {
            state: 'coming-soon',
            name: 'Coming Soon'
          },
          {
            state: 'offline-ui',
            name: 'Offline UI',
            target: true
          }
        ]
      },
      {
        state: 'user',
        short_label: 'U',
        name: 'User Profile',
        type: 'sub',
        icon: 'ti-user',
        children: [
          {
            state: 'profile',
            name: 'User Profile'
          }, {
            state: 'card',
            name: 'User Card'
          }
        ]
      }
    ]
  },
  {
    label: 'App',
    main: [
      {
        state: 'crm-contact',
        short_label: 'C',
        name: 'CRM Contact',
        type: 'link',
        icon: 'ti-layout-list-thumb'
      },
      {
        state: 'task',
        short_label: 'T',
        name: 'Task',
        type: 'sub',
        icon: 'ti-check-box',
        children: [
          {
            state: 'list',
            name: 'Task List'
          }, {
            state: 'board',
            name: 'Task Board'
          }, {
            state: 'details',
            name: 'Task Details'
          }, {
            state: 'issue',
            name: 'Issue List'
          }
        ]
      }
    ]
  },
  {
    label: 'Extension',
    main: [
      {
        state: 'editor',
        short_label: 'E',
        name: 'Editor',
        type: 'sub',
        icon: 'ti-pencil-alt',
        children: [
          {
            state: 'froala',
            name: 'Froala WYSIWYG'
          }, {
            state: 'tinymce',
            name: 'Tinymce'
          }
        ]
      },
      {
        state: 'invoice',
        short_label: 'I',
        name: 'Invoice',
        type: 'sub',
        icon: 'ti-layout-media-right',
        children: [
          {
            state: 'basic',
            name: 'Invoice'
          }, {
            state: 'summary',
            name: 'Invoice Summary'
          }, {
            state: 'list',
            name: 'Invoice List'
          }
        ]
      },
      {
        state: 'file-upload',
        short_label: 'F',
        name: 'File Upload',
        type: 'link',
        icon: 'ti-cloud-up'
      },
      {
        state: 'change-log',
        short_label: 'C',
        name: 'Change Log',
        type: 'link',
        icon: 'ti-list',
        badge: [
          {
            type: 'warning',
            value: '1.0'
          }
        ]
      }
    ]
  },
  {
    label: 'Other',
    main: [
      {
        state: '',
        short_label: 'M',
        name: 'Menu Levels',
        type: 'sub',
        icon: 'ti-direction-alt',
        children: [
          {
            state: '',
            name: 'Menu Level 2.1',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.2',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.2.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.2.2',
                target: true
              }
            ]
          }, {
            state: '',
            name: 'Menu Level 2.3',
            target: true
          }, {
            state: '',
            name: 'Menu Level 2.4',
            type: 'sub',
            children: [
              {
                state: '',
                name: 'Menu Level 2.4.1',
                target: true
              },
              {
                state: '',
                name: 'Menu Level 2.4.2',
                target: true
              }
            ]
          }
        ]
      },
      {
        state: 'simple-page',
        short_label: 'S',
        name: 'Simple Page',
        type: 'link',
        icon: 'ti-layout-sidebar-left'
      }
    ]
  }, {
    label: 'Support',
    main: [/*
      {
        state: 'documentation',
        short_label: 'D',
        name: 'Documentation',
        external: 'http://html.codedthemes.com/guru-able/doc-angular-4',
        type: 'external',
        icon: 'ti-file',
        target: true
      },*/
      {
        state: 'submit-issue',
        short_label: 'S',
        external: 'http://bit.ly/2Fo4NIs',
        name: 'Submit Issue',
        type: 'external',
        icon: 'ti-layout-list-post',
        target: true
      }
    ]
  }
];

@Injectable()
export class MenuItems {
  getAll(): Menu[] {
    return MENUITEMS;
  }

  /*add(menu: Menu) {
    MENUITEMS.push(menu);
  }*/
}
