import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable({
  providedIn: 'root',
})
export class WebRequestService {
  readonly ROOT_URL;
  constructor(private http: HttpClient) {
    this.ROOT_URL = 'http://localhost:3000';
  }

  get(uri: string) {
    this.http.get(`${this.ROOT_URL}/${uri}`);
  }
  post(uri: string, payload: Object) {
    this.http.post(`${this.ROOT_URL}/${uri}`, payload);
  }

  delete(uri: string) {
    this.http.delete(`${this.ROOT_URL}/${uri}`);
  }
}
