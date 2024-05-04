import {Component, Input} from '@angular/core';

@Component({
  selector: 'app-render-parent-field-node',
  standalone: true,
  imports: [],
  templateUrl: './render-parent-field-node.component.html',
  styleUrl: './render-parent-field-node.component.css'
})
export class RenderParentFieldNodeComponent {
  @Input() color: string = 'black';
}
