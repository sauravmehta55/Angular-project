import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AllUsersComponent } from './all-users/all-users.component';
import { MehtahotelComponent } from './mehtahotel/mehtahotel.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  {
    path :"",redirectTo :"mehtahotel" ,pathMatch :"full"
  },
  {
    path:"search" , component : SearchComponent
  },
  {
    path:"all-users" , component : AllUsersComponent
  },
  {
    path:"register" , component : RegisterComponent
  },
  {
    path:"mehtahotel" , component : MehtahotelComponent
  },
  {
    path:"**" , component : MehtahotelComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
