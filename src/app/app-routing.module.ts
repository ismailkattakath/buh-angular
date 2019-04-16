import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ReportComponent } from './report/report.component';
import { StakeholdersComponent } from './stakeholders/stakeholders.component';
import { UpdateHierarchyComponent } from './administration/update-hierarchy/update-hierarchy.component';
import { UpdateHrComponent } from './administration/update-hr/update-hr.component';
import { UpdateLeComponent } from './administration/update-le/update-le.component';
import { NewComponent } from './change-request/new/new.component';
import { ViewAllComponent } from './change-request/view-all/view-all.component';
import { LegalEntityComponent } from './legal-entity/legal-entity.component';
import { PublishedComponent } from './hierarchy/published/published.component';
import { ProposedComponent } from './hierarchy/proposed/proposed.component';
import { CalendarComponent } from './hierarchy/calendar/calendar.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'hierarchy/published', component: PublishedComponent },
  { path: 'hierarchy/proposed', component: ProposedComponent },
  { path: 'hierarchy/calendar', component: CalendarComponent },
  { path: 'change-request/new', component: NewComponent },
  { path: 'change-request/view-all', component: ViewAllComponent },
  { path: 'legal-entity', component: LegalEntityComponent },
  { path: 'stakeholders', component: StakeholdersComponent },
  { path: 'report', component: ReportComponent },
  { path: 'administration/update-hierarchy', component: UpdateHierarchyComponent },
  { path: 'administration/update-hr', component: UpdateHrComponent },
  { path: 'administration/update-le', component: UpdateLeComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
