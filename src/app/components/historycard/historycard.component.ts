import { Component, EventEmitter, Input, Output } from '@angular/core';
import { History } from '../../interfaces/allergies.interface';
import { CommonModule } from '@angular/common';
import { Router } from '@angular/router';

@Component({
  selector: 'app-historycard',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './historycard.component.html',
  styleUrl: './historycard.component.scss',
})
export class HistorycardComponent {
  @Input()
  historyData!: History;
  @Output() onDelete: EventEmitter<string> = new EventEmitter<string>();

  isDeleting: boolean = false;

  constructor(private router: Router) {}

  starMsg() {
   this.historyData.favorite = !this.historyData.favorite; 
  }

  navigateToHistoryDetails() {
    this.router.navigate(['history/details', this.historyData.id]);
  }

  deleteItem() {
    this.isDeleting = true;
    this.onDelete.emit(this.historyData.id.toString());
  }

  
}
