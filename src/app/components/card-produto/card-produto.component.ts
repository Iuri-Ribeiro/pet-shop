import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-card-produto',
  templateUrl: './card-produto.component.html',
  styleUrls: ['./card-produto.component.scss'],
})
export class CardProdutoComponent implements OnInit {

  image: String = "../../../assets/img/produtos/racao.jpg";

  constructor() { }

  ngOnInit() { }

}
