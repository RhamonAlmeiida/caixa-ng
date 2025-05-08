
import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Estoque } from '../../../models/estoque';


@Component({
  selector: 'app-cadastro-estoque',
  imports: [FormsModule],
  templateUrl: './estoque.component.html',
  styleUrl: './estoque.component.css'
})
export class CadastroEstoqueComponent {

  proximoId: number = 0;

  idParaEditar?: number;
  
  nome: string = "";
  
  categoria: string = "";
  
  quantidade: number = 0;
  
  dataEntrada: Date = new Date;
  
  emestoque: number = 0;
  
  produtos: Array<Estoque> = [];


  salvarEstoque(){
    if(this.nome.length < 3){
      alert(" Nome deve conter no mínimo 3 caracteres")
      return;
    }
  
    if(this.nome.length > 30){
      alert("Nome deve conter no máximo 30 caracteres")
      return;
    }
  
    if(this.idParaEditar == undefined){
      this.cadastrarEstoque();
    }else{
      this.editarEstoque();
    }
  
    this.nome = "";
    this.categoria = "";
    
   
  
  }
  
  editarEstoque(){
    let indiceEstoque = this.produtos.findIndex(x => x.id == this.idParaEditar);
    this.produtos[indiceEstoque].nome = this.nome;
    this.produtos[indiceEstoque].categoria = this.categoria;
    this.produtos[indiceEstoque].quantidade = this.quantidade;
    this.produtos[indiceEstoque].emestoque = this.emestoque;
  
    this.idParaEditar = undefined;
  }
  
  cadastrarEstoque(){
    this.proximoId++;
    let estoque = new Estoque(this.proximoId, this.nome, this.categoria, this.quantidade,  this.emestoque,);
    this.estoques.push(estoque);
  }
  apagar(estoque: Estoque){
    let comfirmacao =  confirm(`Deseja realmente apgar o produto'${estoque.nome}'?`);
    let indiceEstoque = this.estoques.findIndex(x => x.id == estoque.id);
    this.produtos.splice(indiceEstoque, 1) 
  }
  editar(estoque: Estoque){
    this.nome = produto.nome;
    this.idParaEditar = produto.id;
    this.categoria = produto.categoria;
    this.quantidade = produto.quantidade;
    this.preco = produto.preco;
    this.vencido = produto.vencido;
    this.estoque = produto.estoque;
  }
  
  }
  
