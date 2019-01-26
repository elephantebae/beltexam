import { Component, OnInit } from '@angular/core';

import { HttpService } from "./../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-all-pets',
  templateUrl: './all-pets.component.html',
  styleUrls: ['./all-pets.component.css']
})
export class AllPetsComponent implements OnInit {
  allPets: any = null;
  constructor(private _router: Router, private _route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    this.findAllPets();
  }

  findAllPets() {
    let obs = this._httpService.getAllPets();
    obs.subscribe(data => {
      this.allPets = data;
    })
  }
  edit(id) {
    this._router.navigateByUrl('/pets/edit/' + id);
  }
  details(id) {
    this._router.navigateByUrl('/pets/' + id);
  }

}
