import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CompanyNotFoundComponent } from './company-not-found.component';

describe('CompanyNotFoundComponent', () => {
  let component: CompanyNotFoundComponent;
  let fixture: ComponentFixture<CompanyNotFoundComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CompanyNotFoundComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CompanyNotFoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
