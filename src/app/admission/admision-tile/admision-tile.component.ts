import { Component, Input, OnInit } from '@angular/core';
import {
  trigger,
  state,
  style,
  transition,
  animate,
} from '@angular/animations';
import { faChevronLeft, faFileImport } from '@fortawesome/free-solid-svg-icons';

import { AdmissionModel } from 'src/app/shared/model/admission.model';
import { mapFaculty, reverseIdentifier } from '../../utilities/helpers';
import { AuthService } from 'src/app/services/auth/auth.service';
import { Router } from '@angular/router';
import { ToastrService } from 'ngx-toastr';

@Component({
  selector: 'app-admision-tile',
  templateUrl: './admision-tile.component.html',
  styleUrls: ['./admision-tile.component.css'],
  animations: [
    trigger('smoothCollapse', [
      state(
        'initial',
        style({
          height: '0',
          overflow: 'hidden',
          opacity: '0',
          visibility: 'hidden',
        })
      ),
      state(
        'final',
        style({
          overflow: 'hidden',
        })
      ),
      transition('initial <=> final', animate('250ms')),
    ]),
    trigger('showHeader', [
      state(
        'initial',
        style({
          display: 'none',
        })
      ),
      state(
        'show',
        style({
          display: 'block',
        })
      ),
      transition('initial => show', animate('250ms')),
    ]),
    trigger('rotatedState', [
      state('default', style({ transform: 'rotate(0)' })),
      state('rotated', style({ transform: 'rotate(-90deg)' })),
      transition('default <=> rotated', animate('250ms')),
    ]),
  ],
})
export class AdmisionTileComponent implements OnInit {
  @Input() admission: AdmissionModel;
  @Input() collapsed: boolean;

  showHeader: boolean;

  faChevronLeft = faChevronLeft;
  faFile = faFileImport;

  mapFaculty = mapFaculty;
  reverseIdentifier = reverseIdentifier;

  constructor(
    private authService: AuthService,
    private router: Router,
    private toastr: ToastrService
  ) {}

  ngOnInit(): void {}

  toggle() {
    this.collapsed = !this.collapsed;
  }

  delay(ms: number) {
    return new Promise((resolve) => setTimeout(resolve, ms));
  }

  apply() {
    if (this.authService.isLoggedIn()) {
      this.toastr.success("Dziękujemy za twoje zgłoszenie");
    } else {
      this.router.navigateByUrl('/login');
    }
  }
}
