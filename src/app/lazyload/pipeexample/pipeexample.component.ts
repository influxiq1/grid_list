import { Component, OnInit } from '@angular/core';
import { MyserviceService } from 'src/app/jsmemoryleaks/service/myservice.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-pipeexample',
  templateUrl: './pipeexample.component.html',
  styleUrls: ['./pipeexample.component.css']
})
export class PipeexampleComponent implements OnInit {
  public randomnumber: Array<object> = [];
  public lastexecutedtime = 0;
  public servicecallcount = 0;
  public sdata:Observable<any>;
  public sdata1:Observable<any>;
  rangeval:number=10;


  private dateVal: Date = new Date();
  private jsonVal: Object = { moo: 'foo', goo: { too: 'new' } };
  a: number = 0.259;
  b: number = 1.3495;
  today: number = Date.now();
  value!: string;
  change(value: string) {
    this.value = value;
  }
  collection: string[] = ['a', 'b', 'c', 'd'];
  
  object: Object = { a: 'b', c: 'a', n: 'v', foo: 'bar', baz: 'qux', nested: { xyz: 3, numbers: [1, 2, 3, 4, 5] } };
  constructor(private myservice: MyserviceService) { }

  ngOnInit() {
    this.sdata=this.myservice.getrval();
    this.sdata1=this.myservice.getrval1();
  }

}
