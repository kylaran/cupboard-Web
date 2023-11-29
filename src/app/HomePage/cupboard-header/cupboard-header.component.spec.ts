import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CupboardHeaderComponent } from './cupboard-header.component';

describe('CupboardHeaderComponent', () => {
  let component: CupboardHeaderComponent;
  let fixture: ComponentFixture<CupboardHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CupboardHeaderComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CupboardHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
