import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs/internal/Subject';
import { Subscription } from 'rxjs/internal/Subscription';
import { debounceTime, switchMap, mergeMap, exhaustMap, concatMap } from 'rxjs/operators';
import { MyserviceService } from '../../jsmemoryleaks/service/myservice.service';

@Component({
  selector: 'app-debouncetimeexample',
  templateUrl: './debouncetimeexample.component.html',
  styleUrls: ['./debouncetimeexample.component.css']
})
export class DebouncetimeexampleComponent implements OnInit {
  quantity: number;
  doublequantity = 0;
  modelChanged = new Subject<any>();
  // modelChanged1 = new Subject<any>();
  subscriptions: Subscription[] = [];
  subscriptioncount = 0;

  constructor(private myservice: MyserviceService) {
    this.subscriptions[this.subscriptioncount++] = this.modelChanged
      .pipe(
        // debounceTime(700),
        mergeMap(data => this.myservice.getsquarevalue(this.quantity))
        // concatMap(val => {
        //   // switchMap(val => {
        //   // mergeMap
        //   // exhaustMap
        //   // concatMap
        //   console.log(val, 'map');
        //   return this.myservice.getsquarevalue(this.quantity);
        // })
      )
      .subscribe((res) => {
        // this.searchResult$ = this.api.search(this.model);
        this.doublequantity = res;
        console.log(res, 'quantity in debounce block ');

      });
  }

  ngOnInit() {
  }
  inputchange() {
    // console.log(this.quantity, 'quantity');
    this.modelChanged.next();
    this.doublequantity = 0;
  }

}
