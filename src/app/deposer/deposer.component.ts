import {Component, OnInit, ViewChild} from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import {NbStepperComponent} from "@nebular/theme";

@Component({
  selector: 'app-deposer',
  templateUrl: './deposer.component.html',
  styleUrls: ['./deposer.component.css']
})

export class DeposerComponent implements OnInit {
  firstForm: FormGroup;
  secondForm: FormGroup;
  thirdForm: FormGroup;
  stepper: any;
  fileName: string = '';
  downloading = false;
  progress = 0;
  animating = false;
  selectedFile: any;
  files: any;
  columns: any;




  downloadFile() {
    // ... téléchargement du fichier ...
    this.downloading = true;
    this.animating = true;

    // simulation de téléchargement avec une pause de 3 secondes
    const interval = setInterval(() => {
      this.progress += 10;
      if (this.progress >= 100) {
        clearInterval(interval);
        this.downloading = false;
        this.animating = false;
      }
    }, 300);
  }
  onFileSelected(event: any) {
    const file: File = event.target.files[0];
    this.fileName = file.name;
    // Ajoutez votre code pour télécharger le fichier ici
  }





  constructor(private fb: FormBuilder) {
    this.firstForm = fb.group({
      firstCtrl: ['', Validators.required],
    });

    this.secondForm = fb.group({
      secondCtrl: ['', Validators.required],
    });

    this.thirdForm = fb.group({
      thirdCtrl: ['', !Validators],
    });
  }

  ngOnInit() {
  }

  onFirstSubmit() {
    this.firstForm.markAsDirty();
  }

  onSecondSubmit() {
    this.secondForm.markAsDirty();
  }

  onThirdSubmit() {
    this.thirdForm.markAsDirty();
  }



}
