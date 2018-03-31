import { BrowserModule } from '@angular/platform-browser';
import { ErrorHandler, NgModule } from '@angular/core';
import { IonicApp, IonicErrorHandler, IonicModule } from 'ionic-angular';
import { SplashScreen } from '@ionic-native/splash-screen';
import { StatusBar } from '@ionic-native/status-bar';

import { MyApp } from './app.component';
import { HomePage } from '../pages/home/home';
import { CreatecontactPage } from '../pages/createcontact/createcontact';
import { FamilyPage } from '../pages/family/family';
import { FriendsPage } from '../pages/friends/friends';
import { OthersPage } from '../pages/others/others';
import {PlacesService} from "../services/places.service";

@NgModule({
  declarations: [
    MyApp,
    HomePage,
    CreatecontactPage,
    FamilyPage,
    FriendsPage,
    OthersPage
  ],
  imports: [
    BrowserModule,
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    HomePage,
    CreatecontactPage,
    FamilyPage,
    FriendsPage,
    OthersPage
  ],
  providers: [
    StatusBar,
    SplashScreen,
    {provide: ErrorHandler, useClass: IonicErrorHandler},
    PlacesService
  ]
})
export class AppModule {}
