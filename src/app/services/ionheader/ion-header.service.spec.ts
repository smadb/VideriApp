import { TestBed } from '@angular/core/testing';

import { IonHeaderService } from './ion-header.service';

describe('IonHeaderService', () => {
  let service: IonHeaderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IonHeaderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
