import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { Login1Component } from './login1/login1.component';
import { SampleComponent } from './sample/sample.component';
import { Signup1Component } from './signup1/signup1.component';
import { Login2Component } from './login2/login2.component';

const routes: Routes = [
  { path:'login1', component:Login1Component},
  { path:'sample', component:SampleComponent},
  { path:'signup1', component:Signup1Component},
  { path:'login2', component:Login2Component}
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
