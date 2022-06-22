import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
    selector: 'app-register',
    templateUrl: './register.page.html',
    styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
    public cliente: Cliente = new Cliente();
    public senhaConfirmar: string = '';

    constructor(
        private authService: AutenticacaoService,
        private rota: Router,
        private clienteService: ClienteService) { }

    ngOnInit() {
    }

    public registrar() {
        this.authService.registrar(this.cliente).then(usuario => {
            const uid = usuario.user.uid;

            this.cliente.uid = uid;
            this.cliente.admin = false;

            this.clienteService.add(this.cliente).then(() => {
                this.rota.navigate(['/login']);
            });

        })
    }

}
