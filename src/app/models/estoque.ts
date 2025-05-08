export class Estoque{
    id: number ;
    nome: string;
    categoria: string;
    quantidade: number;
    dataEntrada: Date;
    emestoque: number;

    constructor(id: number, nome: string, categoria: string, quantidade: number, dataEntrada: Date, emestoque: number,){
        this.id = id;
        this.nome = nome;
        this.categoria = categoria;
        this.quantidade = quantidade;
        this.dataEntrada = dataEntrada;
        this.emestoque = emestoque;
    }

}