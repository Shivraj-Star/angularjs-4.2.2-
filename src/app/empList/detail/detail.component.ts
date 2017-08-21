import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';

@Component({
  selector: 'app-detail',
  templateUrl: './detail.component.html',
  styleUrls: ['./detail.component.css']
})
export class DetailComponent implements OnInit {
  public profile;
  public sub;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  )
  { }

  ngOnInit() {
    this.sub = this.route
      .queryParams
      .subscribe(params => {
        this.profile = params;
        console.log(this.profile);
        
      });
  }

  ngOnDestroy() {
    this.sub.unsubscribe();
  }

  showList() {
    this.router.navigate(['/list'])
  }
}
