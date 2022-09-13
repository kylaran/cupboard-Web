import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TitleFooterComponent } from './title-footer.component';

describe('TitleFooterComponent', () => {
  let component: TitleFooterComponent;
  let fixture: ComponentFixture<TitleFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ TitleFooterComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TitleFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
