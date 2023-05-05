import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PastResultComponent } from './past-result.component';

describe('PastResultComponent', () => {
  let component: PastResultComponent;
  let fixture: ComponentFixture<PastResultComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PastResultComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(PastResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
