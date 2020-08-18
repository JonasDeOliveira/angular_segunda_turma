import { NgModule } from '@angular/core';
import { Routes, RouterModule} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ClienteComponent } from './cliente/cliente.component';
import { ProdutoComponent } from './produto/produto.component';

export const routes: Routes = [
    {
        path: '',
        component: HomeComponent
    },
    {
        path: 'clientes',
        component: ClienteComponent
    },
    {
        path: 'produtos',
        component: ProdutoComponent
    }
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports:[RouterModule]
})

export class AppRoutingModule {}