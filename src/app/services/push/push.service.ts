import { async } from '@angular/core/testing';
import { Injectable, EventEmitter } from '@angular/core';
import { OneSignal, OSNotification, OSNotificationPayload } from '@ionic-native/onesignal/ngx';
import { Storage } from '@ionic/storage';

@Injectable({
  providedIn: 'root'
})
export class PushService {
  
  mensajes: OSNotificationPayload[]= [];
  pushListener = new EventEmitter<OSNotificationPayload>();

  constructor(private oneSignal: OneSignal,private storage: Storage) {
    this.cargarMnesajes();
   }

   async getMensajes(){
     await this.cargarMnesajes;
     return [...this.mensajes];
   }

  configuracionInicial(){
    this.oneSignal.startInit('5dec5a6c-ba65-48f6-a828-06d3d215f991', '213402406745');
    this.oneSignal.inFocusDisplaying(this.oneSignal.OSInFocusDisplayOption.Notification);
    this.oneSignal.handleNotificationReceived().subscribe((noti) => {
      this.notificacionRecibida(noti);
      console.log('Notificacion recibida', noti);
    // do something when notification is received
    });
    this.oneSignal.handleNotificationOpened().subscribe(async(noti) => {
      console.log('Notificacion abierta', noti);
      await this.notificacionRecibida(noti.notification);
      // do something when a notification is opened
    });
    this.oneSignal.endInit();
    }

    async notificacionRecibida(noti: OSNotification){
      await this.cargarMnesajes();
       const payload = noti.payload;
       const existePush = this.mensajes.find(mensaje => mensaje.notificationID === payload.notificationID);
       if(existePush){
         return;
       }
       this.mensajes.unshift(payload);
       this.pushListener.emit(payload);
       await this.guardarMensajes();
    }

    guardarMensajes(){
       this.storage.set('mensajes', this.mensajes)
    }

    async cargarMnesajes(){
      //this.storage.clear();
      this.mensajes = await this.storage.get('mensajes') || [];
      return this.mensajes;
    }
}
