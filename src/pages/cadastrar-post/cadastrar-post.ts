import { Component } from '@angular/core';
import { NavController, NavParams, ModalController, LoadingController } from 'ionic-angular';
import { ImagePicker, Calendar } from 'ionic-native';
import { ModalFotoPage } from '../modals/modal-foto/modal-foto';
import { ModalAlunoPage } from '../modals/modal-aluno/modal-aluno';
import { ModalAnexoPage } from '../modals/modal-anexo/modal-anexo';
import { Foto } from '../models/Foto';
import { UsuarioService } from '../services/UsuarioService';
/*
  Generated class for the CadastrarPost page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-cadastrar-post',
  templateUrl: 'cadastrar-post.html'
})
export class CadastrarPostPage {

  fotos: Array<any> = [];


  constructor(public navCtrl: NavController, public navParams: NavParams, public modalCtrl: ModalController, public loadingCtrl: LoadingController,
    private usuarioService: UsuarioService) {


  }

  adicionarAnexo() {
    let modal = this.modalCtrl.create(ModalAnexoPage);
      modal.present();

  }

  adicionarAlunos() {
    this.usuarioService.listarPermissao().subscribe(data => {
      let modal = this.modalCtrl.create(ModalAlunoPage, { alunos: data });
      modal.present();
    }, (err) => {

    },

      () => {

      });


  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad CadastrarPostPage');
  }

  callback(url) {
    this.fotos.push("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmCnETmy57567EN-JJE-Jx0mT_9HRVPf_3tK81UudGDGj52DCN7w");
    //alert(url);
    let modal = this.modalCtrl.create(ModalFotoPage, { fotos: this.fotos });
    modal.present();
    // alert(url);
  }

  convertFileToDataURLviaFileReader(url) {
    return new Promise((resolve) => {
      //  resolve(url);
      var xhr = new XMLHttpRequest();
      xhr.onload = function () {
        var reader = new FileReader();
        reader.onloadend = function () {
          let foto = new Foto();
          foto.base64 = reader.result;
          foto.caminhoCel = url;
          resolve(foto);
          //  resolve(new ModelFoto(url,reader.result));
          //resolve(reader.result);callback(reader.result);let foto:  any = { 'camCel': url,'base64': reader.result };                
        }
        reader.readAsDataURL(xhr.response);
      };
      xhr.open('GET', url);
      xhr.responseType = 'blob';
      xhr.send();
    });
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

    //this.fotos.push("https://encrypted-tbn3.gstatic.com/images?q=tbn:ANd9GcQmCnETmy57567EN-JJE-Jx0mT_9HRVPf_3tK81UudGDGj52DCN7w");
    //this.fotos.push("2");




    ImagePicker.getPictures(options).then((results) => {
      let promises: Array<any> = []
      //this.convertFileToDataURLviaFileReader(results[0], );
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
      let modal = this.modalCtrl.create(ModalFotoPage, { fotos: this.fotos });
      modal.present();
    });
  }

}
