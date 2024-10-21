import { NgModule } from '@angular/core';
import { BrowserModule, provideClientHydration } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FormComponent } from './form/form.component';
import { FormsModule } from '@angular/forms';
import { ModalComponent } from './modal/modal.component';
import { AddButtonComponent } from './add-button/add-button.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastModule } from 'primeng/toast';
import { TransactionContentComponent } from './transaction-content/transaction-content.component';
import { TransactionListComponent } from './transaction-list/transaction-list.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { ConfirmComponent } from './confirm/confirm.component';

@NgModule({
  declarations: [
    AppComponent,
    FormComponent,
    ModalComponent,
    AddButtonComponent,
    TransactionContentComponent,
    TransactionListComponent,
    HeaderComponent,
    DetailsComponent,
    ConfirmComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastModule
  ],
  providers: [
    provideClientHydration()
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
