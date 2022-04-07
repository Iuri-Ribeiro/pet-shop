export class Produto {
    public id: number;
    public title: string;
    public subtitle: string;
    public price: string;
    public image: string;

    constructor()
    constructor(id?: number,
        title?: string,
        subtitle?: string,
        price?: string,
        image?: string) {

        this.id = id ? id : 0;
        this.title = title ? title : '';
        this.subtitle = subtitle ? subtitle : '';
        this.price = price ? price : '';
        this.image = image ? image : '';
    }

}