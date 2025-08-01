import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Careeropputunities } from './careeropputunities';

describe('Careeropputunities', () => {
  let component: Careeropputunities;
  let fixture: ComponentFixture<Careeropputunities>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Careeropputunities]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Careeropputunities);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
