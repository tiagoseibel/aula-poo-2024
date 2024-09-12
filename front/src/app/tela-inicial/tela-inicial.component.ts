import { Component, OnInit } from '@angular/core';
import { Transacao } from '../../model/transacao';
import { CommonModule } from '@angular/common';
import { TransacaoService } from '../transacao.service';

@Component({
  selector: 'app-tela-inicial',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './tela-inicial.component.html',
  styleUrl: './tela-inicial.component.css'
})
export class TelaInicialComponent implements OnInit{
  extrato: Transacao[] = [];
  texto: string = "EXTRATO DO CLIENTE"

  constructor(
    private service: TransacaoService
  ) {

  }

  ngOnInit(): void {
    this.service.buscarExtrato().subscribe( (item: Transacao) => {
      this.extrato.push(item);
    })
  }

}
