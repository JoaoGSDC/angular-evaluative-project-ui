import { NgModule } from '@angular/core';
import { PagesComponent } from './pages.component';
import { SharedModule } from '../shared/shared.module';
import { PagesRoutingModule } from './pages-routing.module';

import { UsersComponent } from './users/users.component';

@NgModule({
  imports: [SharedModule, PagesRoutingModule],
  declarations: [PagesComponent, UsersComponent],
})
export class PagesModule {}
