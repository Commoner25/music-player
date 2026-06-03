import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Library } from './app-shell/library/library';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Library],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('music-player');
}
