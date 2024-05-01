import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { FloatLabelModule } from 'primeng/floatlabel';
import { ChipsModule } from 'primeng/chips';
import { DividerModule } from 'primeng/divider';
import { PasswordModule } from 'primeng/password';

@Component({
  selector: 'app-prime-ng-practise',
  standalone: true,
  imports: [
    FloatLabelModule,
    FormsModule,
    ChipsModule,
    DividerModule,
    PasswordModule,
  ],
  templateUrl: './prime-ng-practise.component.html',
  styleUrl: './prime-ng-practise.component.css',
})
export class PrimeNgPractiseComponent {
  value: string = '';
}
