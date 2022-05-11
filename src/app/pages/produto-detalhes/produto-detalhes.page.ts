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
        const codigo: string = this.rotaAtiva.snapshot.paramMap.get('id');
        console.log(codigo);

        this.produtoService.getById(codigo).then((produto) => {
            this.produto = produto;
        });
    }

}
