import { Component } from '@angular/core';

interface MenuItem {
  name: string;
  route: string;
  icon: string; // Se agrega una propiedad para el ícono
  isActive?: boolean; // Propiedad opcional para manejar el estado activo
}

@Component({
  selector: 'maps-side-menu',
  templateUrl: './side-menu.component.html',
  styleUrl: './side-menu.component.css',
})
export class SideMenuComponent {
  menuItems: MenuItem[] = [
    {
      route: '/maps/fullscreen',
      name: 'FullScreen',
      icon: '🖥️',
      isActive: false,
    },
    {
      route: '/maps/zoom-range',
      name: 'ZoomRange',
      icon: '🔍',
      isActive: false,
    },
    { route: '/maps/markers', name: 'Markers', icon: '📍', isActive: false },
    { route: '/maps/properties', name: 'Houses', icon: '🏠', isActive: false },
  ];

  // Método para manejar el estado activo al hacer clic en un elemento
  setActiveItem(index: number): void {
    this.menuItems.forEach((item, i) => {
      item.isActive = i === index; // Marca el elemento clicado como activo
    });
  }
}
