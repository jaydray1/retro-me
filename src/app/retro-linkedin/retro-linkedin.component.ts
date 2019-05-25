import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-retro-linkedin',
  templateUrl: './intro-card.component.html',
  styleUrls: ['./intro-card.component.css']
})
export class RetroLinkedinComponent implements OnInit {
  mainImage = 'https://s3-us-west-1.amazonaws.com/marmot-clone-start/me_cutout.png';


  constructor() { }

  ngOnInit() {
  }

}