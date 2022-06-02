import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListofkpiComponent } from './listofkpi.component';

describe('ListofkpiComponent', () => {
  let component: ListofkpiComponent;
  let fixture: ComponentFixture<ListofkpiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ListofkpiComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ListofkpiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
