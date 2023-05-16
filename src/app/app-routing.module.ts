import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { FixtureComponent } from './components/fixture/fixture.component';
import { BuilderBetsComponent } from './components/builder-bets/builder-bets.component';
import { ErrorComponent } from './components/error/error.component';

const routes: Routes = [
  { path: '', component: FixtureComponent, pathMatch: 'full' },
  { path: 'fixtures', component: FixtureComponent },
  { path: 'bets', component: BuilderBetsComponent },
  { path: '**', component: ErrorComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
