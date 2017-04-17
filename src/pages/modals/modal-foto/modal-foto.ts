import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController, ViewController } from 'ionic-angular';
import { Foto } from '../../models/Foto';
import { ImagePicker } from 'ionic-native';
/*
  Generated class for the ModalFoto page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-foto',
  templateUrl: 'modal-foto.html'
})
export class ModalFotoPage {

  fotos: Array<string>;

  constructor(public navCtrl: NavController, public navParams: NavParams, public loadingCtrl: LoadingController, public viewCtrl: ViewController) {
    this.fotos = this.navParams.get('fotos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalFotoPage');
  }




  excluirFoto(foto) {
    let index = this.fotos.indexOf(foto);

    if (index > -1) {
      this.fotos.splice(index, 1);
    }
  }

  fechar() {
    this.viewCtrl.dismiss();
  }

  adicionarFotos() {
    let loading = this.loadingCtrl.create({
      content: 'Aguarde isso pode levar alguns minutos...'
    });
    var options = {
      maximumImagesCount: 10,
      quality: 80
    };

    loading.present();

    ImagePicker.getPictures(options).then((results) => {
      let promises: Array<any> = []
      for (var i = 0; i < results.length; i++) {
        promises.push(this.convertFileToDataURLviaFileReader(results[i]));
      }
      this.checkImages(promises, loading);
    }, (err) => { });
  }

  checkImages(promises, loading) {
    Promise.all(promises).then((results: any[]) => {
      this.fotos = this.fotos.concat(results);
      loading.dismiss();
    });
  }

  convertFileToDataURLviaFileReader(url) {
    return new Promise((resolve) => {
      var xhr = new XMLHttpRequest();
      xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
          let foto = new Foto();
          foto.base64 = reader.result;
          foto.caminhoCel = url;
          resolve(foto);
        }
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    });
  }

}
