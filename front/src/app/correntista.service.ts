import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Correntista } from '../model/correntista';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CorrentistaService {

  constructor(
    private http: HttpClient
  ) { }

  public cadastrar(correntista: Correntista): Observable<any> {
    return this.http.post("http://localhost:8081/correntista", correntista);
  }

}
