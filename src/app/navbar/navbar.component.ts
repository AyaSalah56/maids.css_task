import { Component} from '@angular/core';
import { UsersService } from '../users.service';
@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.css']
})
export class NavbarComponent  {
  constructor(private _UsersService:UsersService){}
  num!:number 


  changeNum()
  {
    if(this.num>=1)
    {
      this._UsersService.searchInput.next(this.num) ;
    }
    else
   {
    this._UsersService.searchInput.next(-1)
   }
  }
}
