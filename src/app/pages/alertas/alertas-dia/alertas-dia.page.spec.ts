import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertasDiaPage } from './alertas-dia.page';

describe('AlertasDiaPage', () => {
  let component: AlertasDiaPage;
  let fixture: ComponentFixture<AlertasDiaPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertasDiaPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertasDiaPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
