import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './component/shared/header/header.component';
import { FooterComponent } from './component/shared/footer/footer.component';
import { NavComponent } from './component/shared/nav/nav.component';
import { SolutionsComponent } from './pheonix/solutions/solutions.component';
import { EnterpriseComponent } from './pheonix/enterprise/enterprise.component';
import { BodyComponent } from './component/shared/body/body.component';
import { SupportComponent } from './pheonix/support/support.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    NavComponent,
    SolutionsComponent,
    EnterpriseComponent,
    BodyComponent,
    SupportComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
