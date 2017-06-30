import { Component, OnInit } from '@angular/core';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
    providers:[ListService]

})
export class HomepageComponent implements OnInit {
  list:any
  isUsers:boolean;
  constructor(private listService: ListService) { }

  ngOnInit() {
     this.listService.getUsers().subscribe(res => {
      if(res.users.length === 0){
        this.isUsers = false;
      }
      else{
        this.isUsers = true;
      }
      this.list = res.users;
      
    },
      err => {
        console.log(err);
      });
  }

}
