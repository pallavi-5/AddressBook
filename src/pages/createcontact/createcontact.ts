import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';

import {PlacesService} from "../../services/places.service";
/**
 * Generated class for the CreatecontactPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-createcontact',
  templateUrl: 'createcontact.html',
})
export class CreatecontactPage {

newcontact={
	displayName:'',
	nickname:'',
	phnumber:'',
	phtype:''
}

  constructor(public navCtrl: NavController, public navParams: NavParams,private placesService:PlacesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CreatecontactPage');
  }

  onAddPlace(value:{displayName:string,phnumber:string,phtype:string}){
  this.placesService.addPlace(value);
  this.navCtrl.pop();
  }
  
}
