import { DOCUMENT } from '@angular/common';
import { Component, Inject, Renderer2 } from '@angular/core';

@Component({
  selector: 'app-top-menu',
  templateUrl: './top-menu.component.html',
  styleUrls: ['./top-menu.component.scss']
})
export class TopMenuComponent {

  public darkSwitch: boolean = true;

  constructor(@Inject(DOCUMENT) private document: Document,
              @Inject(Renderer2) private renderer: Renderer2) {
  }

  ngOnInit(): void {
    if (localStorage.getItem('dark-theme')) {
      this.addDarkTheme();
    }
  }

  colorTheme() {
    const body = document.getElementsByTagName('body')[0];

    if (body.classList.contains('dark-theme'))
    {
      localStorage.removeItem('dark-theme');
      this.removeDarkTheme();
    }
    else {
      localStorage.setItem('dark-theme','true');
      this.addDarkTheme();
    }
  }

  removeDarkTheme() {
    this.renderer.removeClass(this.document.body, 'dark-theme');
    this.darkSwitch = true;
  }

  addDarkTheme() {
    this.renderer.addClass(this.document.body, 'dark-theme');
    this.darkSwitch = false;
  }
}
