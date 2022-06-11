import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatFormFieldModule} from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { CustomersComponent } from './customers/customers.component';
import { CustomerSetupComponent } from './customer-setup/customer-setup.component';
import {MatDividerModule} from '@angular/material/divider';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import {MatTableModule} from '@angular/material/table';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatIconModule } from '@angular/material/icon';
import { MatSortModule } from '@angular/material/sort';

@NgModule({
  declarations: [
    CustomersComponent,
    CustomerSetupComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
    MatCardModule,
    MatButtonModule,
    MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule,
    MatDividerModule,
    FlexLayoutModule,
    FormsModule,
    MatTableModule,
    MatSelectModule,
    MatPaginatorModule,
    ReactiveFormsModule,
    MatIconModule,
    MatSortModule,

  ],
  exports:[
    CustomersComponent,
    CustomerSetupComponent
  ]
})
export class CustomerModule { }
