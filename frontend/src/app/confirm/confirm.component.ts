import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Trasanction } from '../../interfaces/Transaction.interface';

@Component({
  selector: 'app-confirm',
  templateUrl: './confirm.component.html',
  styleUrl: './confirm.component.css'
})
export class ConfirmComponent {
  @Input() transaction: Trasanction = {
    title: '',
    descricao: '',
    transactionValue: '',
    transactionType: 'receita',
    category: ''
  };
  transactionValueFormated = '';

  @Output() confirmAction = new EventEmitter<number>();

  ngOnInit() {
    this.transactionValueFormated =
      (typeof this.transaction.transactionValue === 'string'
        ? +this.transaction.transactionValue
        : this.transaction.transactionValue
      ).toFixed(2).replace('.', ',');
    }


  confirm(confirmed: number){
    console.log('confirm')
    this.confirmAction.emit(confirmed)
  }

}
