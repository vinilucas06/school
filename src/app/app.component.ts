import { Component, ViewChild } from '@angular/core';

import { Platform, MenuController, Nav } from 'ionic-angular';

import { StatusBar, Splashscreen } from 'ionic-native';

//PAGES
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { FotoSemanaPage } from '../pages/foto-semana/foto-semana';
import { CadastrarPostPage } from '../pages/cadastrar-post/cadastrar-post'; // nao precisa



import { UtilService } from '../pages/services/UtilService';
import { UsuarioService } from '../pages/services/UsuarioService';
import { PostService } from '../pages/services/PostService';

import { Foto } from '../pages/models/Foto';



@Component({
  templateUrl: 'app.html',
  providers: [UtilService,UsuarioService,PostService,Foto]   
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  // make HelloIonicPage the root (or first) page
  rootPage: any = CadastrarPostPage;
  pages: Array<{title: string, component: any}>;

  constructor(
    public platform: Platform,
    public menu: MenuController
  ) {
    this.initializeApp();

    // set our app's pages
    this.pages = [
      { title: 'Hello Ionic', component: HelloIonicPage },
      { title: 'My First List', component: ListPage },
      { title: 'Fotos', component: FotoSemanaPage }
    ];
  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      StatusBar.styleDefault();
      Splashscreen.hide();
    });
  }

  openPage(page) {
    // close the menu when clicking a link from the menu
    this.menu.close();
    // navigate to the new page if it is not the current page
    this.nav.setRoot(page.component);
  }
}
