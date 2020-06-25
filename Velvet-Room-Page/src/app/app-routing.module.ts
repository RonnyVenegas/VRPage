import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { MainComponent } from './main/main.component';
import { PokemonViewComponent } from './pokemon-view/pokemon-view.component';


const routes: Routes = [
  {path: '', component: MainComponent},
  {path: 'pokemon-view', component: PokemonViewComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
