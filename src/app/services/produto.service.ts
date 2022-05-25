import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/compat/firestore';


import { Produto } from '../models/produto.model';

@Injectable({
    providedIn: 'root'
})
export class ProdutoService {


    constructor(private firestore: AngularFirestore) { }

    public getAll(){
        return this.firestore.collection('produtos').snapshotChanges();
    }

    public getById(id: string): Promise<Produto> {
        return this.firestore.collection('produtos').doc(id).ref.get().then((item) => {
            if(item.exists){
                const produto = item.data();

                return {
                    id: item.id,
                    title: produto['title'],
                    subtitle: produto['subtitle'],
                    price: produto['price'] ,
                    image: produto['image']
                };
            }

            return new Produto();
        })
    }

    public add(produto: Produto): Promise<unknown>{
        delete produto.id;
        return this.firestore.collection('produtos').add({
            ...produto
        });
    }

    public edit(produto: Produto): Promise<unknown>{
        return this.firestore.doc(`produtos/${produto.id}`).update({
            ...produto
        });
    }

    public delete(id: string): Promise<void>{
        return this.firestore.doc(`produtos/${id}`).delete();
    }
}