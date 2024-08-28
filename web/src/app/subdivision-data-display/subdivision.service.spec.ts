import { TestBed } from '@angular/core/testing';

import { SubdivisionService } from './subdivision.service';

xdescribe('SubdivisionService', () => {
  let service: SubdivisionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SubdivisionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
