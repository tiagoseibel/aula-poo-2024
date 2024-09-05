import { Component, OnInit } from '@angular/core';
import { Transacao } from '../../model/transacao';
import { CommonModule } from '@angular/common';

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

  constructor() {

  }

  ngOnInit(): void {
      let tran: Transacao = {
        data: new Date(),
        descricao: "PIX 0001",
        valor: 10.00,
        operacao: "C",
        numero: 1
      };
      this.extrato.push(tran);
      
  }

}
