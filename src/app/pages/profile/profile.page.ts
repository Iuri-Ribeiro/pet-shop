import { Component, NgZone, OnInit } from '@angular/core';
import { NavController } from '@ionic/angular';
import { RegisterPage } from '../register/register.page';
import { Storage } from '@capacitor/storage';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';

@Component({
    selector: 'app-profile',
    templateUrl: './profile.page.html',
    styleUrls: ['./profile.page.scss'],
})
export class ProfilePage implements OnInit {

    public logado: boolean = false;
    public admin: boolean = false;
    public cliente;

    constructor(
        private authService: AutenticacaoService,
    ) { }

    async ngOnInit() {
        const resp = await Storage.get({ key: 'meu-usuario' });
        this.cliente = JSON.parse(resp.value);

        if (this.cliente) {
            this.logado = true;
            this.admin = this.cliente.admin;
        }
        console.log(this.cliente.foto)
    }


    public sair() {
        this.authService.deslogar();
    }


}
