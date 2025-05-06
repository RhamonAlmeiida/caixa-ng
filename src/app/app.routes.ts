import { Routes } from '@angular/router';
import { CadastroProdutoComponent } from './components/produtos/cadastro-produto/cadastro-produto.component';
import { CadastroReceitaComponent } from './components/receitas/cadastro-receita/cadastro-receita.component';
import { ClienteComponent } from './components/cliente/cliente/cliente.component';

export const routes: Routes = [
    {path: "produtos", component: CadastroProdutoComponent},
    {path: "receitas", component: CadastroReceitaComponent},
    {path: "clientes", component: ClienteComponent}
];
