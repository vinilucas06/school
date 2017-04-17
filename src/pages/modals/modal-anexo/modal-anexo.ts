import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { File } from '@ionic-native/file';

/*
  Generated class for the ModalAnexo page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-anexo',
  templateUrl: 'modal-anexo.html'
})
export class ModalAnexoPage {

  constructor(public navCtrl: NavController, public navParams: NavParams,private file: File) {}

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAnexoPage');
  }

  adicionarFotos(){
  }

}
