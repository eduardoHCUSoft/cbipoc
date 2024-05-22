import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SalesforcehomeComponent } from './salesforcehome.component';

describe('SalesforcehomeComponent', () => {
  let component: SalesforcehomeComponent;
  let fixture: ComponentFixture<SalesforcehomeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SalesforcehomeComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(SalesforcehomeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
