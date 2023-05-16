import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BuilderBetsComponent } from './builder-bets.component';

describe('BuilderBetsComponent', () => {
  let component: BuilderBetsComponent;
  let fixture: ComponentFixture<BuilderBetsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BuilderBetsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BuilderBetsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
