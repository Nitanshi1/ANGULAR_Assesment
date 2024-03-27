import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PoliticsDetailsComponent } from './politics-details.component';

describe('PoliticsDetailsComponent', () => {
  let component: PoliticsDetailsComponent;
  let fixture: ComponentFixture<PoliticsDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PoliticsDetailsComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PoliticsDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
