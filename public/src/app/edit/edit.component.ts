import { Component, OnInit } from '@angular/core';

import { HttpService } from "./../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-edit',
  templateUrl: './edit.component.html',
  styleUrls: ['./edit.component.css']
})
export class EditComponent implements OnInit {

  constructor(private _router: Router, private _route: ActivatedRoute, private _httpService: HttpService) { }
  id: any;
  editPet: any;
  error: any = null;
  ngOnInit() {
    this.editPet = { petType: "", name: "", desc: "", skill: [{ skill1: "", skill2: "", skill3: "" }] }
    this._route.params.subscribe(params => {
      this.id = params.id;
      this.findEditPet(this.id);
    })

  }
  findEditPet(id) {
    let obs = this._httpService.findPet(id);
    obs.subscribe(data => {
      this.editPet = data;
    })
  }
  update() {
    let obs = this._httpService.editPet(this.editPet);
    obs.subscribe(data => {
      if (data['errors']) {
        this.error = data;
        console.log(this.error);
      }
      else {
        this.cancel();
      }
    })
  }
  cancel() {
    this._router.navigateByUrl('/pets');
  }
}
