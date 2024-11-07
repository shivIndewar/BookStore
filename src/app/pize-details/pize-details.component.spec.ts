import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PizeDetailsComponent } from './pize-details.component';

describe('PizeDetailsComponent', () => {
  let component: PizeDetailsComponent;
  let fixture: ComponentFixture<PizeDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PizeDetailsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PizeDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
