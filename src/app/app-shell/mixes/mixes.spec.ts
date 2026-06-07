import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Mixes } from './mixes';

describe('Mixes', () => {
  let component: Mixes;
  let fixture: ComponentFixture<Mixes>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Mixes]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Mixes);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
