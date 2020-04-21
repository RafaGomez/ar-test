import { NgModule, CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CameraComponent } from './pages/camera/camera.component';
import { Routes, RouterModule } from '@angular/router';

const routes: Routes = [
  {
    path: '',
    component: CameraComponent
  }
];

@NgModule({
  declarations: [CameraComponent],
  imports: [
    RouterModule.forChild(routes),
    CommonModule
  ],
  schemas: [CUSTOM_ELEMENTS_SCHEMA],
})
export class CameraModule { }
