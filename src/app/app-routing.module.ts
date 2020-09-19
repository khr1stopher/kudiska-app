import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from "../app/login/login.component"
import { RegisterComponent } from "../app/register/register.component"
import { RecoverPassComponent } from "../app/recover-pass/recover-pass.component"
import { DashboardComponent } from "../app/dashboard/dashboard.component"

const routes: Routes = [
  {path: "login", component: LoginComponent},
  {path: "register", component: RegisterComponent},
  {path: "recover", component: RecoverPassComponent},
  {path: "dashboard/:user", component: DashboardComponent},
  {path: "**", redirectTo: "login"}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
