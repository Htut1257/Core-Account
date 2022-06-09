import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import {  Observable,of } from 'rxjs';
import { Customer } from '../models/customer';
import { ApiSetting } from '../api-endpoint/app-api-setting';
@Injectable({
  providedIn: 'root'
})
export class CustomerService {
  public _customers: Customer[]=[];
  public _customer:Customer={};
  constructor(private http:HttpClient) { }

  public HttpHeader(headerParam:string){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      }),
      params:new HttpParams().set('compCode',headerParam)
    }
    return httpOptions;
  }

  getCustomer():Observable<Customer[]>{
    return new Observable(observable=>{
      if(this._customers.length>1){
       // console.log(this._customers)
        observable.next(this._customers);
        console.log("service called")
        return observable.complete();
      }
      const uri=`${ApiSetting.InventoryApiEndPoint}/setup/get-trader/`
      let httpOption=this.HttpHeader('0010010');
      console.log("api called")
      this.http
        .get<Customer[]>(uri,httpOption)
        .subscribe((customers:Customer[])=>{
          this._customers=customers
          observable.next(customers)
          observable.complete()
        })
      //return this.http.get<Customer[]>(uri,httpOption);
    })
  }

  addCustomer(customer:Customer):Observable<Customer>{
    const uri=`${ApiSetting.InventoryApiEndPoint}/setup/save-customer`
    let httpOption={
      headers:new HttpHeaders({
        'Content-Type':'application/json'
      }),
    }
    return this.http.post<Customer>(uri,customer,httpOption)
  }

}
