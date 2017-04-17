import { UtilService } from '../services/UtilService';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class UsuarioService {

    login: string;
    senha: string;
    cdIdentificador: string;
    cdEscola: number;

    constructor(private utilService: UtilService, private http: Http) {

    }

    logarUsuario() {
        let params: URLSearchParams = new URLSearchParams();
        params.set('login', this.login);
        params.set('senha', this.senha);
        params.set('cdIdentificador', '1');
        params.set('cdEscola', '1');

        let requestOptions = new RequestOptions();
        requestOptions.search = params;

        var url = this.utilService.getUrlApi() + "Usuario/GetLoginUser";

        return this.http.get(url, requestOptions)
            .map(res => res.json())
            .catch(this.handleError);
        /*  return new Promise(resolve => {
              this.http.get(url, requestOptions)
                  .map(res => res.json())
                  .catch(this.handleError)
                  .subscribe(data => {
                      resolve(data);
                  });
          });*/
    }

    listarPermissao(){
        let params: URLSearchParams = new URLSearchParams();
        params.set('idUsuario', '1');

        let requestOptions = new RequestOptions();
        requestOptions.search = params;

        var url = this.utilService.getUrlApi() + "Permissao/GetPermissaoTurma";

        return this.http.get(url, requestOptions)
            .map(res => res.json())
            .catch(this.handleError);
    }
  
    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}