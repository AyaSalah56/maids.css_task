
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UsersService } from '../users.service';
import { User } from '../user';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.css']
})
export class DetailsComponent implements OnInit {
  cardId:any ="";
  person!: User ;
  constructor(private _ActivatedRoute:ActivatedRoute , private _UsersService:UsersService){}
  
  ngOnInit(): void {
    this._ActivatedRoute.paramMap.subscribe({
      next:(p)=>{this.cardId = p.get('userId')} 
    })

    this._UsersService.getSpecUser(this.cardId).subscribe({
      next:(res) => {
        // console.log(res) ;
        this.person= res.data ;
        console.log(this.person);
        
      }
    })
    
  }

}
