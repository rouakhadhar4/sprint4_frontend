import { Injectable } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { Genre } from '../model/genre.model';

import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
//import { apiURL } from '../config';
import { GenreWrapper } from '../model/genreWrapped.model';
//import { GenreWrapper } from '../model/GenreWrapped.model';

const httpOptions = {

  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class VetementService {
  apiURL: string = 'http://localhost:8095/vetements/api'
  apiURLgn: string = 'http://localhost:8095/vetements/gen';


  vetements!: Vetement[];
  //genres!:Genre[];


  constructor(private http: HttpClient) {
    console.log('creation de service vetement');
    /*  this.genres=[{idGenre : 1, nomGenre : "tshirt", descriptionGenre :"nouvelle"},
       {idGenre : 2, nomGenre : "pul",descriptionGenre :"nouvelle" },
       {idGenre : 3, nomGenre : "chemsie",descriptionGenre :"nouvelle" }] */
    /*this.vetements = [
      { idVetement: 1, nomVetement: "chemise", prix: 3000, dateCreation: new Date("2011-01-14"), couleur: "red", taille: "36" ,genre :{idGenre : 1, nomGenre : "tshirt", descriptionGenre :"nouvelle"} },
      { idVetement: 2, nomVetement: "pantalon", prix: 5000, dateCreation: new Date("2012-05-10"), couleur: "blue", taille: "40",genre :{idGenre : 2, nomGenre : "pul",descriptionGenre :"nouvelle" } },
      { idVetement: 3, nomVetement: "veste", prix: 7000, dateCreation: new Date("2013-08-23"), couleur: "black", taille: "42",genre:{idGenre : 3, nomGenre : "chemise",descriptionGenre :"nouvelle" } }
    ];*/
  }

  listeVetements(): Observable<Vetement[]> {
    return this.http.get<Vetement[]>(this.apiURL);
  }




  ajouterVetement(vet: Vetement): Observable<Vetement> {
    return this.http.post<Vetement>(this.apiURL, vet, httpOptions);
  }


  supprimerVetement(id: number) {
    const url = `${this.apiURL}/${id}`; return this.http.delete(url, httpOptions);
  }



  consulterVetement(id: number): Observable<Vetement> {
    const url = `${this.apiURL}/${id}`;
    return this.http.get<Vetement>(url);
  }

  trierVetements() {
    this.vetements = this.vetements.sort((n1, n2) => {
      if (n1.idVetement! > n2.idVetement!) { return 1; } if (n1.idVetement! < n2.idVetement!) { return -1; } return 0;
    });
  }

  updateVetement(vet: Vetement): Observable<Vetement> { return this.http.put<Vetement>(this.apiURL,vet, httpOptions); }




  listeGneres(): Observable<GenreWrapper> { return this.http.get<GenreWrapper>(this.apiURLgn); }

  /*consulterGenre(id:number): Genre{
    return this.genres.find(gn=> gn.idGenre == id)!;
    }*/

  rechercherParGenre(idGenre: number): Observable<Vetement[]> 
  { const url = `${this.apiURL}/vetcgen/${idGenre}`;
   return this.http.get<Vetement[]>(url); }


   rechercherParNom(nom: string):Observable<Vetement[]> {
     const url = `${this.apiURL}/vetsByName/${nom}`;
     return this.http.get<Vetement[]>(url);
     

}
ajouterGenre( gen: Genre):Observable<Genre>{
  return this.http.post<Genre>(this.apiURLgn, gen, httpOptions);
  }
}



