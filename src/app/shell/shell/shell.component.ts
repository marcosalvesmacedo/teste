import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-shell',
  templateUrl: './shell.component.html',
  styleUrls: ['./shell.component.scss']
})
export class ShellComponent {
  public steps = [
    { name: 'passo-1' },
    { name: 'passo-2' },
    { name: 'passo-3' }
  ]
  constructor(
    private router: Router
  ) {
    this.router.navigate(['welcome']);
  }

  changeStep(event:any) {
    const selectedStep = 'passo-'.concat(event.selectedIndex + 1);
    this.router.navigate([selectedStep]);
  }

}
