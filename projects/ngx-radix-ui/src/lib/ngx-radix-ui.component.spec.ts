import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NgxRadixUiComponent } from './ngx-radix-ui.component';

describe('NgxRadixUiComponent', () => {
  let component: NgxRadixUiComponent;
  let fixture: ComponentFixture<NgxRadixUiComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [NgxRadixUiComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(NgxRadixUiComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
