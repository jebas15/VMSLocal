import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Containers
import { GridLayoutComponent } from "./gridlayout.component";

// Routes
export const ROUTES: Routes = [
  {
    path: '',
  	data: {
        title: 'Grid Layout page',
        urls: [{title: 'Acceleration | VMS Dashboard', url: '/'},{title: 'Home'},{title: 'Grid Layout page'}]
      },
  	component: GridLayoutComponent
  }
];

@NgModule({
  declarations: [ GridLayoutComponent ],
  imports: [ RouterModule.forChild(ROUTES) ]
})

export class GridLayoutModule {}
