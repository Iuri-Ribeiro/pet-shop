import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

import { Cliente } from '../models/cliente.model';

@Injectable({
    providedIn: 'root'
})
export class ClienteService {

    constructor(private firestore: AngularFirestore) { }

    public getByUID(uid: string) {
        return this.firestore
            .collection(
                'clientes',
                ref =>
                    ref.where('uid', '==', uid)
            ).snapshotChanges();
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