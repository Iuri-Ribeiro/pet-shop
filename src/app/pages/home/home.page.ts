import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit {

    title: String = "Ração Pedrigree";
    subtitle: String = "Ração de 18kg da pedigree para cachorros adultos";
    price: String = "R$ 70,00";
    image: String = "../../../assets/img/produtos/racao.jpg";

    constructor() { }

    ngOnInit() {
    }

}
