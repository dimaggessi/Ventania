import { NgModule } from '@angular/core';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';

@NgModule({
  declarations: [
    TopMenuComponent
  ],
  imports: [
    CommonModule,
    RouterModule
  ],
  exports: [
    TopMenuComponent
  ]
})
export class SharedModule { }
