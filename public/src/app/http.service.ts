import { Injectable } from '@angular/core';
import { HttpClient } from "@angular/common/http";


@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private _http: HttpClient) { }

  getAllPets() {
    return this._http.get("/api/allPets");
  }
  createPet(newPet) {
    return this._http.post("/api/newPet", newPet);
  }
  findPet(id) {
    return this._http.get("/api/" + id);
  }
  like(id) {
    return this._http.put("/api/like/" + id, null);
  }
  adopt(id) {
    return this._http.delete("/api/" + id);
  }
  editPet(editPet) {
    return this._http.put("/api/" + editPet._id, editPet);
  }
}
