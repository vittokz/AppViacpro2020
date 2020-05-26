import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';

import { ListActuacionesPage } from './list-actuaciones.page';

describe('ListActuacionesPage', () => {
  let component: ListActuacionesPage;
  let fixture: ComponentFixture<ListActuacionesPage>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ListActuacionesPage ],
      imports: [IonicModule.forRoot()]
    }).compileComponents();

    fixture = TestBed.createComponent(ListActuacionesPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
