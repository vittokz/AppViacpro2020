import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { DetallePlanPage } from './detalle-plan.page';

describe('DetallePlanPage', () => {
  let component: DetallePlanPage;
  let fixture: ComponentFixture<DetallePlanPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DetallePlanPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(DetallePlanPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
