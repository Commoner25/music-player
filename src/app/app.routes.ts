import { Routes } from '@angular/router';
import { Mixes } from './app-shell/mixes/mixes';
import { NowPlaying } from './app-shell/now-playing/now-playing';
import { Library } from './app-shell/library/library';

export const routes: Routes = [
    {
        path: "mixes",
        component: Mixes
    },
    {
        path: "now-playing",
        component: NowPlaying
    },
    {
        path: "library",
        component: Library
    }
];
