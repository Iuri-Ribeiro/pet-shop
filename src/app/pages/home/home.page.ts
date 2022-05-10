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

    constructor(private produtoService: ProdutoService) { }

    ngOnInit() {
        this.produtoService.getAll().subscribe((produtos) => {

            this.produtos = produtos.map((produto) => {
                return {
                    id: produto.payload.doc.id,
                    title: produto.payload.doc.data()['title'],
                    subtitle: produto.payload.doc.data()['subtitle'],
                    price: produto.payload.doc.data()['price'],
                    image: produto.payload.doc.data()['image']
                }
            })

        })
    }

    ngAfterContentChecked(): void {
        if(this.swiper){
            this.swiper.updateSwiper({})
        }
    }
}
