import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
    selector: 'app-criar-produto',
    templateUrl: './criar-produto.page.html',
    styleUrls: ['./criar-produto.page.scss'],
})
export class CriarProdutoPage implements OnInit {

    public produto: Produto = new Produto();

    constructor(private produtoService: ProdutoService,
        private rota: Router) { }

    ngOnInit() {
    }

    public cadastrar() {
        this.produtoService.add(this.produto).then((produtoDoc) => {
            console.log(produtoDoc);
            this.rota.navigate(['/produtos']);
        });

    }
}
