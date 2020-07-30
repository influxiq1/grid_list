import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-page1',
  templateUrl: './page1.component.html',
  styleUrls: ['./page1.component.css']
})
export class Page1sComponent implements OnInit, OnDestroy {

  public randomnumber: Array<object> = [];
  public lastexecutedtime = 0;
  public servicecallcount = 0;
  private randomsubscription: Subscription;

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.randomsubscription = this.myservice.getrandomnumber().subscribe((rand: number) => {
      const lastexecutedtime: number = Date.now();
      const p = 9;
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
  ngOnDestroy(): void {
    this.randomsubscription.unsubscribe();
  }
}
