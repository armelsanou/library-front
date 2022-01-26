import { SettingService } from "./../../services/setting/setting.service";
import { CategorieService } from "./../../services/servicesBibliotheque/categorie/categorie.service";
import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import {
  animate,
  AUTO_STYLE,
  state,
  style,
  transition,
  trigger,
} from "@angular/animations";
import { Router } from "@angular/router";

@Component({
  selector: "app-home",
  templateUrl: "./home.component.html",
  styleUrls: ["./home.component.scss"],
  animations: [
    trigger("mobileMenuTop", [
      state(
        "no-block, void",
        style({
          overflow: "hidden",
          height: "0px",
        })
      ),
      state(
        "yes-block",
        style({
          height: AUTO_STYLE,
        })
      ),
      transition("no-block <=> yes-block", [animate("400ms ease-in-out")]),
    ]),
  ],
})
export class HomeComponent implements OnInit {
  public categories: any[] = [];
  error: {};
  loadcategories = false;
  totalRecords: number;
  isEmpty = false;
  currentCategorieId: number;
  imgSrc = "";

  constructor(
    private router: Router,
    public categorieService: CategorieService,
    private settingService: SettingService
  ) {
    this.imgSrc = this.settingService.getApiDomainImageUploadedLocation();
  }

  ngOnInit() {
    this.getAllCategories();
  }

  getAllCategories() {
    this.categorieService.getListCategories().subscribe(
      (result) => {
        this.categories = result;
        this.categories = this.categories.sort(
          (a, b) => b.idCategorie - a.idCategorie
        );
        this.totalRecords = this.categories.length;
        if (this.totalRecords > 0) {
          this.isEmpty = false;
        } else {
          this.isEmpty = true;
        }
        this.loadcategories = false;
      },
      (err) => {
        this.error = "Une erreur est survenue. Veuillez réessayer plus tard.";
        this.loadcategories = false;
      }
    );
  }

  seeBooks(param, idCategorie = null) {
    this.router.navigate(["/components/livres/categorie/" + param]);
    if (idCategorie) {
      localStorage.setItem("cat", idCategorie);
    }
  }
}
