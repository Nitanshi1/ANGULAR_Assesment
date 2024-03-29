import { Injectable } from '@angular/core';
import { InMemoryDbService } from 'angular-in-memory-web-api';
import { character,gadget,gallery } from './mydoraemon';
@Injectable({
  providedIn: 'root'
})
export class WebapiService implements InMemoryDbService {
  createDb(){
    const mycharacters=[
      {name:"Nobita", id:1, role: "Laziest" , imgpath:"https://upload.wikimedia.org/wikipedia/en/3/3f/NobitaNobi.png"},
      {name:"Geeyan", id:2, role: "Singer" , imgpath:"https://i.pinimg.com/564x/aa/2a/1a/aa2a1a4c5d5a401aa2ac06b2e5e5e340.jpg"},
      {name:"Doraemon", id:3, role: "Gadget Giver" , imgpath:"https://upload.wikimedia.org/wikipedia/en/b/bd/Doraemon_character.png"},
      {name:"Suniyooo", id:4, role: "Nakhrebaaz" , imgpath:"https://upload.wikimedia.org/wikipedia/en/9/95/Suneo_Honekawa.png" },
      {name:"Dekisugi", id:5, role: "Topper", imgpath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR-5m0TTcki3Ry9qHAIMZHbNb0iLv0GcAlkgkvgaSCARg&s"},
    ]
    const mygadgets=[
      {name:"Small-Light",id:1, use:"Make the objects smalll",imgpath:"https://pm1.aminoapps.com/6648/05f980785fb02696d3c381478bd1ad57222d8e6a_00.jpg"},
      {name:"Anywhere Door", id:2,use:"Go anywhere",imgpath:"https://miro.medium.com/v2/resize:fit:584/1*_MjjGLbH2jAY_6X8WxrMFA.png"},
      {name:"Bamboo-Copter" , id:3, use:" udan choohh.",imgpath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSfG9mHxE1lN4MM3Y2eknkuq8RAZAfK2gkV5Vb3fYWZzw&s"},
      {name:"Time-Machine" , id:4, use:"Go in future or past anywhere" ,imgpath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQAkIB8NsFPcEkC-RB8AYnl1ekExGwYLTEWfA&usqp=CAU"},
     
  ]
    const mygallery=[
      {id:1,name: "Dorame", imgpath:"https://s3.getstickerpack.com/storage/uploads/sticker-pack/dorame/sticker_7.png?588bae708f92dac578581f998a74c816&d=200x200"},
      {id:2,name: "Jaiko", imgpath:"https://i.pinimg.com/736x/06/5f/27/065f27821955657fd9dd178e1ee53c39.jpg"},
      {id:3, name: "Teacher",imgpath:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRRGtymLyXW0TP9Ug9mYy7KVZyOpsEuyP4Rcwr0Si_dJw&s"},
      {id:4, name: "Nobisuki Nobi", imgpath:"https://i.pinimg.com/474x/91/3d/96/913d96aed2c7af16d37d0ede9d2b4641.jpg"},
      {id:5, name: "tamako Nobi", imgpath:"https://i.pinimg.com/736x/22/e7/e4/22e7e40752ae0e5fd04f66d767cf3221.jpg"},
      {id:6, name: "michen", imgpath:"https://i.pinimg.com/736x/e8/16/d3/e816d383b9f91e9fa37a2febeb3e4509.jpg"}
  ]
    return {mycharacters,mygadgets,mygallery};
  }
  genId<T extends character|gadget>(myTable: T[]): number {
    return Number(myTable.length > 0 ? Math.max(...myTable.map(t => t.id)) + 1 : 1);
  }
}