import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BollywoodDetailsComponent } from './bollywood-details.component';

describe('BollywoodDetailsComponent', () => {
  let component: BollywoodDetailsComponent;
  let fixture: ComponentFixture<BollywoodDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BollywoodDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BollywoodDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
