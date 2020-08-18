import { Component, OnInit, Input } from '@angular/core';
import { Cliente } from './cliente.model';

@Component({
  selector: 'app-cliente',
  templateUrl: './cliente.component.html',
  styleUrls: ['./cliente.component.css']
})
export class ClienteComponent implements OnInit {

  // @Input() cliente: Cliente;

  constructor() { }

  clientes: Cliente[] = [
    {
      nome: "Jonas",
      id: 1
    },
    {
      nome:"Fabio",
      id: 2
    }
  ]

  ngOnInit(): void {
  }

}
