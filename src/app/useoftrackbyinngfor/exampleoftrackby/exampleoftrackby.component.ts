import { Component, OnInit, OnDestroy } from '@angular/core';
import { MyserviceService } from '../../jsmemoryleaks/service/myservice.service';
import { Subscription } from 'rxjs';
import { take } from 'rxjs/operators';

@Component({
  selector: 'app-exampleoftrackby',
  templateUrl: './exampleoftrackby.component.html',
  styleUrls: ['./exampleoftrackby.component.css']
})
export class ExampleoftrackbyComponent implements OnInit, OnDestroy {

  public randomnumber: Array<object> = [];
  // public lastexecutedtime = 0;
  // public servicecallcount = 0;
  // private randomsubscription: Subscription;

  constructor(private myservice: MyserviceService) { }

  ngOnInit() {

    this.randomnumber = [
      { id: 1, letter: 'A' },
      { id: 2, letter: 'B' },
      { id: 3, letter: 'C' }
    ];
  }

  trackByFn(index, item) {
    return item.id; // unique id corresponding to the item
  }
  updatedatattop() {
    this.randomnumber = [
      { id: 1, letter: 'A' },
      { id: 2, letter: 'B' },
      { id: 3, letter: 'C' },
      { id: 4, letter: 'D' }
    ];
  }
  ngOnDestroy(): void {
    // this.randomsubscription.unsubscribe();
  }
}

