import { Injectable } from '@angular/core';
import { Http, Response, Headers, RequestOptions } from '@angular/http';
import {Observable} from 'rxjs/Rx';


@Injectable()
export class ListService {
name:String;
private list = 'http://localhost:3002/list'; 
private saveList = 'http://localhost:3002/save'; 
  constructor(public http:Http) {
    this.name= "demo"
   }

// Fetch all existing comments
     getComments() : Observable<any> {
         // ...using get request
         return this.http.get(this.list)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
     }

    save(data) : Observable<object> {
         let headers      = new Headers({ 'Content-Type': 'application/json' }); // ... Set content type to JSON
        let options       = new RequestOptions({ headers: headers }); // Create a request option

         return this.http.post(this.saveList,data, options)
                        // ...and calling .json() on the response to return data
                         .map((res:Response) => res.json())
                         //...errors if any
                         .catch((error:any) => Observable.throw(error.json().error || 'Server error'));

     }
}
