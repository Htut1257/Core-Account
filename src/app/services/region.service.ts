import { HttpClient,HttpHeaders,HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Region } from '../models/region';
import { ApiSetting } from '../api-endpoint/app-api-setting';
@Injectable({
  providedIn: 'root'
})
export class RegionService {
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
  constructor(private http:HttpClient) { }

  getRegion():Observable<Region[]>{
    const uri=`${ApiSetting.InventoryApiEndPoint}/setup/get-region`
    let httpOption=this.HttpHeader('0010010');
    return this.http.get<Region[]>(uri,httpOption)
  }

}
