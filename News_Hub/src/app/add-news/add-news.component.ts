import { Component } from '@angular/core';
import { news } from '../mynews';
import { NewsdataService } from '../news.service';
import { Location } from '@angular/common';
@Component({
  selector: 'app-add-news',
  standalone: true,
  imports: [],
  templateUrl: './add-news.component.html',
  styleUrl: './add-news.component.css'
})
export class AddNewsComponent {
  constructor(private newsdataservice:NewsdataService , private location:Location){}
  add(titles:string,cateogry:string,author:string,description:string,publictiondate:string){
    titles=titles.trim();
    cateogry=cateogry.trim();
   description=description.trim();
    author=author.trim();
    
    if(!titles||!author||!description||!cateogry||!publictiondate){
      return;
    }
    this.newsdataservice.addnews({titles,cateogry,author,description,publictiondate} as news,).subscribe(()=>this.goback());
  }
  goback(){
    this.location.back();
  }

}
