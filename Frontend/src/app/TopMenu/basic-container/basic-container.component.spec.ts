import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BasicContainerComponent } from './basic-container.component';

describe('BasicContainerComponent', () => {
  let component: BasicContainerComponent;
  let fixture: ComponentFixture<BasicContainerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BasicContainerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(BasicContainerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
