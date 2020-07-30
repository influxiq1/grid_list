import { Component, OnInit } from '@angular/core';
import { MetaserviceService } from '../metaservice/metaservice.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private metaservice: MetaserviceService) { }

  ngOnInit() {
    const data: object = {
      title: 'Test title 1 ',
      og_url: 'https://www.betoparedes.com/ ',
      og_type: 'blog',
      og_title: 'Angular Example 1'
    };
    this.metaservice.setmeta(data);
  }

}
