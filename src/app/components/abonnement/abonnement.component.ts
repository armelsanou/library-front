import { SendNotificationService } from './../../services/send-notication/send-notification.service';
import { SettingService } from './../../services/setting/setting.service';
import { UserService } from './../../services/servicesBibliotheque/user/user.service';
import { AbonnementService } from './../../services/servicesBibliotheque/abonnement/abonnement.service';
import { Component, ElementRef, OnInit, ViewChild, ViewEncapsulation } from '@angular/core';
import {animate, AUTO_STYLE, state, style, transition, trigger} from '@angular/animations';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.scss'],
  encapsulation: ViewEncapsulation.None,
    animations: [
        trigger('mobileMenuTop', [
            state('no-block, void',
                style({
                    overflow: 'hidden',
                    height: '0px',
                })
            ),
            state('yes-block',
                style({
                    height: AUTO_STYLE,
                })
            ),
            transition('no-block <=> yes-block', [
                animate('400ms ease-in-out')
            ])
        ]),
        trigger('fadeInOutTranslate', [
            transition(':enter', [
                style({opacity: 0}),
                animate('400ms ease-in-out', style({opacity: 1}))
            ]),
            transition(':leave', [
                style({transform: 'translate(0)'}),
                animate('400ms ease-in-out', style({opacity: 0}))
            ])
        ])
    ]
})
export class AbonnementComponent implements OnInit {
    navType: string; /* st1, st2(default), st3, st4 */
    themeLayout: string; /* vertical(default) */
    layoutType: string; /* dark, light */
    verticalPlacement: string; /* left(default), right */
    verticalLayout: string; /* wide(default), box */
    deviceType: string; /* desktop(default), tablet, mobile */
    verticalNavType: string; /* expanded(default), offcanvas */
    verticalEffect: string; /* shrink(default), push, overlay */
    vNavigationView: string; /* view1(default) */
    pcodedHeaderPosition: string; /* fixed(default), relative*/
    pcodedSidebarPosition: string; /* fixed(default), absolute*/
    headerTheme: string; /* theme1(default), theme2, theme3, theme4, theme5, theme6 */
    logoheme: string; /* theme1(default), theme2, theme3, theme4, theme5, theme6 */

    innerHeight: string;
    windowWidth: number;

    toggleOn: boolean;

    headerFixedMargin: string;
    navBarTheme: string; /* theme1, themelight1(default)*/
    activeItemTheme: string; /* theme1, theme2, theme3, theme4(default), ..., theme11, theme12 */

    isCollapsedMobile: string;
    isCollapsedSideBar: string;

    chatToggle: string;
    chatToggleInverse: string;
    chatInnerToggle: string;
    chatInnerToggleInverse: string;

    menuTitleTheme: string; /* theme1, theme2, theme3, theme4, theme5(default), theme6 */
    itemBorder: boolean;
    itemBorderStyle: string; /* none(default), solid, dotted, dashed */
    subItemBorder: boolean;
    subItemIcon: string; /* style1, style2, style3, style4, style5, style6(default) */
    dropDownIcon: string; /* style1(default), style2, style3 */
    configOpenRightBar: string;
    isSidebarChecked: boolean;
    isHeaderChecked: boolean;

    @ViewChild('searchFriends', /* TODO: add static flag */ {static: false}) search_friends: ElementRef;
    abonnements: any = [];
    loadAbonnement = true;
    isEmpty = true;
    abo: any = null;
    user: any = null

    constructor(private settingService : SettingService, private sendNotificationService: SendNotificationService, private router: Router, private abonnementService: AbonnementService,
        private userService: UserService) {
        this.navType = 'st2';
        this.themeLayout = 'vertical';
        this.vNavigationView = 'view1';
        this.verticalPlacement = 'left';
        this.verticalLayout = 'wide';
        this.deviceType = 'desktop';
        this.verticalNavType = 'expanded';
        this.verticalEffect = 'shrink';
        this.pcodedHeaderPosition = 'fixed';
        this.pcodedSidebarPosition = 'fixed';
        this.headerTheme = 'theme1';
        this.logoheme = 'theme1';

        this.toggleOn = true;

        this.headerFixedMargin = '80px';
        this.navBarTheme = 'themelight1';
        this.activeItemTheme = 'theme4';

        this.isCollapsedMobile = 'no-block';
        this.isCollapsedSideBar = 'no-block';

        this.chatToggle = 'out';
        this.chatToggleInverse = 'in';
        this.chatInnerToggle = 'off';
        this.chatInnerToggleInverse = 'on';

        this.menuTitleTheme = 'theme5';
        this.itemBorder = true;
        this.itemBorderStyle = 'none';
        this.subItemBorder = true;
        this.subItemIcon = 'style6';
        this.dropDownIcon = 'style1';
        this.isSidebarChecked = true;
        this.isHeaderChecked = true;
    }

    ngOnInit() {
        this.getAbonnements();
    }

    getAbonnements() {
        this.abonnementService.getListAbonnements().subscribe(
            (result) => {
                this.abonnements = result;
                this.abonnements = this.abonnements.sort((a, b) => b.idAbonnement - a.idAbonnement);
                if (this.abonnements.length > 0) {
                    this.isEmpty = false;
                    this.loadAbonnement = false
                } else {
                    this.isEmpty = true;
                    this.loadAbonnement = false
                }
            },
            (err) => {
                this.loadAbonnement = false;
            }
        );
    }

    onAbonnementChoosed(abonnement){
        this.abo = abonnement;
    }

    subscribe() {
        if(this.userService.isLoggedIn()){
            this.user = this.userService.getUser();
            Swal.fire({
                title: 'Etes-vous sûr de vouloir souscrire?',
                text: "Cette action est irréversible!",
                type: 'question',
                showCancelButton: true,
                showLoaderOnConfirm: true,
                confirmButtonColor: '#93BE52',
                cancelButtonColor: '#d33',
                confirmButtonClass: 'btn btn-success btn-sm',
                cancelButtonClass: 'btn btn-danger btn-sm',
                confirmButtonText: 'Oui, souscrire!',
                preConfirm: () => {
                    return new Promise((resolve) => {
                        this.abonnementService.effectuerAbonnement(this.abo.idAbonnement, this.user.idLecteur).then(
                            (result) => {
                                Swal.fire(
                                    'Abonnement reussi!',
                                    'Abonnement!',
                                    'success'
                                );
                                Swal.hideLoading();
                            },
                            (err) => {
                                Swal.fire('Une erreur est survenue!','Veuillez réessayer plus tard.','error');
                            }
                        );
                    });
                },
                allowOutsideClick: () => !swal.isLoading()
            });
        }else{
            this.settingService.option.title = "error";
            this.settingService.option.msg = "Vous devez vous connecter pour continuer";
            this.sendNotificationService.addToast(this.settingService.option, "error");
        }
    }

    onResize(event) {
        this.innerHeight = event.target.innerHeight + 'px';
        /* menu responsive */
        this.windowWidth = event.target.innerWidth;
        let reSizeFlag = true;
        if (this.deviceType === 'tablet' && this.windowWidth >= 768 && this.windowWidth <= 1024) {
            reSizeFlag = false;
        } else if (this.deviceType === 'mobile' && this.windowWidth < 768) {
            reSizeFlag = false;
        }
        /* for check device */
        if (reSizeFlag) {
            this.setMenuAttributes(this.windowWidth);
        }
    }

    setMenuAttributes(windowWidth) {
        if (windowWidth >= 768 && windowWidth <= 1024) {
            this.deviceType = 'tablet';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'push';
        } else if (windowWidth < 768) {
            this.deviceType = 'mobile';
            this.verticalNavType = 'offcanvas';
            this.verticalEffect = 'overlay';
        } else {
            this.deviceType = 'desktop';
            this.verticalNavType = 'expanded';
            this.verticalEffect = 'shrink';
        }
    }

    onMobileMenu() {
        this.isCollapsedMobile = this.isCollapsedMobile === 'yes-block' ? 'no-block' : 'yes-block';
    }

}

