import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CoreArtistsComponent } from './core-artists.component';

describe('CoreArtistsComponent', () => {
  let component: CoreArtistsComponent;
  let fixture: ComponentFixture<CoreArtistsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CoreArtistsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CoreArtistsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
