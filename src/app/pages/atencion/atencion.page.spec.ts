import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AtencionPage } from './atencion.page';

describe('AtencionPage', () => {
  let component: AtencionPage;
  let fixture: ComponentFixture<AtencionPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AtencionPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AtencionPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
