import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'home' },
  {
    path: 'home',
    loadChildren: () =>
      import('./components/home/home.module').then((m) => m.HomeModule),
  },
  {
    path: 'past-result',
    loadChildren: () =>
      import('./components/past-result/past-result.module').then(
        (m) => m.PastResultModule
      ),
  },
  {
    path: 'players',
    loadChildren: () =>
      import('./components/players/players.module').then(
        (m) => m.PlayersModule
      ),
  },
  {
    path: 'event',
    loadChildren: () =>
      import('./components/event/event.module').then((m) => m.EventModule),
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
