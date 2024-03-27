import { Routes } from '@angular/router';
import { SportsComponent } from './sports/sports.component';
import { AddNewsComponent } from './add-news/add-news.component';
import { SportsDetailsComponent } from './sports-details/sports-details.component';
import { PoliticsDetailComponent } from './politics-details/politics-details.component';
import { PoliticsComponent } from './politics/politics.component';
import { BollywoodComponent } from './bollywood/bollywood.component';
import { BollywoodDetailsComponent } from './bollywood-details/bollywood-details.component';

export const routes: Routes = [
 
    {path:"sports" , component:SportsComponent},
    {path:"politics" , component:PoliticsComponent},
    {path:"bollywood" , component:BollywoodComponent},
    {path:"addnews",component:AddNewsComponent},
    {path:"",redirectTo:"/politics",pathMatch:'full'},
    {path:"sports/:id" , component:SportsDetailsComponent},
    {path:"politics/:id" , component:PoliticsDetailComponent},
    {path:"bollywood/:id" , component:BollywoodDetailsComponent}
];