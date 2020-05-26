import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { MenuAlertasPage } from './menu-alertas.page';

describe('MenuAlertasPage', () => {
  let component: MenuAlertasPage;
  let fixture: ComponentFixture<MenuAlertasPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MenuAlertasPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(MenuAlertasPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
