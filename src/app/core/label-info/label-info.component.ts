import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-label-info',
  templateUrl: './label-info.component.html',
  styleUrls: ['./label-info.component.scss']
})
export class LabelInfoComponent {
  @Input() fieldValid: boolean;
}
