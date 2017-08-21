import { Injectable } from '@angular/core';

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

  constructor() {
   }

  getList() {
     let users: User[] = [
      {
        id: 10502,
        name: "Balwant padwal",
        cell: "9764936555",
        designation: "Associate"
      },
      {
        id: 14502,
        name: "Nikhil Madhamshettiwar",
        designation: "Manager"
      },
      {
        id: 11502,
        name: "Ramakant Dhurpate",
        cell: "984xxxxx2",
        designation: "Manager"
      },
      {
        id: 10502,
        name: "fahim patel",
        cell: "96xxxxxxx51",
        designation: "Senior"
      }
    ];
    return users;

  }

}
