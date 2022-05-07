export class Endereco{
    public id: string
    public cep: string;
    public numero: string;
    public logradouro: string;
    public complemento: string;
    public bairro: string;
    public cidade: string;
    public estado: string;

    constructor()
    constructor(
        id?: string,
        cep?: string,
        numero?: string,
        logradouro?: string,
        complemento?: string,
        bairro?: string,
        cidade?: string,
        estado?: string) {

        this.id = id ? id : '';
        this.cep = cep ? cep : '';
        this.numero = numero ? numero : '';
        this.logradouro = logradouro ? logradouro : '';
        this.complemento = complemento ? complemento : '';
        this.bairro = bairro ? bairro : '';
        this.cidade = cidade ? cidade : '';
        this.estado = estado ? estado : '';
    }
}