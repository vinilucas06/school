import { Component } from '@angular/core';
import { NavController, NavParams, LoadingController } from 'ionic-angular';
import { PostService } from '../services/PostService';
import { CadastrarPostPage } from '../cadastrar-post/cadastrar-post';

/*
  Generated class for the FotoSemana page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-foto-semana',
  templateUrl: 'foto-semana.html'
})
export class FotoSemanaPage {

  posts: Array<any>;
  continueposts: Boolean;

  constructor(public navCtrl: NavController, public navParams: NavParams, private postService: PostService
    , public loadingCtrl: LoadingController) {

    this.getPhotos();
    this.continueposts = true;
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad FotoSemanaPage');
  }

  getPhotos() {
    let loader = this.loadingCtrl.create({
      content: "Aguarde..."
    });
    loader.present();
    this.postService.getPost().subscribe(data => {
      this.posts = data;
      console.log(this.posts);
    }, (err) => {
      loader.dismiss();
      alert(err);
      console.log(err);
    },

      () => {
        loader.dismiss();
        console.log("completed");
      });
  }

  doInfinite(infiniteScroll) {

    if (this.continueposts == true) {
      this.postService.getPost().subscribe(data => {

        if (data != null) {
          this.posts = this.posts.concat(data);
        } else {
          this.continueposts = false;
        }
      }, (err) => {

      },
        () => {
          infiniteScroll.complete();
        });
    }else{
         infiniteScroll.complete();
    }

  }

  cadastrarPost(){
    this.navCtrl.push(CadastrarPostPage);
  }

}
