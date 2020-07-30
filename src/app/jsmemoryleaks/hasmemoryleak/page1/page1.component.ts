import { Component, OnInit } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { MetaserviceService } from '../../../metaservice/metaservice.service';
@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1Component implements OnInit {
  public randomnumber: Array<object> = [];
  public lastexecutedtime = 0;
  public servicecallcount = 0;

  constructor(private myservice: MyserviceService, private metaservive: MetaserviceService) { }

  ngOnInit() {
    this.metaservive.setmeta({});
    this.myservice.getrandomnumber().subscribe((rand: number) => {
      const lastexecutedtime: number = Date.now();
      this.randomnumber.push({
        randnumber: rand,
        serviceid: this.servicecallcount,
        lastexecutedtime,
        executiongap: lastexecutedtime - this.lastexecutedtime
      });
      this.lastexecutedtime = lastexecutedtime;
      console.log(`Rceived  random number ${rand} service id : ${this.servicecallcount} `);
    });
    this.servicecallcount = this.myservice.getservicecallcount();
  }


}
