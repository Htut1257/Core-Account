import { Component, OnInit} from '@angular/core';
import { CustomerService } from 'src/app/services/customer.service';
import { RegionService } from 'src/app/services/region.service';
import { Customer } from 'src/app/models/customer';
import { Region } from 'src/app/models/region';
import { Validators,UntypedFormControl,UntypedFormGroup} from '@angular/forms';
@Component({
  selector: 'app-customer-setup',
  templateUrl: './customer-setup.component.html',
  styleUrls: ['./customer-setup.component.css']
})

export class CustomerSetupComponent implements OnInit { 
  //for Form Validation
  customerForm=new UntypedFormGroup({
    userCode: new UntypedFormControl('',Validators.required),
    traderName: new UntypedFormControl('',Validators.required)
  })

  constructor(private customerService:CustomerService,private regionService:RegionService) { }

  customer:Customer={}
  region:Region[]=[]
  selectedRegion:Region={}



  ngOnInit(): void {
    this.customer=this.customerService._customer
    this.regionService.getRegion().subscribe((regions)=>{
      this.region=regions
    })
  }

  //comapre object in select option tag
  compareFn(c1: Region, c2: Region): boolean {
    return c1 && c2 ? c1.regCode === c2.regCode : c1 === c2;
  }

  //Save Customer Data (Create and Edit)
  onSaveCustomer(){
    const Customer={
      code:this.customer.code?this.customer.code:'',
      compCode:'0010010',
      //macid:1,
      userCode:this.customer.userCode?this.customer.userCode:'',
      traderName:this.customer.traderName?this.customer.traderName:'',
      contactPerson:this.customer.contactPerson?this.customer.contactPerson:'',
      phone:this.customer.phone?this.customer.phone:'',
      email:this.customer.email?this.customer.email:'' ,
      address:this.customer.address?this.customer.address:'',
      creditLimit:this.customer.creditLimit?this.customer.creditLimit:0,
      creditTerm:this.customer.creditTerm?this.customer.creditTerm:'',
      multi:this.customer.multi?this.customer.multi:false,
      cashDown:this.customer.cashDown?this.customer.cashDown:false,
      active:this.customer.active?this.customer.active:false,
      type:"CUS",
      region:this.customer.region
    }

    this.customerService.addCustomer(Customer).subscribe((customer)=>{
      this.customerService._customers.push(customer);
    })
  }

  //Clear Customer Data
  onClearCustomer(){
    let sysCode=this.customer.code
    this.customer={};
    this.customer.code=sysCode
  }

}
