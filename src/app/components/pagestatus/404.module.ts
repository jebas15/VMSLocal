import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { PageNotFoundComponent } from "./404.component";

// Routes
export const ROUTES: Routes = [
  {
    path: '',
  	data: {
        title: '404 Not Found page',
        urls: [{title: 'Acceleration | VMS Dashboard', url: '/'},{title: 'Home'},{title: '404 Not Found page'}]
      },
  	component: PageNotFoundComponent
  }
];

@NgModule({
  declarations: [ PageNotFoundComponent ],
  imports: [ RouterModule.forChild(ROUTES) ]
})

export class PageNotFoundModule {}
