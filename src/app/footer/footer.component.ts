import { Component, OnInit } from '@angular/core';
import { faEnvelope, faMobileAlt } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  faEnvelope = faEnvelope;
  faMobile = faMobileAlt;

  constructor() { }

  ngOnInit(): void {
  }

}
