import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

// Lazy load all page modules
const routes: Routes = [
  {
    path: 'camera',
    loadChildren: () => import('./modules/camera/camera.module').then(m => m.CameraModule)
  },
  {
    path: 'configuration',
    loadChildren: () => import('./modules/configuration/configuration.module').then(m => m.ConfigurationModule)
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
