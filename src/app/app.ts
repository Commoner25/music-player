import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Library } from './app-shell/library/library';
import { Mixes } from './app-shell/mixes/mixes';
import { NowPlaying } from './app-shell/now-playing/now-playing';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Library, Mixes, NowPlaying],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App {
  protected readonly title = signal('music-player');
}
