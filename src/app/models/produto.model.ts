export class Produto {
    public id: string;
    public title: string;
    public subtitle: string;
    public price: number;
    public image: string;

    constructor()
    constructor(id?: string,
        title?: string,
        subtitle?: string,
        price?: number,
        image?: string) {

        this.id = id ? id : '';
        this.title = title ? title : '';
        this.subtitle = subtitle ? subtitle : '';
        this.price = price ? price : 0;
        this.image = image ? image : '';
    }

}