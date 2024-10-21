import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Trasanction } from '../../interfaces/Transaction.interface';

@Component({
  selector: 'app-transaction-list',
  templateUrl: './transaction-list.component.html',
  styleUrl: './transaction-list.component.css'
})
export class TransactionListComponent {
  @Input() transactionList: Trasanction[] = [];
  @Output() buttonEditClickedFromList = new EventEmitter<Trasanction>();
  @Output() buttonDeleteClickedFromList = new EventEmitter<number>();
  @Output() buttonDetailsClickedFromList = new EventEmitter<Trasanction>();

  transactionListFiltered: Trasanction[] = [];

  filterSelected: 'todas' | 'receita' | 'despesa' = 'todas';

  ngOnChanges() {
    this.transactionListFiltered = this.transactionList;
  }

  chanceFilter(filter: 'todas' | 'receita' | 'despesa') {
    this.filterSelected = filter;

    this.transactionListFiltered = this.transactionList.filter(
      t => t.transactionType === filter || filter === 'todas'
    );
  }

  onEditButtonClicked(value: Trasanction) {
    this.buttonEditClickedFromList.emit(value);
  }

  onDeleteButtonClicked(transactionId: number) {
    this.buttonDeleteClickedFromList.emit(transactionId);
  }

  onDetailsButtonClicked(value: Trasanction) {
    this.buttonDetailsClickedFromList.emit(value);
  }
}
