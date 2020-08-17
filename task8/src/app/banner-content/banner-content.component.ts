import { Component, OnInit } from '@angular/core';
import { DataService } from '../data.service';

@Component({
  selector: 'app-banner-content',
  templateUrl: './banner-content.component.html',
  styleUrls: ['./banner-content.component.scss']
})
export class BannerContentComponent implements OnInit {

  constructor(private data: DataService) { }
  filterPost='';
  bodyguards= [];

  ngOnInit(): void {
    this.data.getBodyguards().subscribe(
      data => this.bodyguards = data 
)
  }

}
