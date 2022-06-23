export class Cliente {
    public id: string;
    public uid: string;
    public admin: boolean;
    public nome: string;
    public email: string;
    public senha: string;
    public cpf: string;
    public cep: string;
    public numero: string;
    public logradouro: string;
    public complemento: string;
    public bairro: string;
    public cidade: string;
    public estado: string;
    public foto: string;

    constructor()
    constructor(id?: string,
        nome?: string,
        email?: string,
        senha?: string,
        cpf?: string,
        cep?: string,
        numero?: string,
        logradouro?: string,
        complemento?: string,
        bairro?: string,
        cidade?: string,
        estado?: string,
        uid?: string,
        foto?: string,
        admin?: boolean,
    ) {

        this.id = id ? id : '';
        this.nome = nome ? nome : '';
        this.email = email ? email : '';
        this.senha = senha ? senha : '';
        this.cpf = cpf ? senha : '';
        this.cep = cep ? cep : '';
        this.numero = numero ? numero : '';
        this.logradouro = logradouro ? logradouro : '';
        this.complemento = complemento ? complemento : '';
        this.bairro = bairro ? bairro : '';
        this.cidade = cidade ? cidade : '';
        this.estado = estado ? estado : '';
        this.uid = uid ? uid : '';
        this.foto = foto ? foto : '';
        this.admin = admin ? admin : false;
    }
}