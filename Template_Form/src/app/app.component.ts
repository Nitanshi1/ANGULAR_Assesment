import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { NgFor } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { client } from './client';
import { CommonModule } from '@angular/common';
@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,NgFor,FormsModule,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  tasks = ['Components','Dependency Injections','Pipes','Routing','Directives']


    taskHasError = true;
  clientModel = new client('','nitanshi@gmail.com',9154531532,'default','weekdays',true)
  //checking the conditionn whether it has error or not
  validateTask(value: string){
    if(value==='default'){
      this.taskHasError = true;
    }else{
      this.taskHasError = false;
    }
  }

  //how submit buttin workss nd what conditions are we provided in the clientmodel
  //we can show the submit data in console
  onSubmit(){
    console.log(this.clientModel)
  }

}
