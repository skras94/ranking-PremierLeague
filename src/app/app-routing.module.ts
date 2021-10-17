import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { RankingComponent } from './components/ranking/ranking.component';
import { InfoComponent } from './components/info/info.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {path: '', component: InfoComponent},
  {path: 'info', component: InfoComponent},
  {path: 'ranking', component: RankingComponent},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
