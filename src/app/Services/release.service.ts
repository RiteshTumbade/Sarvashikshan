import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Release } from '../classes/release';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ReleaseService {

  private baserURL ="http://localhost:2001/release/get"
  constructor(private httpClient:HttpClient) { }

  getRelease():Observable<Release[]>{
        return this.httpClient.get<Release[]>(`${this.baserURL}`);
  }
}
