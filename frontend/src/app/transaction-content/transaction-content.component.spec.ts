import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransactionContentComponent } from './transaction-content.component';

describe('TransactionContentComponent', () => {
  let component: TransactionContentComponent;
  let fixture: ComponentFixture<TransactionContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [TransactionContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TransactionContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
