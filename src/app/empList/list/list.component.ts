import { Component, OnInit } from '@angular/core';
import { EmpstoreService } from '../service/empstore.service';
import { Router} from '@angular/router';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.css'],

})
export class ListComponent implements OnInit {

  public userList;

  constructor(
    public empstore: EmpstoreService,
    private router: Router
  ) {
    // this.empstore = empstore;
  }

  ngOnInit() {
    this.userList = this.empstore.getList();
  }

  remove(index): void {
    this.userList.splice(index, 1);
  }

  explore(selectedItem) {
    this.router.navigate(['/detail', selectedItem.id],{ queryParams: selectedItem})

    // this.router.navigate(['/detail', selectedItem.id]);
  }
}
