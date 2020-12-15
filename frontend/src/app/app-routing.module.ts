import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClienteViewComponent } from './components/cliente/cliente-view/cliente-view.component';
import { ClienteComponent } from './components/cliente/cliente.component';
import { ContaViewComponent } from './components/conta/conta-view/conta-view.component';
import { ContaComponent } from './components/conta/conta.component';
import { DepositoViewComponent } from './components/deposito/deposito-view/deposito-view.component';
import { DepositoComponent } from './components/deposito/deposito.component';
import { ExtratoComponent } from './components/extrato/extrato.component';
import { HomeComponent } from './components/home/home.component';
import { LoginComponent } from './components/login/login.component';
import { recuperarSenhaComponent } from './components/recuperarSenha/recuperarSenha.component';
import { SaqueViewComponent } from './components/saque/saque-view/saque-view.component';
import { SaqueComponent } from './components/saque/saque.component';
import { TransferenciaViewComponent } from './components/transferencia/transferencia-view/transferencia-view.component';
import { TransferenciaComponent } from './components/transferencia/transferencia.component';
import { UsuarioComponent } from './components/usuario/usuario.component';

const routes: Routes = [
  {
    path: "home",
    component: HomeComponent
  },
  {
    path: "clientes",
    component: ClienteComponent
  },
  {
    path: "cliente-view",
    component: ClienteViewComponent
  },
  {
    path: "contas",
    component: ContaComponent
  },
  {
    path: "conta-view",
    component: ContaViewComponent
  },
  {
    path: "",
    component: LoginComponent
   },
   {
    path: "usuario",
    component: UsuarioComponent
  },
  {
    path: "recuperarSenha",
    component: recuperarSenhaComponent
  },
  {
    path: "depositos",
    component: DepositoComponent
  },
  {
    path: "deposito-view",
    component: DepositoViewComponent
  },
  {
    path: "saques",
    component: SaqueComponent
  }, 
  {
    path: "saque-view",
    component: SaqueViewComponent
  },
  {
    path: "transferencias",
    component: TransferenciaComponent
  },
  {
    path: "transferencia-view",
    component: TransferenciaViewComponent
  },
  {
    path: "extrato",
    component: ExtratoComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
