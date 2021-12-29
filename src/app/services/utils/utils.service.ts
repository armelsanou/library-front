import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UtilsService {

  extractedDate;
  finalResult: any;
  childsList: any[] = [];

  constructor() { }

  extractDate(stringDate){
    this.extractedDate = stringDate.substring(0,4);
    return this.extractedDate;
  }

  filterByOneField(list, fieldName, value){
    this.finalResult = "";
    for (let index = 0; index < list.length; index++) {
      if (list[index][fieldName] === value) {
        this.finalResult = list[index];
        break;
      }
    }
    return this.finalResult;
  }

  getAllChildsByParentByValue(list, fieldName, value){
    this.childsList = [];
    for (let index = 0; index < list.length; index++) {
      if (list[index][fieldName] === value) {
        this.childsList.push(list[index]);
      }
    }
    return this.childsList;
  }

  getDateOfToday(annee = null){
    var today = new Date();
    var temp = "";
    var dd = String(today.getDate()).padStart(2, '0');
    var mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = today.getFullYear();

    temp = mm + '/' + dd + '/' + yyyy;
    if (annee != null) {
      return yyyy+"-"+mm+"-"+dd;
    }else{
      return yyyy+"-"+mm;
    }
  }

  setDateOfToday(formParent,name,annee = null){
    let year = this.getDateOfToday(annee);
    formParent.get(name).setValue(year);
  }
  
}
