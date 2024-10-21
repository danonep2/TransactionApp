import { Component, Input, Output, EventEmitter, input } from '@angular/core';
import { Trasanction } from '../../interfaces/Transaction.interface';
import { ToastReturn } from '../../interfaces/ToastReturn.interface';

@Component({
  selector: 'app-modal',
  templateUrl: './modal.component.html',
  styleUrl: './modal.component.css'
})
export class ModalComponent {
  @Input() editeMode = true
  @Input() showModal = true

  @Input() transaction: Trasanction = {
    title: '',
    transactionValue: '',
    descricao: '',
    transactionType: 'receita',
    category: ''
  }

  @Input() contentShown: 'form' | 'confirm' | 'details' = 'form';

  @Output() buttonClicked = new EventEmitter<string>();
  @Output() toastActiveFromModal = new EventEmitter<ToastReturn>();
  @Output() confirmActionFromModal = new EventEmitter<number>();


  toastActiveEmit(toast: ToastReturn){
    this.toastActiveFromModal.emit(toast)
  }

  onButtonClick(){
    this.buttonClicked.emit('Transação salva com sucesso');
  }

  confirmAction(transactionId: number){
    console.log('modal')
    this.confirmActionFromModal.emit(transactionId)
  }
}
