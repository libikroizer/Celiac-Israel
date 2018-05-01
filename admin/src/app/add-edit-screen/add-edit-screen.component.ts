import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Component({
  selector: 'app-add-edit-screen',
  templateUrl: './add-edit-screen.component.html',
  styleUrls: ['./add-edit-screen.component.css']
})
export class AddEditScreenComponent implements OnInit {
  title = 'app';
  private resColl
  constructor(private afs: AngularFirestore){
    this.resColl = afs.collection("resturant"); 
  }
  namePlace: string;
  typeDishes: string;
  Description: string;
  phone: number;
 
  opening: {openHour: number, openMin: number, closeHour: number, closeMin: number}={
    openHour: 0, openMin: 0, closeHour: 0, closeMin: 0
  }
  sensitivePreferences: {gfMenu: boolean,sensitivity: string,preferences: string, accessibility: boolean}={
    gfMenu: false/*Gluten free menu*/,sensitivity: "",preferences: "", accessibility: false
  }
  linksUrl:{ website: string, facebook:  string;}={
    website: "",    facebook:  ""
  }
  
  priceRange: string;
  kosher: boolean;
  locationMap: string;//on the map
  Address: string;
  facilities: string;
  moreInfo: string;



  public save(){
    let obj = {
     
      namePlace: this.namePlace,
      typeDishes: this.typeDishes,
      Description:this.Description,
      phone: this.phone,

      opening: this.opening,
     sensitivePreferences:  this.sensitivePreferences,
      links:  this.linksUrl,

     /*  priceRange: this.priceRange,
      kosher: this.kosher,
      location: this.locationMap,
      Address: this.Address,
      facilities: this.facilities,*/
      moreInfo: this.moreInfo
    }
    this.resColl.add(obj)
  }
  ngOnInit() {
  }
}


