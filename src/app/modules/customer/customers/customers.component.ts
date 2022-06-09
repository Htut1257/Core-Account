import { Component, OnInit,ViewChild } from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { Customer } from 'src/app/models/customer';
import { ActivatedRoute,Router } from '@angular/router';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';
import { Event } from '@angular/router';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})

export class CustomersComponent implements OnInit {
  customers:Customer[]=[]
  displayedColumns:string[]=['code','name','active','action'];
  constructor(private customerService:CustomerService,private routes:Router) {}
  dataSource!: MatTableDataSource<Customer>;
  @ViewChild(MatPaginator, {static: true}) paginator!: MatPaginator;
  @ViewChild(MatSort, {static: true}) sort!: MatSort;

  ngOnInit(): void {
    this.customerService.getCustomer().subscribe((customers)=>{
      this.customers=customers
      this.dataSource=new MatTableDataSource(this.customers)
      this.dataSource.sort = this.sort;
    })
  }

  getRowData(row:Customer){
    this.customerService._customer=row;
    this.routes.navigate(['/customer-setup']);
  }
 
  applyFilter(event:any){
    let filterValue=(event.target as HTMLInputElement).value;
    console.log(filterValue)
    this.dataSource.filter=filterValue.trim().toLowerCase();
  }

}
