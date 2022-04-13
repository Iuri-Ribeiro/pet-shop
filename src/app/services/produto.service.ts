import { Injectable } from '@angular/core';
import { Produto } from '../models/produto.model';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {

    public produtos: Array<Produto> = [
        {
            id: 0,
            title: "Ração Pedrigree",
            subtitle: "Ração de 18kg da pedigree para cachorros adultos",
            price: "R$ 192,59",
            image: "../../../assets/img/produtos/racao.jpg"
        },
        {
            id: 1,
            title: "Ração Golden",
            subtitle: "Ração de 10,1Kg da Golden para gatos filhotes, sabor frango",
            price: "R$ 157,90",
            image: "../../../assets/img/produtos/racao_gato.png"
        },
        {
            id: 2,
            title: "Ração Quatree",
            subtitle: "Ração Quatree Gourmet para cachorros adultos de raças médias e grandes",
            price: "R$ 42,99",
            image: "../../../assets/img/produtos/racao2.jpg"
        }
    ]

    constructor() { }

    public getAll(): Array<Produto> {
        return this.produtos;
    }

    public getById(id: number): Produto {
        for (let p of this.produtos) {
            if (p.id == id) {
                return p;
            }
        }
    }
}
