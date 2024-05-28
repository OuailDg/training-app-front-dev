import { Component, OnInit } from '@angular/core';
import { GalleriaModule } from 'primeng/galleria';
import { TabViewModule } from 'primeng/tabview';
import { ChipModule } from 'primeng/chip';
import { TableModule } from 'primeng/table';
import { TagModule } from 'primeng/tag';
import { ButtonModule } from 'primeng/button';
import { RatingModule } from 'primeng/rating';
import { CalendarModule } from 'primeng/calendar';


@Component({
  selector: 'app-companyprofile',
  standalone: true,
  imports: [GalleriaModule,TabViewModule,ChipModule,TabViewModule,TableModule,TagModule,ButtonModule,RatingModule,CalendarModule],
  templateUrl: './companyprofile.component.html',
  styleUrl: './companyprofile.component.css'
})
export class CompanyprofileComponent implements OnInit {
  images: any[] | undefined;

    responsiveOptions: any[] = [
        {
            breakpoint: '1024px',
            numVisible: 5
        },
        {
            breakpoint: '768px',
            numVisible: 3
        },
        {
            breakpoint: '560px',
            numVisible: 1
        }
    ];
    ngOnInit() { 
      this.images= [ 
        "assets/bg.jpg"
       ]
      }

      defaultBrithDate: Date = new Date("January 31 1980 12:30");


}
