import { Component, ViewChild } from '@angular/core';
import { Nav, Platform } from 'ionic-angular';
import { StatusBar } from '@ionic-native/status-bar';
import { SplashScreen } from '@ionic-native/splash-screen';

import { ReservaVueloPage } from '../pages/reserva-vuelo/reserva-vuelo';
import { ConsultaVueloPage } from '../pages/consulta-vuelo/consulta-vuelo';
import { InfoLegalPage } from '../pages/info-legal/info-legal';
import { ContactoPage } from '../pages/contacto/contacto';
import { FacturarVueloPage } from '../pages/facturar-vuelo/facturar-vuelo';
import { TarjetaEmbarquePage } from '../pages/tarjeta-embarque/tarjeta-embarque';

@Component({
  templateUrl: 'app.html'
})
export class MyApp {
  @ViewChild(Nav) nav: Nav;

  rootPage: any = ReservaVueloPage;

  pages: Array<{title: string, component: any}>;

  constructor(public platform: Platform, public statusBar: StatusBar, public splashScreen: SplashScreen) {
    this.initializeApp();

    // used for an example of ngFor and navigation
    this.pages = [
      { title:'Reserva de Vuelo', component: ReservaVueloPage},
      { title: 'Consulta de Vuelo', component: ConsultaVueloPage},
      { title: 'Información Legal', component: InfoLegalPage},
      { title: 'Contacto', component: ContactoPage}
    ];

  }

  initializeApp() {
    this.platform.ready().then(() => {
      // Okay, so the platform is ready and our plugins are available.
      // Here you can do any higher level native things you might need.
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  openPage(page) {
    // Reset the content nav to have just this page
    // we wouldn't want the back button to show in this scenario
    this.nav.setRoot(page.component);
  }
}
