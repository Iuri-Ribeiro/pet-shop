import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Produto } from 'src/app/models/produto.model';
import { ProdutoService } from 'src/app/services/produto.service';
import { Storage } from '@capacitor/storage';
import { Cliente } from 'src/app/models/cliente.model';
import { AlertController } from '@ionic/angular';

@Component({
    selector: 'app-produto-detalhes',
    templateUrl: './produto-detalhes.page.html',
    styleUrls: ['./produto-detalhes.page.scss'],
})
export class ProdutoDetalhesPage implements OnInit {

    public produto: Produto = new Produto();
    public produtoEdit: Produto = new Produto();
    public cliente;
    public admin: boolean = false;
    public isEditar = false;

    constructor(
        private rotaAtiva: ActivatedRoute,
        private produtoService: ProdutoService,
        private rota: Router,
        private alerta: AlertController) { }

    async ngOnInit() {
        const codigo: string = this.rotaAtiva.snapshot.paramMap.get('id');

        this.produtoService.getById(codigo).then((produto) => {
            this.produto = produto;
        });

        const resp = await Storage.get({ key: 'meu-usuario' });
        this.cliente = JSON.parse(resp.value);

        if (this.cliente)
            this.admin = this.cliente.admin;
    }

    public editar() {
        this.isEditar = true;
        this.produtoEdit.id = this.produto.id;
        this.produtoEdit.title = this.produto.title;
        this.produtoEdit.price = this.produto.price;
        this.produtoEdit.subtitle = this.produto.subtitle;
        this.produtoEdit.image = this.produto.image;
        this.produtoEdit.categoria = this.produto.categoria;
    }

    public salvar() {
        this.produtoService.edit(this.produtoEdit).then((resposta) => {
            this.isEditar = false;
            this.rota.navigate(['produto-detalhes', this.produto.id]);
        });
    }

    public deletar() {
        this.produtoService.delete(this.produto.id).then(() => {
            this.rota.navigate(['/tabs/home']);
        });
    }

    public async abrirAlerta() {
        const alert = await this.alerta.create({
            cssClass: 'my-custom-class',
            header: 'Deletar produto',
            subHeader: '',
            message: 'Você realmente deseja deletar este produto?',
            buttons: [
                {
                    text: 'Cancelar',
                    role: 'cancel',
                    cssClass: 'secondary',
                    id: 'cancel-button',
                    handler: (blah) => {
                        console.log('Confirm Cancel: blah');
                    }
                },
                {
                    text: 'Ok',
                    id: 'confirm-button',
                    handler: () => {
                        this.deletar();
                    }
                }
            ]
        });

        await alert.present();
    }
}
