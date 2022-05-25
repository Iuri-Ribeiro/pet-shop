import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Cliente } from '../models/cliente.model';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    constructor(private firestore: AngularFirestore) { }

    public getByEmail(email: string) {
        return this.firestore.collection('clientes').doc(email).ref.get().then((item) => {
            if(item.exists){
                const cliente = item.data();
                return {
                    id: item.id,
                    nome: cliente['nome'],
                    email: cliente['email'],
                    senha: cliente['senha'],
                    cpf: cliente['cpf'],
                    cep: cliente['cep'],
                    numero: cliente['numero'],
                    logradouro: cliente['logradouro'],
                    complemento: cliente['complemento'],
                    bairro: cliente['bairro'],
                    cidade: cliente['cidade'],
                    estado: cliente['estados'],
                }
            }

            return new Cliente();
        })
    }

    public add(cliente: Cliente) {
        delete cliente.id;
        return this.firestore.collection('clientes').add({
            ...cliente
        });
    }

    public edit(cliente: Cliente) {

    }

    public delete(cliente: Cliente) {

    }
}