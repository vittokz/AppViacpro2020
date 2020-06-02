import { OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { PushService } from './../../services/push/push.service';
import { Component, OnInit, ApplicationRef } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-notificaciones',
  templateUrl: './notificaciones.page.html',
  styleUrls: ['./notificaciones.page.scss'],
})
export class NotificacionesPage implements OnInit {
  identidad: string;
  mensajes: OSNotificationPayload[]=[];
  constructor(private ruta: Router,private rutaActiva: ActivatedRoute, private pushService: PushService,
    private aplicationRef: ApplicationRef) { 
    this.identidad = this.rutaActiva.snapshot.paramMap.get('id');
  }

  ngOnInit() {
    this.pushService.pushListener.subscribe(noti =>{
      this.mensajes.unshift = noti;
      this.aplicationRef.tick();
    });
  }
  irMenu(){
    this.ruta.navigate(['/home', this.identidad]);
  }

  async ionViewWillEnter(){
   this.mensajes = await this.pushService.getMensajes();
  }

}
