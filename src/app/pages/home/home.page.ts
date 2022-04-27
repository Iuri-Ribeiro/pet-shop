import { AfterContentChecked, Component, OnInit, ViewChild } from '@angular/core';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';
import { SwiperComponent } from 'swiper/angular';

@Component({
    selector: 'app-home',
    templateUrl: './home.page.html',
    styleUrls: ['./home.page.scss'],
})
export class HomePage implements OnInit, AfterContentChecked {
    @ViewChild('swiper') swiper: SwiperComponent;

    public produtos: Array<Produto> = [];

    constructor(produtoService: ProdutoService) {
        this.produtos = produtoService.getAll();
    }

    ngOnInit() {
    }

    ngAfterContentChecked(): void {
        if(this.swiper){
            this.swiper.updateSwiper({})
        }
    }
}
