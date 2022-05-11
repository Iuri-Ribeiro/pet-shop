import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/services/cliente.service';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email: string;
    senha: string;
    usuario;

    image = "../../../assets/img/logo_size_invert.jpg";

    constructor(private clienteService: ClienteService) { }

    ngOnInit() {
    }

    login() {
        
    }

}
