import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ConfigurationComponent } from './pages/configuration/configuration.component';
import { RouterModule, Routes } from '@angular/router';
import { DxButtonModule, DxPopupModule } from 'devextreme-angular';

const routes: Routes = [
  {
    path: '',
    component: ConfigurationComponent
  }
];

@NgModule({
  declarations: [
    ConfigurationComponent,
  ],
  imports: [
    RouterModule.forChild(routes),
    CommonModule,
    DxButtonModule,
    DxPopupModule
  ]
})
export class ConfigurationModule { }
