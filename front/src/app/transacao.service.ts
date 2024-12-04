import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Transacao } from '../model/transacao';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TransacaoService {

  constructor(
    private http: HttpClient
  ) { }

  public buscarExtrato(): Observable<Transacao[]> {
    return this.http.get<Transacao[]>("http://localhost:8081/transacao");
  }
}
