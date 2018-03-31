import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import {PlacesService} from "../../services/places.service";

/**
 * Generated class for the OthersPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-others',
  templateUrl: 'others.html',
})
export class OthersPage {
places:{displayName:string,phnumber:string,phtype:string}[]=[];

  constructor(public navCtrl: NavController, public navParams: NavParams,  private placesService:PlacesService) {
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad OthersPage');
  }


   ionViewWillEnter(){
  this.places=this.placesService.getPlaces();
  }
}
