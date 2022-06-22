import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { AutenticacaoService } from 'src/app/services/autenticacao.service';
import { ClienteService } from 'src/app/services/cliente.service';
import { Storage } from '@capacitor/storage';
import { Router } from '@angular/router';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    public cliente: Cliente = new Cliente();
    image = "../../../assets/img/logo_size_invert.jpg";

    constructor(
        private authService: AutenticacaoService,
        private clienteService: ClienteService,
        private rota: Router) { }

    ngOnInit() {
    }

    login() {
        if (this.cliente.email && this.cliente.senha) {
            this.authService.logar(this.cliente).then(usuarioDOC => {
                const uid = usuarioDOC.user.uid;

                this.authService.setAutenticado(true);

                this.clienteService.getByUID(uid).subscribe(usuarioDB => {
                    const [usuarioLogado] = usuarioDB;

                    const usuario = {
                        id: usuarioLogado.payload.doc.id,
                        uid: usuarioLogado.payload.doc.data()['uid'],
                        admin: usuarioLogado.payload.doc.data()['admin'],
                        nome: usuarioLogado.payload.doc.data()['nome'],
                        email: usuarioLogado.payload.doc.data()['email'],
                        senha: usuarioLogado.payload.doc.data()['senha'],
                        cpf: usuarioLogado.payload.doc.data()['cpf'],
                        cep: usuarioLogado.payload.doc.data()['cep'],
                        numero: usuarioLogado.payload.doc.data()['numero'],
                        logradouro: usuarioLogado.payload.doc.data()['logradouro'],
                        complemento: usuarioLogado.payload.doc.data()['complemento'],
                        bairro: usuarioLogado.payload.doc.data()['bairro'],
                        cidade: usuarioLogado.payload.doc.data()['cidade'],
                        estado: usuarioLogado.payload.doc.data()['estado']
                    }

                    Storage.set({
                        key: 'meu-usuario',
                        value: JSON.stringify(usuario)
                    }).then((resposta) => {
                        this.rota.navigate(['/tabs/home']);
                    });
                });

            });
        }
    }

}
