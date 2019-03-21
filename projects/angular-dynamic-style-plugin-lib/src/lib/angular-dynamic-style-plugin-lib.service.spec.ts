import { TestBed } from '@angular/core/testing';

import { AngularDynamicStylePluginLibService } from './angular-dynamic-style-plugin-lib.service';

describe('AngularDynamicStylePluginLibService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AngularDynamicStylePluginLibService = TestBed.get(AngularDynamicStylePluginLibService);
    expect(service).toBeTruthy();
  });
});
