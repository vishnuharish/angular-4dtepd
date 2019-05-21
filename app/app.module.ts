import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AngularFireModule } from '@angular/fire';
import { AngularFireDatabaseModule } from '@angular/fire/database';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';

const config = {
  apiKey: "AIzaSyCM2Dfd0hRJNTfn7RmAuc1NnoPLsp97_HU",
  authDomain: "fir-training-61959.firebaseapp.com",
  databaseURL: "https://fir-training-61959.firebaseio.com",
  storageBucket: "fir-training-61959.appspot.com",
  projectId: 'fir-training-61959',
  messagingSenderId: "1057967227504"
};

@NgModule({
  imports:      [ 
    BrowserModule,
    AngularFireModule.initializeApp(config),
    AngularFireDatabaseModule
  ],
  declarations: [ AppComponent, HelloComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
