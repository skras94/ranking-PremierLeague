import { RankingComponent } from './ranking/ranking.component';
import { InfoComponent } from './info/info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: InfoComponent},
  {path: 'info', component: InfoComponent},
  {path: 'ranking', component: RankingComponent},
  {path: '**', redirectTo: ''}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
