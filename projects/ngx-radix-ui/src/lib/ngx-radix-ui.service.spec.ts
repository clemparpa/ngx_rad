import { TestBed } from '@angular/core/testing';

import { NgxRadixUiService } from './ngx-radix-ui.service';

describe('NgxRadixUiService', () => {
  let service: NgxRadixUiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(NgxRadixUiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
