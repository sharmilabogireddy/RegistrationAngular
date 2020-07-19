import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { RegistrationComponent } from './Registration/Registration.component';
import { LoginComponent } from './login/login.component';
import { AdminComponent } from './admin/admin.component';
import { SearchComponent } from './search/search.component';
import { HomeComponent } from './home/home.component';
import { RoleEnum } from '@app/Models/RoleEnum';
import { AuthGuard } from '@app/_helpers/auth.guard';
import { ProviderComponent } from './provider/provider.component';

const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
    canActivate: [AuthGuard]
  },
  {
    path: 'login',
    component: LoginComponent
  },
  {
    path: 'registration',
    component: RegistrationComponent,
    canActivate: [AuthGuard],
    data: { roles: [RoleEnum.Admin] }
  },
  {
    path: 'provider',
    component: ProviderComponent,
    canActivate: [AuthGuard]
  },
  // otherwise redirect to home
  { path: '**', redirectTo: '' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
