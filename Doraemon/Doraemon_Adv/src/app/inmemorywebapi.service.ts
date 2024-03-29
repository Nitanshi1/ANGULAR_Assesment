import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { character } from './mydora';
@Injectable({
  providedIn: 'root'
})
export class InmemorywebapiService  implements InMemoryDbService{
  createDb(){
    const merecharacters=[
      {name:'Nobita',id:1},
      {name:'Geeyan',id:2},
      {name:'Suniyooo',id:3},
      {name:'Shizukaaa',id:4},
      {name:'Doraemon',id:5},
      {name:'Meechain',id:6},

    ]
    return {merecharacters};
  }
}
  