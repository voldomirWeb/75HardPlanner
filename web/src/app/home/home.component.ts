import { Component } from '@angular/core';
import { CardComponent } from "../components/card/card.component";
import { MatIconModule } from '@angular/material/icon';
import { NgOptimizedImage } from '@angular/common';

@Component({
  selector: 'app-home',
  standalone: true,
  templateUrl: './home.component.html',
  imports: [CardComponent, MatIconModule, NgOptimizedImage]
})
export class HomeComponent {

}
