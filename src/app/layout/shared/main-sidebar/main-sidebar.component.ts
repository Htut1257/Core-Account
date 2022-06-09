import { Component, OnInit ,Input,HostBinding} from '@angular/core';
import { MenuItem } from 'src/app/models/menuItem';
import { Router } from '@angular/router';
import { MenuItemService } from 'src/app/services/layout/menu-item.service';

import {animate,state,style,transition,trigger,} from '@angular/animations';

@Component({
  selector: 'app-main-sidebar',
  templateUrl: './main-sidebar.component.html',
  styleUrls: ['./main-sidebar.component.css'],
  animations:[
    trigger('indicatorRotate', [
      state('collapsed', style({ transform: 'rotate(0deg)' })),
      state('expanded', style({ transform: 'rotate(180deg)' })),
      transition(
        'expanded <=> collapsed',
        animate('225ms cubic-bezier(0.4,0.0,0.2,1)')
      ),
    ]),
  ],
})
export class MainSidebarComponent implements OnInit {
  expanded:boolean=false
  @Input() item!:MenuItem
  @Input() depth!:number
  @HostBinding('attr.aria-expanded') ariaExpanded = this.expanded;
  constructor(public menuService:MenuItemService,public route:Router) {
    if(this.depth===undefined){
      this.depth=0;
    }
   }

  ngOnInit(): void {
    this.menuService.currentUrl.subscribe((url:string)=>{
      if(this.item.child && url){
       // this.expanded = url.indexOf(`/${this.Namess}/${this.item.menuName}`) === 0;
       this.expanded = url.indexOf(`/${this.item.menuName?.toLowerCase()}`) === 0;
        this.ariaExpanded = this.expanded;
      }
    })
  }

  onItemSelected(item:MenuItem){
    if (!item.child || !item.child.length) {
      //let uri=this.Namess+'/'+item.menuName
      let uri=item.menuName?.toLowerCase()
      this.route.navigate([uri]);
      this.menuService.closeNav();
    }
    if (item.child && item.child.length) {
      this.expanded = !this.expanded;
    }
  }

}
