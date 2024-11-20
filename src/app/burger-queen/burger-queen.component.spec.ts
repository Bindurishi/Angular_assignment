import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BurgerQueenComponent } from './burger-queen.component';

describe('BurgerQueenComponent', () => {
  let component: BurgerQueenComponent;
  let fixture: ComponentFixture<BurgerQueenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BurgerQueenComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BurgerQueenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
