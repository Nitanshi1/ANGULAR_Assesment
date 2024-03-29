import { Routes } from '@angular/router';
import { CharacterComponent } from './character/character.component';
import { GadgetComponent } from './gadget/gadget.component';
import { GalleryComponent } from './gallery/gallery.component';
export const routes: Routes = [
    {path:"Character" ,component:CharacterComponent},
    {path:"Gadget", component:GadgetComponent},
    {path:"Gallery",component:GalleryComponent},
    {path:"",redirectTo:"/Gallery",pathMatch:'full'},
    // {path:"Gallery",component:GalleryComponent},
    // {path:"Gallery",component:GalleryComponent},

];
