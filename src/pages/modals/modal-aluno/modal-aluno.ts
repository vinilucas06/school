import { Component } from '@angular/core';
import { NavController, NavParams } from 'ionic-angular';
import { UsuarioService } from '../../services/UsuarioService';

/*
  Generated class for the ModalAluno page.

  See http://ionicframework.com/docs/v2/components/#navigation for more info on
  Ionic pages and navigation.
*/
@Component({
  selector: 'page-modal-aluno',
  templateUrl: 'modal-aluno.html'
})
export class ModalAlunoPage {


  items: Array<any>;

  constructor(public navCtrl: NavController, public navParams: NavParams) {
    this.items = this.navParams.get('alunos');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad ModalAlunoPage');
  }


  selecionarTodos(turma) {

    for (let aluno of turma.Aluno) {
        aluno.selecionado = turma.selecionado;
      }
  }

}
