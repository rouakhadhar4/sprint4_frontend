import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
import { Genre } from '../model/genre.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-add-vetement',
  templateUrl: './add-vetement.component.html',
  
})
export class AddVetementComponent  implements OnInit {

  newVetement = new Vetement();
  //message: string = '';
  genres! :Genre[];
  newIdGenre!:number;
  newGenre!:Genre;

  
  constructor(private vetementService :VetementService,
    private router :Router
  ){
    
  }
  ngOnInit(): void {
    //this.genres = this.vetementService.listeGenres();
    this.vetementService.listeGneres().subscribe(gens => {
        this.genres = gens._embedded.genres;
        console.log(gens);
    });

console.log('VetementsComponent initialized');
  }

  addVetement(){
    this.newVetement.genre= this.genres.find(genre => genre.idGenre == this.newIdGenre)!;
    this.vetementService.ajouterVetement(this.newVetement) .subscribe(vet=> { 
      console.log(vet); 
      this.router.navigate(['vetements']); });





 


    //this.message="Vetement: " +this.newVetement.nomVetement + "   ajouter avec sucées !!"
   
    

    }


}
