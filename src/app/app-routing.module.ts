import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BodyComponent } from './component/shared/body/body.component';
import { EnterpriseComponent } from './pheonix/enterprise/enterprise.component';
import { SolutionsComponent } from './pheonix/solutions/solutions.component';
import { SupportComponent } from './pheonix/support/support.component';

const routes: Routes = [
  {
    path: '', component:BodyComponent
  },

  {
    path: 'solutionsLink', component:SolutionsComponent
  },
  {
    path: 'enterpriseLink', component:EnterpriseComponent
  },
  {
    path: 'supportLink' , component:SupportComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
