import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    produtos: any = [
        {
            title: "Ração Pedrigree",
            subtitle: "Ração de 18kg da pedigree para cachorros adultos",
            price: "R$ 192,59",
            image: "../../../assets/img/produtos/racao.jpg"
        },
        {
            title: "Ração Golden",
            subtitle: "Ração de 10,1Kg da Golden para gatos filhotes, sabor frango",
            price: "R$ 157,90",
            image: "../../../assets/img/produtos/racao_gato.png"
        },
        {
            title: "Ração Quatree",
            subtitle: "Ração Quatree Gourmet para cachorros adultos de raças médias e grandes",
            price: "R$ 42,99",
            image: "../../../assets/img/produtos/racao2.jpg"
        }
    ]

    constructor() { }

    ngOnInit() {
    }

}
