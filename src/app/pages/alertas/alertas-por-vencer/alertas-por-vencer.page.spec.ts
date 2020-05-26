import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { AlertasPorVencerPage } from './alertas-por-vencer.page';

describe('AlertasPorVencerPage', () => {
  let component: AlertasPorVencerPage;
  let fixture: ComponentFixture<AlertasPorVencerPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AlertasPorVencerPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(AlertasPorVencerPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
