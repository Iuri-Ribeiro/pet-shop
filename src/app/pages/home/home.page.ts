import { Component, OnInit } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    public produtos: Array<Produto> = [];

    constructor(produtoService: ProdutoService) {
        this.produtos = produtoService.getAll();
    }

    ngOnInit() {
    }
}
