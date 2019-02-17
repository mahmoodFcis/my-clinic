import { TestBed } from '@angular/core/testing';

import { AddClinicService } from './add-clinic.service';

describe('AddClinicService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AddClinicService = TestBed.get(AddClinicService);
    expect(service).toBeTruthy();
  });
});
