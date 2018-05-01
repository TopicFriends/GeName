import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NamesPageComponent } from './names-page.component';

describe('NamesPageComponent', () => {
  let component: NamesPageComponent;
  let fixture: ComponentFixture<NamesPageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NamesPageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NamesPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
