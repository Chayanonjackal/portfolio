import { Component, OnInit, ViewEncapsulation } from '@angular/core';
import { Router, RouterLink } from '@angular/router';

@Component({
  selector: 'app-experience',
  templateUrl: './experience.component.html',
  styleUrls: ['./experience.component.css'],
  // encapsulation: ViewEncapsulation.None
})
export class ExperienceComponent implements OnInit {

  constructor(public router: Router) { }

  ngOnInit(): void {
  }

  link(){
    this.router.navigate(['http://www.das-cs-rmutt.com'])
  }

}
