import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { TreeModule } from 'angular-tree-component';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { MenuComponent } from './header/menu/menu.component';
import { ReportComponent } from './report/report.component';
import { StakeholdersComponent } from './stakeholders/stakeholders.component';
import { UpdateHrComponent } from './administration/update-hr/update-hr.component';
import { UpdateLeComponent } from './administration/update-le/update-le.component';
import { NewComponent } from './change-request/new/new.component';
import { ViewAllComponent } from './change-request/view-all/view-all.component';
import { LegalEntityComponent } from './legal-entity/legal-entity.component';
import { PublishedComponent } from './hierarchy/published/published.component';
import { ProposedComponent } from './hierarchy/proposed/proposed.component';
import { CalendarComponent } from './hierarchy/calendar/calendar.component';
import { UpdateHierarchyComponent } from './administration/update-hierarchy/update-hierarchy.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    MenuComponent,
    ReportComponent,
    StakeholdersComponent,
    UpdateHrComponent,
    UpdateLeComponent,
    NewComponent,
    ViewAllComponent,
    LegalEntityComponent,
    PublishedComponent,
    ProposedComponent,
    CalendarComponent,
    UpdateHierarchyComponent
  ],
  imports: [
    NgbModule,
    BrowserModule,
    AppRoutingModule,
    TreeModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
