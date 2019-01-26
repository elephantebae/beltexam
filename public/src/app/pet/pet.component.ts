import { Component, OnInit } from '@angular/core';

import { HttpService } from "./../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-pet',
  templateUrl: './pet.component.html',
  styleUrls: ['./pet.component.css']
})
export class PetComponent implements OnInit {
  id: any;
  pet: any = null;
  count: any;
  constructor(private _router: Router, private _route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    this._route.params.subscribe(params => {
      this.id = params.id;
      this.findPet(this.id);
      this.count = 0;
    })
  }

  findPet(id) {
    let obs = this._httpService.findPet(id);
    obs.subscribe(data => {
      console.log("found pet", data);
      this.pet = data;
    })
  }
  like(id) {
    let obs = this._httpService.like(id);
    obs.subscribe(data => {
      this.count = 1;
      this.findPet(id);
    })
  }
  adopt(id) {
    let obs = this._httpService.adopt(id);
    obs.subscribe(data => {
      this._router.navigateByUrl('/pets');
    })
  }
  home() {
    this._router.navigateByUrl('/pets')
  }
}
