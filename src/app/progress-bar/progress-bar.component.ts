import { Component, OnInit } from '@angular/core';
import * as ProgressBar from 'progressbar.js';
@Component({
  selector: 'app-progress-bar',
  templateUrl: './progress-bar.component.html',
  styleUrls: ['./progress-bar.component.css']
})
export class ProgressBarComponent implements OnInit {
  ngOnInit(): void {
    // Créer une nouvelle barre de progression
    const bar = new ProgressBar.Line('#progress', {
      color: 'red',
      duration: 1000,
      easing: 'easeInOut',


    });
    const options: any = {
      duration: 2000,
      easing: 'easeInOut',
      fill: 'forwards',
      onEnd: () => {
        // Masquer la barre de progression lorsque l'animation est terminée
        const progressElement = document.getElementById('progress');
        if (progressElement !== null && progressElement !== undefined) {
          progressElement.style.display = 'none';
        }
      }
    };

// Lancer l'animation
    (bar as any).animate(1.0, options);





  }
}

