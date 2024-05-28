import { CommonModule } from '@angular/common';
import { Component, Input, input } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ButtonModule } from 'primeng/button';
import { CalendarModule } from 'primeng/calendar';
import { ChipModule } from 'primeng/chip';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { RatingModule } from 'primeng/rating';

import { TabViewModule } from 'primeng/tabview';

@Component({
  selector: 'app-profile',
  standalone: true,
  imports: [TagModule,TableModule ,RatingModule, ChipModule , ButtonModule , TabViewModule , CalendarModule , CommonModule ],
  templateUrl: './applicant-profile.component.html',
  styleUrl: './applicant-profile.component.css'
})
export class applicantProfileComponent {

  defaultBrithDate: Date = new Date("January 31 1980 12:30");
  


}

