import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { MaterialModule } from '../../../modules/material.module';

@Component({
  selector: 'app-header-menu',
  standalone: true,
  imports: [RouterLink, MaterialModule],
  templateUrl: './header-menu.component.html',
  styleUrl: './header-menu.component.css',
})
export class HeaderMenuComponent {}
