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

    public getById(id: string) {
        return this.firestore.collection('produtos').doc(id).ref.get().then((item) => {
            if(item.exists){
                const produto = item.data();

                return {
                    id: item.id,
                    title: produto['title'],
                    subtitle: produto['subtitle'],
                    price: produto['price'] ,
                    image: produto['image']
                }
            }

            return new Produto();
        })
    }
}
