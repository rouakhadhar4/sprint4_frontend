import { Component, OnInit } from '@angular/core';
import {Vetement } from '../model/vetement.model';
import { VetementService } from '../services/vetement.service';


@Component({
  selector: 'app-vetements',
  templateUrl: './vetements.component.html',
  styleUrls: ['./vetements.component.css']
})
export class  VetementsComponent implements OnInit {

     vetements! : Vetement[]; //un tableau de Produit
     
     constructor(private vetementservice: VetementService  ) {
      
      }
   

      ngOnInit(): void {

        this.chargerVetements();
      }
    
      chargerVetements(): void {
    
        this.vetementservice.listeVetement().subscribe(vets => {
          console.log(vets); 
          this.vetements = vets;
        });
      }
      }
   

 
  


