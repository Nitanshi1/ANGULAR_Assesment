import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { character } from './mydora';

@Injectable({
  providedIn: 'root'
})
export class MainserviceService {
     constructor(private http:HttpClient){}
     httpOptions={headers:new HttpHeaders({'Content-type': 'json-description'})}
     private myurl1='api/merecharacters';


     getCharacter():Observable<character[]>{
      return this.http.get<character[]>(this.myurl1)
     }
 
}
