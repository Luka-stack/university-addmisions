import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdmisionTileComponent } from './admision-tile.component';

describe('AdmisionTileComponent', () => {
  let component: AdmisionTileComponent;
  let fixture: ComponentFixture<AdmisionTileComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdmisionTileComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdmisionTileComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
