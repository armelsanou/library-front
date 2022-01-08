import { SendNotificationService } from './../../services/send-notication/send-notification.service';
import { EmpruntService } from './../../services/servicesBibliotheque/emprunt/emprunt.service';
import { UserService } from "./../../services/servicesBibliotheque/user/user.service";
import { SettingService } from "./../../services/setting/setting.service";
import { LivreService } from "./../../services/servicesBibliotheque/livre/livre.service";
import { CategorieService } from "./../../services/servicesBibliotheque/categorie/categorie.service";
import { Router, ActivatedRoute } from "@angular/router";
import { HttpClient } from "@angular/common/http";
import { Component, OnInit } from "@angular/core";
import swal from 'sweetalert2';
import Swal from 'sweetalert2/dist/sweetalert2.js';

@Component({
  selector: "app-livre-details",
  templateUrl: "./livre-details.component.html",
  styleUrls: ["./livre-details.component.scss"],
})
export class LivreDetailsComponent implements OnInit {
  imgSrc = "";
  livre: any;
  isbn: any;
  user: any = null;

  constructor(
    public httpClient: HttpClient,
    private router: Router,
    private userService: UserService,
    private route: ActivatedRoute,
    public categorieService: CategorieService,
    public livreService: LivreService,
    private settingService: SettingService,
    private empruntService: EmpruntService,
    private sendNotificationService: SendNotificationService
  ) {
    this.imgSrc = this.settingService.getApiDomainImageUploadedLocation();
    this.isbn = this.route.snapshot.params.id;
  }

  ngOnInit() {
    this.getLivre();
  }

  getLivre() {
    this.livreService.getLivre(this.isbn).then(
      (result) => {
        if (result) {
          this.livre = result;
        }
      },
      (err) => console.log(err)
    );
  }

  emprunter() {
    if (this.userService.isLoggedIn()) {
      this.user = this.userService.getUser();
      Swal.fire({
        title: "Etes-vous sûr de vouloir emprunter ce livre?",
        text: "Cette action est irréversible!",
        type: "question",
        showCancelButton: true,
        showLoaderOnConfirm: true,
        confirmButtonColor: "#93BE52",
        cancelButtonColor: "#d33",
        confirmButtonClass: "btn btn-success btn-sm",
        cancelButtonClass: "btn btn-danger btn-sm",
        confirmButtonText: "Oui, emprunter!",
        preConfirm: () => {
          return new Promise((resolve) => {
            this.empruntService
              .emprunterLivre(this.isbn, this.user.idLecteur)
              .then(
                (result: any) => {
                  Swal.fire({
                    type: 'success',
                    title: "Le livre ayant pour code ISBN "+result.empruntPK.isbn+" a été emprunté avec succès! Date de remise "+result.dateRetourTheo,
                    showConfirmButton: false,
                    timer: 4000
                  })
                  Swal.hideLoading();
                  this.settingService.option.title = "Emprunt réussi";
                  this.router.navigate(['/components/livres/categorie/all']);
                  this.settingService.option.msg =
                    "Le livre ayant pour code ISBN "+result.empruntPK.isbn+" a été emprunté avec succès!"+" Date de remise "+result.dateRetourTheo;
                    this.sendNotificationService.addToast(
                    this.settingService.option,
                    "success"
                  );
                },
                (err) => {
                  Swal.fire(
                    "Une erreur est survenue!",
                    "Une erreur est survenue, vous devez surement prendre un abonnement",
                    "error"
                  );
                }
              );
          });
        },
        allowOutsideClick: () => !swal.isLoading(),
      });
    } else {
      this.settingService.option.title = "error";
      this.settingService.option.msg =
        "Vous devez vous connecter pour continuer";
        this.sendNotificationService.addToast(
        this.settingService.option,
        "error"
      );
    }
  }
}
