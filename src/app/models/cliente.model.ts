import { Endereco } from "./endereco.model";

export class Cliente{
    public id: string;
    public nome: string;
    public email: string;
    public senha: string;
    public cpf: string;
    public enderecos: Array<Endereco>;

    constructor()
    constructor(id?: string,
        nome?: string,
        email?: string,
        senha?: string,
        enderecos?: Array<Endereco>) {

        this.id = id ? id : '';
        this.nome = nome ? nome : '';
        this.email = email ? email : '';
        this.senha = senha ? senha : '';
        this.enderecos = enderecos ? enderecos : [];    
    }
}