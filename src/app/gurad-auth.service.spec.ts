import { TestBed } from '@angular/core/testing';

import { GuradAuthService } from './gurad-auth.service';

describe('GuradAuthService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: GuradAuthService = TestBed.get(GuradAuthService);
    expect(service).toBeTruthy();
  });
});
