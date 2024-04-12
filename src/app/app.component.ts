import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { invoke } from "@tauri-apps/api/core";
import { listen } from '@tauri-apps/api/event'

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  constructor() {
    listen('tauri://file-drop', event => {
      console.log(event)
    })
    listen('tauri://file-drop-hover', event => {
      console.log(event)
    })
    listen('tauri://file-drop-cancelled', event => {
      console.log(event)
    })
  }
}
