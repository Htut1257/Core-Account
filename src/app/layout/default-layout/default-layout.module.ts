
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SharedModule } from '../shared/shared.module';
import { MatDividerModule } from '@angular/material/divider';
import { MatListModule } from "@angular/material/list";
import { DefaultLayoutComponent } from './default-layout.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {ScrollingModule} from '@angular/cdk/scrolling';

@NgModule({
  declarations: [
    DefaultLayoutComponent
  ],
  imports: [
    CommonModule,
    SharedModule,
    MatSidenavModule,
    MatDividerModule,
    MatListModule,
    RouterModule,
    ScrollingModule
  ]
})
export class DefaultLayoutModule { }
