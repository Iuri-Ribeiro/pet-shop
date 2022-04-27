import { Endereco } from "./endereco.model";

export class Cliente{
    public id: number;
    public nome: String;
    public email: String;
    public senha: String;
    public enderecos: Array<Endereco>;

    constructor()
    constructor(id?: number,
        nome?: String,
        email?: String,
        senha?: String,
        enderecos?: Array<Endereco>) {

        this.id = id ? id : 0;
        this.nome = nome ? nome : '';
        this.email = email ? email : '';
        this.senha = senha ? senha : '';
        this.enderecos = enderecos ? enderecos : [];
    }
}