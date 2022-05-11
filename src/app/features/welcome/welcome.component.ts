import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { MESSAGES } from 'src/app/core/constants/message.constants';

@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.scss']
})
export class WelcomeComponent {
  public messages = MESSAGES;
  constructor() {}

}
