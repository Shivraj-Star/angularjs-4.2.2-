import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ListService } from '../shared/list.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css'],
  providers:[ListService]
})
export class LoginComponent implements OnInit {
  data: object;

  constructor(private router: Router, private listService: ListService) {
    this.data = {};
    this.listService = listService;

  }

  ngOnInit() {
  }

  login(user) {
this.listService.login(user).subscribe(res =>{
    this.router.navigate(['/homepage']);
}),
err =>{
  console.log(err);
  
}
  }

}
