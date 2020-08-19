import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {

  constructor() { }

  pessoa = {nome: "Jonas", nasc: "1993-09-01"};
  curso = {concluido: 0.5, valor: 3000};

  ngOnInit(): void {
  }

  checkForm(form) {
    console.log(form);
  }

}
