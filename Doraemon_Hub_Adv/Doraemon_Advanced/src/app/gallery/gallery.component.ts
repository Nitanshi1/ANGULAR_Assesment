import { Component } from '@angular/core';
import { DataService } from '../data.service';
import { gallery } from '../mydoraemon';
import { NgFor, NgIf } from '@angular/common';
import { Location } from '@angular/common';
@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [NgIf,NgFor],
  templateUrl: './gallery.component.html',
  styleUrl: './gallery.component.css'
})
export class GalleryComponent {
  constructor(private dataservice:DataService,private location:Location){}
 data?:gallery[];
  getGallery(){
    this.dataservice.getgallery().subscribe(info=>this.data=info);
  }
  ngOnInit(){
    this.getGallery();
  }
  goback(){
    this.location.back();
  }
}