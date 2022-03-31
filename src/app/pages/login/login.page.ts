import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-login',
    templateUrl: './login.page.html',
    styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {

    email: String;
    senha: String;

    usuarios = [
        {
            email: "iuri@gmail.com",
            senha: "1234"
        },
        {
            email: "maria@gamil.com",
            senha: "4321"
        }
    ]

    image = "../../../assets/img/logo_size_invert.jpg";

    constructor() { }

    ngOnInit() {
    }

    login() {
        this.usuarios.forEach(usuario => {
            if (this.email == usuario.email && this.senha == usuario.senha) {
                console.log("Logou");
            }
        })
    }

}
