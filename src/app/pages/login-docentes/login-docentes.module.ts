import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { LoginDocentesPageRoutingModule } from './login-docentes-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { LoginDocentesPage } from './login-docentes.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    IonicModule,
    LoginDocentesPageRoutingModule
  ],
  declarations: [LoginDocentesPage]
})
export class LoginDocentesPageModule {}
