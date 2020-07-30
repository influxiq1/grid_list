import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyserviceService } from '../../service/myservice.service';
import { Subscription, ReplaySubject } from 'rxjs';
import { takeUntil, take } from 'rxjs/operators';
// import 'rxjs/add/operator/takeUntil';
// import { constructor } from 'jasmine';

@Component({
  selector: 'app-takeuntilexample',
  templateUrl: './takeuntilexample.component.html',
  styleUrls: ['./takeuntilexample.component.css']
})
export class TakeuntilexampleComponent implements OnInit, OnDestroy {

  public randomnumber: Array<object> = [];
  public randomnumberone: Array<object> = [];
  public lastexecutedtime = 0;
  public servicecallcount = 0;
  // private randomsubscription: Subscription;
  private unsubscribe: ReplaySubject<boolean> = new ReplaySubject(1);

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.myservice.getrandomnumber().pipe(takeUntil(this.unsubscribe)).subscribe((rand: number) => {
      const lastexecutedtime: number = Date.now();
      const p = 9;
      this.randomnumber.push({
        randnumber: rand,
        serviceid: this.servicecallcount,
        lastexecutedtime,
        executiongap: lastexecutedtime - this.lastexecutedtime
      });
      this.lastexecutedtime = lastexecutedtime;
      console.log(`Rceived  random number with take until  ${rand} service id : ${this.servicecallcount} `);
    });

    this.myservice.getrandomnumber().pipe(take(3)).subscribe((rand: number) => {
      const lastexecutedtime: number = Date.now();
      this.randomnumberone.push({
        randnumber: rand,
        serviceid: this.servicecallcount,
        // lastexecutedtime,
        // executiongap: lastexecutedtime - this.lastexecutedtime
      });
      // this.lastexecutedtime = lastexecutedtime;
      console.log(`Rceived  random number with take  ${rand} service id : ${this.servicecallcount} `);
    });


    this.servicecallcount = this.myservice.getservicecallcount();
  }
  ngOnDestroy() {
    this.unsubscribe.next(true);
    this.unsubscribe.complete();
  }

}
