import { TestBed } from '@angular/core/testing';
import { HttpClientTestingModule } from '@angular/common/http/testing';

import { AccountHttpService } from './account-http-service.service';

describe('AccountHttpService', () => {
  beforeEach(() => TestBed.configureTestingModule({
    imports: [HttpClientTestingModule]
  }));

  it('should be created', () => {
    const service: AccountHttpService = TestBed.get(AccountHttpService);
    expect(service).toBeTruthy();
  });
});
