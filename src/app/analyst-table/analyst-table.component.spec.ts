import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AnalystTableComponent } from './analyst-table.component';

describe('AnalystTableComponent', () => {
  let component: AnalystTableComponent;
  let fixture: ComponentFixture<AnalystTableComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AnalystTableComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AnalystTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
