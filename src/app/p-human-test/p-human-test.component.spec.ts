import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PHumanTestComponent } from './p-human-test.component';

describe('PHumanTestComponent', () => {
  let component: PHumanTestComponent;
  let fixture: ComponentFixture<PHumanTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PHumanTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PHumanTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
