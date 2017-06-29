import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ListService } from '../shared/list.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css'],
  providers: [ListService]
})
export class SignupComponent implements OnInit {
  signupForm: any;
  data: any;
  technologies: Array<String>;
  list: any
  listService: any;
  users: any
  constructor(private FormBuilder: FormBuilder, listService: ListService, private router: Router) {
    this.listService = listService;
    console.log(this.listService);
    this.listService.getComments().subscribe(res => {
      this.list = res;
    },
      err => {
        console.log(err);
      });

    this.data = {
      name: "Shivraj Padwal",
      email: "",
      password: "",
      city: "",
      domain: "Angular JS"
    };
    this.technologies = ["Angular JS", "React JS", "Vue JS", "Polymer JS"];

  }

  onSubmit(values) {
    console.log(values);
    this.listService.save(values).subscribe(res => {
      this.users = res;
      this.signupForm.reset();
      this.router.navigate(['/login']);

    },
      err => {
        console.log(err);
      });
  }

  loginlink() {
    this.router.navigate(['/login']);
  }

  clear() {
    this.signupForm.reset();
  }

  ngOnInit() {
    console.log(this.data);

    this.signupForm = this.FormBuilder.group({
      'name': [null, [Validators.required, Validators.minLength(4), Validators.maxLength(10)]],
      'email': [null, [Validators.required, Validators.email]],
      'password': [null, Validators.required],
      'city': [null, Validators.required],
      'domain': [this.data.domain, Validators.required]

    });
  }

}
