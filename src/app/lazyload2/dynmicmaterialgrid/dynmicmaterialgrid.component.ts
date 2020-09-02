import { Component, OnInit } from '@angular/core';
import { AstMemoryEfficientTransformer } from '@angular/compiler';

export interface Tile {
  color: string;
  cols: number;
  rows: number;
  text: string;
}

@Component({
  selector: 'app-dynmicmaterialgrid',
  templateUrl: './dynmicmaterialgrid.component.html',
  styleUrls: ['./dynmicmaterialgrid.component.css']
})

export class DynmicmaterialgridComponent implements OnInit {
  public rowHeight: string;
  totalList = [
    {
      test: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum animi et facilis rem repudiandae dolorum? Fuga, esse error? Reiciendis odio, nihil asperiores voluptate eos soluta cumque eveniet, similique possimus aperiam dicta modi dolore ullam atque voluptatem esse aliquam repellat repudiandae, porro rerum magni? Eaque, animi aliquam optio molestias neque laborum nulla. Nostrum at praesentium explicabo doloremque molestias tempora possimus eum non, et rem sunt consequatur minus eveniet aliquid expedita commodi vero recusandae mollitia ipsa suscipit unde. Dignissimos libero et a perferendis enim adipisci facere ab temporibus possimus neque, magni nobis nostrum qui? Deleniti cum laborum quaerat quidem vitae sapiente, labore possimus asperiores debitis? Iure libero enim recusandae nulla, blanditiis repudiandae voluptatem aut eius quaerat, tenetur ullam assumenda dolor excepturi atque tempore veniam non. Cupiditate nihil vel earum, in delectus magni qui corrupti error debitis eius? Incidunt explicabo voluptate similique facilis vel atque aperiam consequuntur deleniti illum, laboriosam consectetur natus hic ullam voluptatem, non velit. Quia voluptatem id harum a officia perspiciatis! Dicta eligendi, voluptatum officiis ipsam sequi quibusdam, soluta laudantium ipsa, facilis officia sunt. Consequatur id, aliquid dolorem et quisquam, ad voluptas illo iure exercitationem non tempore veritatis eligendi odit animi deleniti, expedita totam provident ipsum. Delectus, eaque nesciunt.', cols: 1, rows: 10
    },



    {
      text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum animi et facilis rem repudiandae dolorum? Fuga, esse error? Reiciendis odio, nihil asperiores voluptate eos soluta cumque eveniet, similique possimus aperiam dicta modi dolore ullam atque voluptatem esse aliquam repellat repudiandae, porro rerum magni? Eaque, animi aliquam optio molestias neque laborum nulla. Nostrum at praesentium explicabo doloremque molestias tempora possimus eum non', cols: 1, rows: 10
    },
    { test: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum animi et facilis rem repudiandae dolorum? Fuga, esse error? ', cols: 1, rows: 10 },

    { text: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum animi et facilis rem repudiandae dolorum? Fuga, esse error? Reiciendis odio, nihil asperiores voluptate eos soluta cumque eveniet, similique possimus aperiam dicta modi dolore ullam atque voluptatem esse aliquam repellat repudiandae, porro rerum magni? Eaque, animi aliquam optio molestias neque laborum nulla. Nostrum at praesentium explicabo doloremque molestias tempora possimus eum non 22ostrum qui? Deleniti cum laborum quaerat quidem vitae sapiente, labore possimus asperiores debitis? Iure libero enim recusandae nulla, blanditiis repudiandae voluptatem aut eius quaerat, tenetur ullam assumenda dolor excepturi atque tempore veniam non. Cupiditate nihil vel earum, in delectus magni qui corrupti error debitis eius? Incidunt explicabo voluptate similique facilis vel atque aperiam consequuntur deleniti illum, laboriosam consectetur natus hic ullam voluptatem, non velit. Quia voluptatem id harum a officia perspiciatis! Dicta eligendi, voluptatum officiis ipsam sequi quibusdam, soluta laudantium ipsa, facilis officia sunt. Consequatur id, aliquid dolorem et quisquam, ad voluptas illo iure exercitationem non tempore veritatis eligendi odit animi deleniti, expedita totam provident ipsum. Delectus, eaque nesciunt.', cols: 1, rows: 10 },
    { test: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum animi et facilis rem repudiandae dolorum? Fuga, esse error? ', cols: 1, rows: 2 },
    { test: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum animi et facilis rem repudiandae dolorum? Fuga, esse error? ', cols: 1, rows: 2 },
    { test: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum animi et facilis rem repudiandae dolorum? Fuga, esse error? ', cols: 1, rows: 2 },
    { test: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum animi et facilis rem repudiandae dolorum? Fuga, esse error? ', cols: 1, rows: 2 },
  ]






  tiles = [
    { text: '<h2>The header </h2>', cols: 4, rows: 1, color: 'lightblue' },
    { text: ' <a href="#">nav 1</a> <a href="#">nav 2</a>  <a href="#">nav 3</a> ', cols: 4, rows: 2, color: 'lightgreen' },
    { text: '<p> Main artical area /n Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae illum animi et facilis rem repudiandae dolorum? Fuga, esse error? Reiciendis odio, nihil asperiores voluptate eos soluta cumque eveniet, similique possimus aperiam dicta modi dolore ullam atque voluptatem esse aliquam repellat repudiandae, porro rerum magni? Eaque, animi aliquam optio </p>', cols: 4, rows: 4, color: 'lightpink' },

    
    { text: '<p>Sidebar</p>', cols: 4, rows: 1, color: '#DDBDF1' },
    { text: '<p>Lorem ipsum </p>', cols: 4, rows: 1, color: '#DDBDF1' },
    { text: '<p>The footer </p>', cols: 4, rows: 1, color: '#DDBDF1' }
  ];





  breakpoint: number;

  constructor() {
    this.breakpoint = (window.innerWidth <= 800 && window.innerWidth >= 400) ? 2 : (window.innerWidth <= 400) ? 1 : 3;
    this.rowHeight = (window.innerWidth <= 800) ? '1:4' : '1:1';
    if (window.innerWidth <= 800 && window.innerWidth >= 400) {
      this.tiles[1].rows = 1;
      this.tiles[1].cols = 4;
      this.tiles[2].rows = 4;
      this.tiles[2].cols = 3;
      this.tiles[3].rows = 4;
      this.tiles[3].cols = 1;
      this.tiles[4].rows = 1;
      this.tiles[4].cols = 1;
      this.tiles[5].rows = 1;
      this.tiles[5].cols = 3;
    }
    if (window.innerWidth < 400) {
      this.tiles[1].rows = 4;
      this.tiles[1].cols = 1;
      this.tiles[2].rows = 4;
      this.tiles[2].cols = 2;
      this.tiles[3].rows = 2;
      this.tiles[3].cols = 1;
      this.tiles[4].rows = 2;
      this.tiles[4].cols = 1;
      this.tiles[5].rows = 1;
      this.tiles[5].cols = 4;
    }
    if (window.innerWidth > 800) {
      this.tiles[1].rows = 2;
      this.tiles[1].cols = 4;
      this.tiles[2].rows = 4;
      this.tiles[2].cols = 4;
      this.tiles[3].rows = 1;
      this.tiles[3].cols = 4;
      this.tiles[4].rows = 1;
      this.tiles[4].cols = 4;
      this.tiles[5].rows = 1;
      this.tiles[5].cols = 4;
    }

    console.log(this.breakpoint, 'brkpoint', window.innerWidth);
  }

  ngOnInit() {

  }

  onResize(event) {
    this.breakpoint = (window.innerWidth <= 800 && window.innerWidth >= 400) ? 2 : (window.innerWidth <= 400) ? 1 : 3;
    this.rowHeight = (window.innerWidth <= 800) ? '1:4' : '1:1';
    console.log(this.breakpoint, 'brkpoint', window.innerWidth);
    if (window.innerWidth > 800) {
      this.tiles[1].rows = 2;
      this.tiles[1].cols = 4;
      this.tiles[2].rows = 4;
      this.tiles[2].cols = 4;
      this.tiles[3].rows = 1;
      this.tiles[3].cols = 4;
      this.tiles[4].rows = 1;
      this.tiles[4].cols = 4;
      this.tiles[5].rows = 1;
      this.tiles[5].cols = 4;
    }
    if (window.innerWidth <= 800 && window.innerWidth >= 400) {
      this.tiles[1].rows = 1;
      this.tiles[1].cols = 4;
      this.tiles[2].rows = 4;
      this.tiles[2].cols = 3;
      this.tiles[3].rows = 4;
      this.tiles[3].cols = 1;
      this.tiles[4].rows = 1;
      this.tiles[4].cols = 1;
      this.tiles[5].rows = 1;
      this.tiles[5].cols = 3;
    }



    if (window.innerWidth < 400) {
      this.tiles[1].rows = 4;
      this.tiles[1].cols = 1;
      this.tiles[2].rows = 4;
      this.tiles[2].cols = 2;
      this.tiles[3].rows = 2;
      this.tiles[3].cols = 1;
      this.tiles[4].rows = 2;
      this.tiles[4].cols = 1;
      this.tiles[5].rows = 1;
      this.tiles[5].cols = 4;
    }

    console.log(this.tiles, '++++', this.tiles[2].cols)
  }

}
