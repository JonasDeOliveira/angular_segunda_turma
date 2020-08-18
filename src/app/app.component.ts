import { Component } from '@angular/core';
import { Produto } from './produto/produto.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  produtos: Produto[] = [
    {
      id:"123", 
      nome: "Brastemp B34", 
      temEsoque: true, 
      descricao: "Muito bom",
      img: "https://compracerta.vteximg.com.br/arquivos/ids/307851/Geladeira-BRE80AK-Frontal.jpg?v=637298145010330000"
    },
    {
      id:"1134324", 
      nome: "Consul c789", 
      temEsoque: false, 
      descricao: "Manda para Conchal",
      img: "https://static.carrefour.com.br/medias/sys_master/images/images/h79/h87/h00/h00/13404723216414.jpg"
    },
    {
      id:"1134324", 
      nome: "Dell AT45", 
      temEsoque: true, 
      descricao: "Manda para Conchal",
      img: "https://http2.mlstatic.com/notebook-dell-inspiron-i15-7580-m30s-ci7-8gb-ssd-156-win10-D_NQ_NP_909323-MLB31090463443_062019-F.jpg"
    }
  ]


}
