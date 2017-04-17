import { UtilService } from '../services/UtilService';
import { Http, RequestOptions, URLSearchParams } from '@angular/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs/Observable';
import 'rxjs/Rx';
import 'rxjs/add/operator/map';

@Injectable()
export class PostService {

    constructor(private utilService: UtilService, private http: Http) {

    }

    getPost() {
        var dt = new Date();
        var setDob = this.utilService.transformDate(dt);
        console.log(setDob);

        let params: URLSearchParams = new URLSearchParams();
        params.set('idUsuario', '1');
        params.set('dtInicio', setDob.toString()); 
        params.set('dtFim', setDob.toString());
        params.set('page', '1');
        params.set('idTipo', '1');
        params.set('dtSemana', setDob.toString());



        let requestOptions = new RequestOptions();
        requestOptions.search = params;

        var url = this.utilService.getUrlApi() + "Post/Get";

        return this.http.get(url, requestOptions)
            .map(res => res.json())
            .catch(this.handleError);
    }

    handleError(error) {
        console.error(error);
        return Observable.throw(error.json().error || 'Server error');
    }

}