import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

// import { UsersComponent } from './pages/users/users.component';

const routes: Routes = [
  // { path: '', redirectTo: 'gallery', pathMatch: 'prefix' },
  // {
  //   path: 'users',
  //   component: UsersComponent,
  // },
  // {
  //   path: 'posts/:id',
  //   component: PostsComponent,
  // },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
