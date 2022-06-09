import { Component, OnInit } from '@angular/core';
import { MenuItemService } from 'src/app/services/layout/menu-item.service';
@Component({
  selector: 'app-main-header',
  templateUrl: './main-header.component.html',
  styleUrls: ['./main-header.component.css']
})
export class MainHeaderComponent implements OnInit {
  
  constructor(public menuService:MenuItemService) { }

  ngOnInit(): void {
  }

}
