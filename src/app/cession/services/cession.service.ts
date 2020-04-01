import { Injectable } from "@angular/core";
import { HttpClient } from "@angular/common/http";
import { Person } from "../models/cession.model";
@Injectable({
  providedIn: "root"
})
export class CessionService {
  url: string = "assets/cessionsample.json";

  constructor(private _http: HttpClient) {}

  public async getCessionInfo(lifeId: number) {
    return await this._http.get<Person>(this.url).toPromise();
  }
}
