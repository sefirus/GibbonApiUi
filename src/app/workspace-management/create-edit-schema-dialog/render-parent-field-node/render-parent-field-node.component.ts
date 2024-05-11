import {Component, EventEmitter, Input, Output} from '@angular/core';
import {NgIf} from "@angular/common";
import {FormsModule} from "@angular/forms";

@Component({
  selector: 'app-render-parent-field-node',
  standalone: true,
  imports: [
    NgIf,
    FormsModule
  ],
  templateUrl: './render-parent-field-node.component.html',
  styleUrl: './render-parent-field-node.component.css'
})
export class RenderParentFieldNodeComponent {
  @Input() color: string = 'black';
  @Input() name: string = '';
  @Input() isCreate: boolean = false;
  @Output() nameChange = new EventEmitter<string>();
}
