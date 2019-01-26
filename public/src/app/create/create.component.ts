import { Component, OnInit } from '@angular/core';
import { HttpService } from "./../http.service";
import { ActivatedRoute, Params, Router } from '@angular/router';
@Component({
  selector: 'app-create',
  templateUrl: './create.component.html',
  styleUrls: ['./create.component.css']
})
export class CreateComponent implements OnInit {
  newPet: any;
  error: any = null;
  constructor(private _router: Router, private _route: ActivatedRoute, private _httpService: HttpService) { }

  ngOnInit() {
    this.newPet = { petType: "", name: "", desc: "", skill: [{ skill1: "", skill2: "", skill3: "" }] }
  }
  cancel() {
    this._router.navigateByUrl('/pets');
  }
  addPet() {
    let obs = this._httpService.createPet(this.newPet);
    obs.subscribe(data => {
      if (data['errors']) {
        this.error = data;
      }
      else {
        this.cancel();
        console.log(data);
      }
    })
  }
}
