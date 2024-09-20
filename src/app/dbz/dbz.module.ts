import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AddCharacterComponent } from './components/add-character/add-character.component';
import { MainPageComponent } from './pages/main-page.component';
import { ListComponent } from './components/list/list.component';

@NgModule({
  declarations: [
    AddCharacterComponent,
    ListComponent,
    MainPageComponent
  ],
  exports: [
    AddCharacterComponent,
    ListComponent,
    MainPageComponent
  ],
  imports: [
    CommonModule
  ]
})
export class DbzModule { }
