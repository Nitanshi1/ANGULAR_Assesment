import { Component } from '@angular/core';
import { news } from '../mynews';
import { NewsdataService } from '../news.service';
import { NgFor , NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
@Component({
  selector: 'app-sports',
  standalone: true,
  imports: [NgFor,NgIf,RouterModule],
  templateUrl: './sports.component.html',
  styleUrl: './sports.component.css'
})
export class SportsComponent {
  constructor(private newsdataservice:NewsdataService){}
  newsdisplay?:news[]=[];
  ngOnInit(){
   this.getnews();
   console.log(this.newsdisplay);
  }
  getnews(){
    this.newsdataservice.getNews().subscribe(curr=>{
     curr.forEach(val=>{
       if(val.cateogry=="sports"){
         this.newsdisplay?.push(val);
       }
     })
   })
  }
  delete(news: news): void{
    this.newsdisplay = this.newsdisplay?.filter(n => n!= news);
    this.newsdataservice.deletenews(news.id).subscribe();
  }
}