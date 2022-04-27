export class Endereco{
    public cep: String;
    public numero: String;
    public logradouro: String;
    public complemento: String;

    constructor()
    constructor(cep?: String,
        numero?: String,
        logradouro?: String,
        complemento?: String) {

        this.cep = cep ? cep : '';
        this.numero = numero ? numero : '';
        this.logradouro = logradouro ? logradouro : '';
        this.complemento = complemento ? complemento : '';
    }
}