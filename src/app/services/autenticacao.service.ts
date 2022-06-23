import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';

import { Cliente } from 'src/app/models/cliente.model';

@Injectable({
    providedIn: 'root'
})
export class AutenticacaoService {
    private isAutenticado: boolean = false;

    constructor(private rota: Router, private fireAuth: AngularFireAuth) { }

    public logar(cliente: Cliente) {
        return this.fireAuth.signInWithEmailAndPassword(cliente.email, cliente.senha);
    }

    public registrar(cliente: Cliente) {
        return this.fireAuth
            .createUserWithEmailAndPassword(cliente.email, cliente.senha);
    }

    public deslogar() {
        this.isAutenticado = false;
        return this.fireAuth.signOut();
    }

    public isLogado(): boolean {
        return this.isAutenticado;
    }

    public setAutenticado(value: boolean) {
        this.isAutenticado = value;
    }
}