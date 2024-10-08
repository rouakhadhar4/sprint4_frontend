import { Component, OnInit } from '@angular/core';
import { Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html',
})
export class VetementsComponent implements OnInit {
  
  vetements? :Vetement[];
  
  

  constructor( private vetementService : VetementService,
    public authService: AuthService)
   {
    //this.vetements = this.vetementService.listeVetements();
   //this.vetements=[];
  }

  ngOnInit(): void {
    
    this.chargerVetements();
  }
  
  chargerVetements(): void {
    
    this.vetementService.listeVetements().subscribe(vets => {
      console.log(vets); 
      this.vetements = vets;
    });
  }
  
 supprimerVetement(vet: Vetement) 
 {    //console.log(vet); 
   let conf = confirm("Etes-vous sûr ?"); 
   if (conf) this.vetementService.supprimerVetement(vet.idVetement).subscribe(() => 
    { console.log("Vetement supprimé"); 
      this.chargerVetements()
    });
     
    }

 }

  
  
  

  
  























