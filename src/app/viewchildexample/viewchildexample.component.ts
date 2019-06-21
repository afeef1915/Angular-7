import { Component, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-viewchildexample',
  templateUrl: './viewchildexample.component.html',
  styleUrls: ['./viewchildexample.component.css']
})
export class ViewchildexampleComponent implements OnInit {
  @ViewChild('maincontent',{static: false}) mainContent: any;
  @ViewChild('subcontent',{static: false}) subContent: any;
  constructor() { }
  ngOnInit() {
  }

 public changeMainContent() {
    console.log('changeMainContent');
    this.mainContent.nativeElement.setAttribute('style', 'color:red');
  }

  public changeSubContent() {
    console.log('changeSubContent');
    this.subContent.nativeElement.setAttribute('style', 'color:green');
  }

}
