import { Component } from '@angular/core';
import { RouterModule, RouterLink, RouterLinkActive, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  imports: [RouterModule, RouterLink, RouterLinkActive, RouterOutlet],
})
export class App {
  title = 'conta-front';
}
