import { NgModule, ErrorHandler } from '@angular/core';
import { IonicApp, IonicModule, IonicErrorHandler } from 'ionic-angular';
import { MyApp } from './app.component';
import { File } from '@ionic-native/file';

 
 
import { HelloIonicPage } from '../pages/hello-ionic/hello-ionic';
import { ItemDetailsPage } from '../pages/item-details/item-details';
import { ListPage } from '../pages/list/list';
import { LoginPage } from '../pages/login/login';
import { FotoSemanaPage } from '../pages/foto-semana/foto-semana';
import { CadastrarPostPage } from '../pages/cadastrar-post/cadastrar-post';
import { ModalFotoPage } from '../pages/modals/modal-foto/modal-foto';
import { ModalAlunoPage } from '../pages/modals/modal-aluno/modal-aluno';
import { ModalAnexoPage } from '../pages/modals/modal-anexo/modal-anexo';

@NgModule({
  declarations: [
    MyApp,
    File,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    FotoSemanaPage,
    CadastrarPostPage,
    ModalFotoPage,
    ModalAlunoPage,
    ModalAnexoPage
  ],
  imports: [
    IonicModule.forRoot(MyApp)
  ],
  bootstrap: [IonicApp],
  entryComponents: [
    MyApp,
    File,
    HelloIonicPage,
    ItemDetailsPage,
    ListPage,
    LoginPage,
    FotoSemanaPage,
    CadastrarPostPage,
    ModalFotoPage,
    ModalAlunoPage,
    ModalAnexoPage
  ],
  providers: [{provide: ErrorHandler, useClass: IonicErrorHandler}]
})
export class AppModule {
}
