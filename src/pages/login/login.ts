import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { UtilService } from '../services/UtilService';
import { UsuarioService } from '../services/UsuarioService';
import { FotoSemanaPage } from '../foto-semana/foto-semana';

import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
/*
  Generated class for the Login page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-login',
  templateUrl: 'login.html'
})
export class LoginPage {

  login: string;
  senha: string;

  constructor(public navCtrl: NavController, public navParams: NavParams, private utilService: UtilService, private http: Http,
    private usuarioService: UsuarioService, public loadingCtrl: LoadingController) {
    //, 
    //this.teste();


  }



  logar() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    this.utilService.openLoad();
    this.usuarioService.login = this.login;
    this.usuarioService.senha = this.senha;
    this.usuarioService.logarUsuario().subscribe(data => {
   //   this.navCtrl.push(FotoSemanaPage);
      this.navCtrl.setRoot(FotoSemanaPage);
    }, (err) => {
      loader.dismiss();
      alert(err);
      console.log(err);
    },

      () => {
        loader.dismiss();
        console.log("completed");
      });



    /*this.usuarioService.logarUsuario().then(
      data => {console.log(data);}
    );*/





    /*  subscribe(
              data => {console.log(data);}
          );  var url = this.utilService.getUrlApi() + "TestePrototipo/Teste";
      this.http.get(url)
        .map(res => res.json())
        .subscribe(data => {
          console.log(data);
          alert(data);
        });*/
  }


  ionViewDidLoad() {
    console.log('ionViewDidLoad LoginPage');
  }


}
