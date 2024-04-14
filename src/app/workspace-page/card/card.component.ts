import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-card',
  standalone: true,
  imports: [],
  templateUrl: './card.component.html',
  styleUrl: './card.component.css'
})
export class CardComponent {
  @Input()
  text: string = 'Workspace Name 1'
  @Input()
  text1: string = 'Schema Objects: 3'
  constructor() {}
}
