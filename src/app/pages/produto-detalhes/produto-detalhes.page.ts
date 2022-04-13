import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
  selector: 'app-produto-detalhes',
  templateUrl: './produto-detalhes.page.html',
  styleUrls: ['./produto-detalhes.page.scss'],
})
export class ProdutoDetalhesPage implements OnInit {

  public produto: Produto;

  constructor(private rotaAtiva: ActivatedRoute, private produtoService: ProdutoService) { }

  ngOnInit() {
    const codigo: number = Number(this.rotaAtiva.snapshot.paramMap.get('id'));

    this.produto = this.produtoService.getById(codigo);
  }

}
