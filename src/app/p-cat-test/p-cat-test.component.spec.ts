import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PCatTestComponent } from './p-cat-test.component';

describe('PCatTestComponent', () => {
  let component: PCatTestComponent;
  let fixture: ComponentFixture<PCatTestComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PCatTestComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PCatTestComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
