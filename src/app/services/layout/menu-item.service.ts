import { Injectable } from '@angular/core';
import { Router,NavigationEnd,Event } from '@angular/router';
import { BehaviorSubject ,Observable,of} from 'rxjs';
import { HttpClient,HttpParams,HttpHeaders } from '@angular/common/http';
import { ApiSetting } from 'src/app/api-endpoint/app-api-setting';
import { MenuItem } from 'src/app/models/menuItem';
@Injectable({
  providedIn: 'root'
})

export class MenuItemService {
  public appDrawer:any;
  public isDrawer:boolean=false
  public currentUrl=new BehaviorSubject<string>('')
  constructor(private router:Router,private http:HttpClient) {
    this.router.events.subscribe((event:Event)=>{
      if(event instanceof NavigationEnd){
        this.currentUrl.next(event.urlAfterRedirects)
      }
    })
  }

  public closeNav(){
    this.appDrawer.close();
    this.isDrawer=false
  }

  public openNav(){
    if(this.isDrawer){
      this.appDrawer.close();
      this.isDrawer=false
    }else{
      this.appDrawer.open();
      this.isDrawer=true
    }
  }

  public HttpHeader(headerParam:string){
    let httpOptions={
      headers:new HttpHeaders({
        'Content-Type':'application/json',
        'Access-Control-Allow-Origin': '*',
        'Access-Control-Allow-Headers': 'Content-Type',
        'Access-Control-Allow-Methods': 'GET,POST,OPTIONS,DELETE,PUT',
      }),
      params:new HttpParams().set('roleCode',headerParam)
    }
    return httpOptions;
  }

  getMenuItem(data:string):Observable<MenuItem[]>{
    const uri=`${ApiSetting.UserApiEndPoint}/user/get-privilege-role-menu-tree/`
    let httpOption=this.HttpHeader('012022-001');
    return this.http.get<MenuItem[]>(uri,httpOption);
  }

}
