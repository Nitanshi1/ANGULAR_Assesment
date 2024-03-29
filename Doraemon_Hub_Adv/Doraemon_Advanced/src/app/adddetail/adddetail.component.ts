import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { NgIf } from '@angular/common';
import { Location } from '@angular/common';
import { character } from '../mydoraemon';
import { gadget } from '../mydoraemon';

@Component({
  selector: 'app-adddetail',
  standalone: true,
  imports: [NgIf],
  templateUrl: './adddetail.component.html',
  styleUrl: './adddetail.component.css'
})
export class AdddetailComponent {
  constructor(private dataservice:DataService,private location:Location){}
  add(opt:string,name:string, main:string,imgpath:string){

      name=name.trim();
      main=main.trim();
      imgpath=imgpath.trim();
      
      if(!name||!opt||!main||!imgpath){
        return;
      }
    if(opt=="characters"){
      const role=main;
      this.dataservice.addchar({name,role,imgpath} as character).subscribe(()=>this.goback());
    }
    if(opt=="gadgets"){
      const use=main;
      this.dataservice.addgad({name,use,imgpath} as gadget).subscribe(()=>this.goback());
    }
    
  }
  goback(){
    this.location.back();
  }

}
