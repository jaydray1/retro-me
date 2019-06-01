import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retro-projects',
  templateUrl: './retro-projects.component.html',
  styleUrls: ['./retro-projects.component.css']
})
export class RetroProjectsComponent implements OnInit {
  browseImage = 'https://marmot-clone-start.s3-us-west-1.amazonaws.com/Screen+Shot+2019-06-01+at+4.25.18+AM.png';
  
  constructor() { }

  ngOnInit() {
  }

}