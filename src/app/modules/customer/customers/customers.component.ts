import { Component, OnInit,ViewChild } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { ActivatedRoute,Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {
  customers:Customer[]=[]
  @ViewChild(MatSort, {static: true}) sort!: MatSort;   
  displayedColumns:string[]=['code','name','active','action'];
  constructor(private customerService:CustomerService,private routes:Router) {}

  dataSource!: MatTableDataSource<Customer>;

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe((customers)=>{
      this.customers=customers
      this.dataSource=new MatTableDataSource(this.customers)
      this.dataSource.filterPredicate = (data: Customer, filter: string) =>
      data.traderName!.trim().toLowerCase().indexOf(filter) != -1;
      this.dataSource.sort = this.sort;
    })
   
  }

  getRowData(row:Customer){
    this.customerService._customer=row;
    this.routes.navigate(['/customer-setup']);
  }
 
  applyFilter(filterValue: Event) {
    let result = (filterValue.target as HTMLInputElement).value;
    this.dataSource.filter = result.trim().toLowerCase();
    //this.dataSource.filter.startsWith(result.trim().toLowerCase());
    //console.log(this.dataSource.filter);
    
  }

  CustomerSetup(){
    this.customerService._customer={}
    this.routes.navigate(['/customer-setup']);
  }

}
