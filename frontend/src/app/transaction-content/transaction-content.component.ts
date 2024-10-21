import { Component, Input, Output, EventEmitter } from '@angular/core';

import { Trasanction } from '../../interfaces/Transaction.interface';

@Component({
  selector: 'app-transaction-content',
  templateUrl: './transaction-content.component.html',
  styleUrl: './transaction-content.component.css'
})
export class TransactionContentComponent {
  @Input() transaction: Trasanction = {
    title: '',
    transactionValue: '',
    transactionType: 'receita',
    descricao: '',
    category: ''
  }
  transactionValueFormated = '';
  @Output() buttonEditClickedFromContent = new EventEmitter<Trasanction>();
  @Output() buttonDeleteClickedFromContent = new EventEmitter<number>();
  @Output() buttonDetailsClickedFromContent = new EventEmitter<Trasanction>();

  ngOnInit() {
  this.transactionValueFormated =
    (typeof this.transaction.transactionValue === 'string'
      ? +this.transaction.transactionValue
      : this.transaction.transactionValue
    ).toFixed(2).replace('.', ',');
  }

  onButtonEditClick(transaction: Trasanction) {
    this.buttonEditClickedFromContent.emit(transaction);
  }

  onButtonDeleteClick(transactionid: number) {
    this.buttonDeleteClickedFromContent.emit(transactionid);
  }
  onButtonDetailsClick(transaction: Trasanction) {
    this.buttonDetailsClickedFromContent.emit(transaction);
  }
}
