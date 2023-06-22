import { NgModule } from '@angular/core';
import { TopMenuComponent } from './components/top-menu/top-menu.component';
import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    TopMenuComponent
  ],
  imports: [
    CommonModule
  ],
  exports: [
    TopMenuComponent
  ]
})
export class SharedModule { }
