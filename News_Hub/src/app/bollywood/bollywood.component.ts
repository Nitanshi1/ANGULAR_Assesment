import { Component } from '@angular/core';
import { NgIf,NgFor} from '@angular/common';
import { news } from '../mynews';
import { RouterModule } from '@angular/router';
import { NewsdataService } from '../news.service';

@Component({
  selector: 'app-bollywood',
  standalone: true,
  imports: [NgIf,NgFor,RouterModule],
  templateUrl: './bollywood.component.html',
  styleUrl: './bollywood.component.css'
})
export class BollywoodComponent {
  constructor(private newsdataservice:NewsdataService){}
  newsdisplay?:news[]=[];
  ngOnInit(){
   this.getnews();
   console.log(this.newsdisplay);
  }
  getnews(){
    this.newsdataservice.getNews().subscribe(curr=>{
     curr.forEach(val=>{
       if(val.cateogry=="bollywood"){
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
