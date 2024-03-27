import { Component } from '@angular/core';
import { news } from '../mynews';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { NewsdataService } from '../news.service';
import { NgIf } from '@angular/common';
import { FormsModule } from '@angular/forms';
@Component({
  selector: 'app-sports-details',
  standalone: true,
  imports: [NgIf,FormsModule],
  templateUrl: './sports-details.component.html',
  styleUrl: './sports-details.component.css'
})
export class SportsDetailsComponent {
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




