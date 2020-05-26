import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertasVencidasPage } from './alertas-vencidas.page';

describe('AlertasVencidasPage', () => {
  let component: AlertasVencidasPage;
  let fixture: ComponentFixture<AlertasVencidasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertasVencidasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertasVencidasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
