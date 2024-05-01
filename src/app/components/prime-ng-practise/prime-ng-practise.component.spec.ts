import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PrimeNgPractiseComponent } from './prime-ng-practise.component';

describe('PrimeNgPractiseComponent', () => {
  let component: PrimeNgPractiseComponent;
  let fixture: ComponentFixture<PrimeNgPractiseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PrimeNgPractiseComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PrimeNgPractiseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
