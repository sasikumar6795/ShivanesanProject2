import { Component, OnInit } from '@angular/core';
import { readAndCompressImage } from 'browser-image-resizer';
import { imageConfig } from '../util/config';
import { NgForm } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  carouselpictures : string ;
  carouselpictures1 : string ;
  carouselpictures2: string;


  
  constructor() {
    this.carouselpictures="../assets/images/CIVIL/CLIENTS/MR.SASIKUMAR, GUDUVANCHERY.jpeg";
    this.carouselpictures1="../assets/images/INTERIOR/MR.CHOCKALINGAM, DEFENCE COLONY/DINNING.jpeg";
    this.carouselpictures2="../assets/images/CIVIL/CLIENTS/MR.BOOBALAN, KOSAPETTAI.jpeg";
    
   }

  ngOnInit() {
    
  }

  onSubmit(f: NgForm) {

  }
  
  
  

}
