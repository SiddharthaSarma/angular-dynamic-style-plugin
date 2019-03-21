import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AngularDynamicStylePluginLibComponent } from './angular-dynamic-style-plugin-lib.component';

describe('AngularDynamicStylePluginLibComponent', () => {
  let component: AngularDynamicStylePluginLibComponent;
  let fixture: ComponentFixture<AngularDynamicStylePluginLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AngularDynamicStylePluginLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AngularDynamicStylePluginLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
