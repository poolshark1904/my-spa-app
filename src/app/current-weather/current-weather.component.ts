import { Component, Input } from '@angular/core';
import { DatePipe, CommonModule } from '@angular/common';

@Component({
  selector: 'app-current-weather',
  standalone: true,
  imports: [CommonModule],
  providers: [DatePipe],  // Add DatePipe to the component's providers
  templateUrl: './current-weather.component.html',
  styleUrls: ['./current-weather.component.css']  
})
export class CurrentWeatherComponent {
  @Input() weather: any;

  constructor(private datePipe: DatePipe) {}  // Inject DatePipe

  // Function to format date
  formatLocalTime(date: string): string | null {
    // The API provides the time in the format "2024-04-05 22:18"
    // Convert it to the local time and format it as 'HH:mm'
    return this.datePipe.transform(date, 'HH:mm');
  }
}
