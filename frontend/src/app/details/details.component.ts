import { Component, Input } from '@angular/core';
import { Trasanction } from '../../interfaces/Transaction.interface';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrl: './details.component.css'
})
export class DetailsComponent {
  @Input() transaction: Trasanction = {
    title: '',
    descricao: '',
    transactionValue: 0,
    transactionType: 'receita',
    category: ''
  }

  transactionValueFormated = '';

  ngOnInit() {
    this.transactionValueFormated =
      (typeof this.transaction.transactionValue === 'string'
        ? +this.transaction.transactionValue
        : this.transaction.transactionValue
      ).toFixed(2).replace('.', ',');
    }


  formatDateTime(date: string | undefined){
    if(!date){
      return ''
    }
    return new Date(date).toLocaleString().slice(0, 17)
  }
}
