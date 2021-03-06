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
  Address: string;
  phone: number;
  email: string;

  typeDishes: string;
  Description: string;
  opening: string;
 
  /*opening: {openHour: number, openMin: number, closeHour: number, closeMin: number}={
    openHour: 0, openMin: 0, closeHour: 0, closeMin: 0
  }*/
  sensitivePreferences: {gfMenu: boolean,sensitivity: string,preferences: string, accessibility: boolean, kosher: boolean}={
    gfMenu: false/*Gluten free menu*/,sensitivity: "",preferences: "", accessibility: false, kosher: false
  }
  linksUrl:{ website: string, facebook:  string;}={
    website: "",    facebook:  ""
  }
 /* location_in_map:{x:number, y: number}={
    x:0, y:0
  }*/
  
  priceRange: string;
  
  
  facilities: string;
  moreInfo: string;



  public save(){
    let obj = {
     
     
      namePlace: this.namePlace,
      Address:this.Address,
      phone: this.phone,
      email: this.email,
      opening: this.opening,
      Description:this.Description,
      typeDishes: this.typeDishes,

      
     sensitivePreferences:  this.sensitivePreferences,
      links:  this.linksUrl,

       priceRange: this.priceRange,      
      facilities: this.facilities,
      moreInfo: this.moreInfo

      /*location_in_map: this.location_in_map,
    */
    }
    this.resColl.add(obj)
  }
  ngOnInit() {
  }
}


