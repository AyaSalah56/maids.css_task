import { Component, OnDestroy, OnInit } from '@angular/core';
import { UsersService } from '../users.service';
import { User } from '../user';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit,OnDestroy {
  allUser:User[] = [];
  userSearch:User[] = [];
  num:number = 0 ; 
  pageSize:number = 0 ;
  p:number = 0 ;
  total:number = 0 ;
  constructor(private UsersService:UsersService){}
  ngOnInit(): void {

   this.pageChanged(null)
    this.UsersService.searchInput.subscribe({
      next:(res)=>{
        console.log(res);
        if(res == -1)
        {
          this.pageChanged(null)
        }
        else
        {
          this.userSearch =  this.allUser.filter((item)=>(item.id == res)); 
          console.log('user search',this.userSearch);
          console.log('alluser', this.allUser)
          this.total = this.userSearch.length
          console.log("total",this.total);
        } 
      },  
    })
  }
 
  ngOnDestroy(): void {
  }

  pageChanged(event:any):void
  {
    this.UsersService.getAllUsers(event).subscribe({
      next:(res)=>{
        this.userSearch = res.data  ;
        this.allUser = res.data ;
        console.log(this.userSearch);
        this.pageSize = res.per_page ;
        this.p = res.page ;
        this.total = res.total ;
      }
    })


  }
}
