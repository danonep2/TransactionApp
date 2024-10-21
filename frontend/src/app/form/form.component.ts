import { Component, Input, Output, EventEmitter } from '@angular/core';

import { axioInstace } from '../../services/axios/axios';
import { Trasanction } from '../../interfaces/Transaction.interface';
import { ToastReturn } from '../../interfaces/ToastReturn.interface';


@Component({
  selector: 'app-form',
  templateUrl: './form.component.html',
  styleUrl: './form.component.css'
})

export class FormComponent {
  @Input() transaction: Trasanction = {
    title: '',
    transactionValue: '',
    transactionType: 'receita',
    descricao: '',
    category: ''
  }
  @Input() editMode = false

  @Output() buttonClicked = new EventEmitter();
  @Output() toastActiveFromForm = new EventEmitter<ToastReturn>();

  onClickType(type: 'receita' | 'despesa'){
    this.transaction.transactionType = type
  }

  async submit(){
    if (this.transaction.title.length < 3
        || this.transaction.transactionValue == 0
        || !this.transaction.category){
      this.toastActiveFromForm.emit({
        severity: 'error',
        summary: 'Dados inválidos',
        detail: 'Preencha todos os campos'
      })
      return
    }

    if(this.editMode){
      await this.updateTransaction()
    } else {
      await this.storeTrasanction()
    }

    this.buttonClicked.emit()
    this.toastActiveFromForm.emit(
      this.editMode ? {
        severity: 'success',
        summary: 'Transação atualizada',
        detail: 'A transação foi atualizada com sucesso'
      } : {
        severity: 'success',
        summary: 'Transação criada',
        detail: 'A transação foi criada com sucesso'
      }
    )
  }

  async storeTrasanction(){

    if (typeof this.transaction.transactionValue === 'string'){
      this.transaction.transactionValue =
        parseFloat(this.transaction.transactionValue.replace(',', '.'))
    }

    try{
      const response = await axioInstace.post('/store', this.transaction)
    }catch(error){
      console.error(error)
    }

  }
  async updateTransaction(){
    try{
      if (typeof this.transaction.transactionValue === 'string'){
        this.transaction.transactionValue =
          parseFloat(this.transaction.transactionValue.replace(',', '.'))
      }
      const response = await axioInstace.put(`/update/${this.transaction.id}`, this.transaction)
      console.log(response)
    }catch(error){
      console.error(error)
    }
  }

}
