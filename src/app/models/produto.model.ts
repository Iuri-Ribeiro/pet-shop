export class Produto {
    public id: string;
    public title: string;
    public subtitle: string;
    public price: number;
    public image: string;
    public categoria: string;

    constructor()
    constructor(id?: string,
        title?: string,
        subtitle?: string,
        price?: number,
        image?: string,
        categoria?: string) {

        this.id = id ? id : '';
        this.title = title ? title : '';
        this.subtitle = subtitle ? subtitle : '';
        this.price = price ? price : 0;
        this.image = image ? image : '';
        this.categoria = categoria ? categoria : '';
    }

}
