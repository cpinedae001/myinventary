import { Component, OnInit } from '@angular/core';

import { Platform } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss']
})
export class AppComponent implements OnInit {
  public selectedIndex = 0;
  public appPages = [
    {
      title: 'Inicio',
      url: '/folder/Inicio',
      icon: 'home'
    },
    {
      title: 'Compras',
      url: '/folder/Compras',
      icon: 'add-circle'
    },
    {
      title: 'Inventario',
      url: '/folder/Inventario',
      icon: 'albums'
    },
    {
      title: 'Ventas',
      url: '/folder/Ventas',
      icon: 'book'
    },
    {
      title: 'Configuración',
      url: '/folder/Configuración',
      icon: 'build'
    },
    {
      title: 'Salir',
      url: '/folder/Salir',
      icon: 'power'
    }
  ];
  public labels = ['Family', 'Friends', 'Notes', 'Work', 'Travel', 'Reminders'];

  constructor(
    private platform: Platform,
    private splashScreen: SplashScreen,
    private statusBar: StatusBar
  ) {
    this.initializeApp();
  }

  initializeApp() {
    this.platform.ready().then(() => {
      this.statusBar.styleDefault();
      this.splashScreen.hide();
    });
  }

  ngOnInit() {
    const path = window.location.pathname.split('folder/')[1];
    if (path !== undefined) {
      this.selectedIndex = this.appPages.findIndex(page => page.title.toLowerCase() === path.toLowerCase());
    }
  }
}
