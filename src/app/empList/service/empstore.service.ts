import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import { Observable } from 'rxjs/Rx';

interface User {
  id: number;
  name: string;
  cell?: string;
  designation?: string
}
// ? called as let's or safe guard. this indicates optional params in object

@Injectable()
export class EmpstoreService {
  public users;
  private list = 'http://localhost:3002/empList';

  constructor(public http: Http) {

  }

  fetchEmpLists(): Observable<User[]> {
    return this.http.get(this.list)
      .map((res: Response) => res.json())
      .catch((error: any) => Observable.throw(error.json().error || 'Server error'));
  }


  fetchEmpList(): Observable<any> {
    return Observable.create(observer => {
      this.http.get(this.list)
        .map(res => res.json())
        .subscribe((data) => {
          observer.next(data.empList);
          observer.complete();
        });
    });
  }
}
