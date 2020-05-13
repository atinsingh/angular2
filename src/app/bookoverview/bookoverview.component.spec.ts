import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BookoverviewComponent } from './bookoverview.component';

describe('BookoverviewComponent', () => {
  let component: BookoverviewComponent;
  let fixture: ComponentFixture<BookoverviewComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BookoverviewComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BookoverviewComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
