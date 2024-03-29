import { Component } from '@angular/core';
import { character } from '../mydora';
import { NgFor, NgIf } from '@angular/common';
import { RouterModule } from '@angular/router';
import { MainserviceService } from '../mainservice.service';

@Component({
  selector: 'app-character',
  standalone: true,
  imports: [NgIf,NgFor,RouterModule],
  templateUrl: './character.component.html',
  styleUrl: './character.component.css'
})
export class CharacterComponent {
  constructor(private dataservice:MainserviceService){}
  data?:character[];

  getCharacter(){
    return this.dataservice.getCharacter().subscribe(info=>this.data=info);
  }
  ngOnInit(){
    this.getCharacter();
  }
}
