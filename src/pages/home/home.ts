import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';

import { CreatecontactPage } from '../createcontact/createcontact';
import { FamilyPage } from '../family/family';
import { FriendsPage } from '../friends/friends';
import { OthersPage } from '../others/others';


import {PlacesService} from "../../services/places.service";


@Component({
  selector: 'page-home',
  templateUrl: 'home.html'
})
export class HomePage {
  
  places:{displayName:string,phnumber:string,phtype:string}[]=[];

  constructor(public navCtrl: NavController, private placesService:PlacesService) {
 	
  }

  ionViewWillEnter(){
  this.places=this.placesService.getPlaces();
  }

  createcontact(){
  this.navCtrl.push(CreatecontactPage);
  }

  gofamily()
  {
    this.navCtrl.push(FamilyPage);
  }

  gofriends()
  {
    this.navCtrl.push(FriendsPage);
  }

  goothers()
  {
    this.navCtrl.push(OthersPage);
  }

  group(){

  }


}

