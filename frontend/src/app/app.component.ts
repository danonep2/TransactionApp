import { Component } from '@angular/core';
import { MessageService } from 'primeng/api'

import { Trasanction } from '../interfaces/Transaction.interface';
import { ToastReturn } from '../interfaces/ToastReturn.interface';
import { axioInstace } from '../services/axios/axios';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
  providers: [MessageService]
})
export class AppComponent {
  title = 'transactions-app';
  showModal = false;
  editMode = false;
  balance = 0;

  transactionFocus: Trasanction = {
    title: '',
    descricao: '',
    transactionValue: '',
    transactionType: 'receita',
    category: ''
  }

  contentShown: 'form' | 'confirm' | 'details' = 'form'

  transactions: Trasanction[] = []

  constructor(private messageService: MessageService){}

  openModalForms(){
    console.log('A')
    this.contentShown = 'form'
    this.showModal = true
    this.editMode = false
    this.transactionFocus = {
      title: '',
      descricao: '',
      transactionValue: 0,
      transactionType: 'receita',
      category: ''
    }
  }

  closeModal(){
    this.showModal = false
    this.getTransactions()
  }

  showToast(toast: ToastReturn){
    this.messageService.add({
      severity: toast.severity,
      summary: toast.summary,
      detail: toast.detail
    })
  }

  async getTransactions(){
    const response = await axioInstace.get('/transactions')
    this.transactions = response.data
    this.balance = this.transactions.reduce((acc, t) => {
      return acc + (+t.transactionValue)
    }, 0)
  }

  async ngOnInit(){
    await this.getTransactions()
  }

  openEditModal(transaction: Trasanction){
    this.transactionFocus = {...transaction}
    this.editMode = true
    this.contentShown = 'form'
    this.showModal = true
  }


  openDetailsModal(transaction: Trasanction){
    this.transactionFocus = {...transaction}
    this.contentShown = 'details'
    this.showModal = true
  }


  async deleTransaction(transactionId: number){
    this.showModal = false
    console.log('B')

    if (transactionId === 0){
      return
    }

    await axioInstace.delete(`/delete/${transactionId}`)
    this.showToast({
      severity: 'success',
      summary: 'Sucesso',
      detail: 'A transação foi deletada com sucesso'
    })
    this.getTransactions()
  }

  sendConfirm(transactionId: number){
    this.contentShown = 'confirm'
    this.showModal = true
    const focus = this.transactions.find(t => t.id === transactionId)
    this.transactionFocus = focus || this.transactionFocus
  }
}
