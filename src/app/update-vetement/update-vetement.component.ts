import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VetementService } from '../services/vetement.service';
import { Vetement } from '../model/vetement.model';
import { Genre } from '../model/genre.model';


@Component({
  selector: 'app-update-vetement',
  templateUrl: './update-vetement.component.html',
  styles: ``
})
export class UpdateVetementComponent implements OnInit {
  currentVetement = new Vetement();
  genres!: Genre[];
  updatedgnId!: number;

  constructor(private activatedRoute: ActivatedRoute,
    private router: Router,
    private vetementService: VetementService) {

  }
ngOnInit() { 
  this.vetementService.listeGneres().
  subscribe(genres => {
    this.genres = genres._embedded.genres;
    console.log(genres);
});
this.vetementService.consulterVetement(this.activatedRoute.snapshot.params['id']).
   subscribe( vet =>{ this.currentVetement = vet; 

    this.updatedgnId = this.currentVetement.genre.idGenre;
   } ) ; 
  
  
  }

  updateVetement() {
    //console.log(this.currentVetement);
   // this.currentVetement.genre=this.vetementService.consulterGenre(this.updatedgnId);

   this.currentVetement.genre= this.genres.find(gn => gn. idGenre == this.updatedgnId)!;
   this.vetementService.updateVetement(this.currentVetement).subscribe
   (vet => { this.router.navigate(['vetements']); } );
  }
  


}
