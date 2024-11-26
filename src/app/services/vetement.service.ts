import { Vetement } from './../model/vetement.model';
import { Injectable } from '@angular/core';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';


const httpOptions = {
headers: new HttpHeaders( {'Content-Type': 'application/json'} )
};


@Injectable({
  providedIn: 'root'
})
export class VetementService {
  apiURL: string = 'http://localhost:8078/vetements/api/all';


  vetements! : Vetement[]; //un tableau de produits
  //categories : Categorie[];
 

  constructor(private http : HttpClient) { 
    
  }

  listeVetement(): Observable<Vetement[]>{
    return this.http.get<Vetement[]>(this.apiURL);
    }

  

     
       
}