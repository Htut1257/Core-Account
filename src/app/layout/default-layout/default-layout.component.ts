import { Component, OnInit,ViewEncapsulation,ElementRef,AfterViewInit,ViewChild } from '@angular/core';
import {VERSION} from '@angular/material/core';
import { MenuItemService } from 'src/app/services/layout/menu-item.service';
import { MenuItem } from 'src/app/models/menuItem';
@Component({
  selector: 'app-default-layout',
  templateUrl: './default-layout.component.html',
  styleUrls: ['./default-layout.component.css']
})
export class DefaultLayoutComponent implements AfterViewInit {
  @ViewChild('appDrawer') appDrawer!: ElementRef;
  constructor(private menuService:MenuItemService) { }
  version=VERSION
  menuItems!:MenuItem[]
  ngOnInit(): void {
    this.menuService.getMenuItem("").subscribe((menuItems)=>{
      this.menuItems=menuItems
      console.log(this.menuItems)
    })
  }

  ngAfterViewInit(){
    this.menuService.appDrawer=this.appDrawer
  }

}
