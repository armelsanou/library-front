import { SendNotificationService } from './../../services/send-notication/send-notification.service';
import { SettingService } from './../../services/setting/setting.service';
import { UserService } from './../../services/servicesBibliotheque/user/user.service';
import { AbonnementService } from './../../services/servicesBibliotheque/abonnement/abonnement.service';
import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: 'app-abonnement',
  templateUrl: './abonnement.component.html',
  styleUrls: ['./abonnement.component.scss'],
  encapsulation: ViewEncapsulation.None
})
export class AbonnementComponent implements OnInit {
    
    abonnements: any = [];
    loadAbonnement = true;
    isEmpty = true;
    abo: any = null;
    user: any = null

    constructor(private settingService : SettingService, private sendNotificationService: SendNotificationService, private router: Router, private abonnementService: AbonnementService,
        private userService: UserService) {
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

}

