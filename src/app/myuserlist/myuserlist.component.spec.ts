import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyuserlistComponent } from './myuserlist.component';

describe('MyuserlistComponent', () => {
  let component: MyuserlistComponent;
  let fixture: ComponentFixture<MyuserlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyuserlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyuserlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
