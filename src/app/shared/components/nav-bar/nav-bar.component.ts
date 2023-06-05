import { Component } from '@angular/core';
import { Router, RouterModule } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  standalone: true,
  templateUrl: 'nav-bar.component.html',
  styleUrls: ['nav-bar.component.scss'],
  imports: [RouterModule],
})
export class NavBarComponent {
  onAdd() {
    console.log('Add');
  }
}
