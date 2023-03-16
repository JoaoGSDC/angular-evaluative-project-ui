import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent {
  @Input() appointments!: any[];

  dates: any[] = [];

  constructor() {}

  generateDates() {
    const currentDate = new Date();
    const year = currentDate.getFullYear();
    const month = currentDate.getMonth();

    const numDaysInMonth = new Date(year, month + 1, 0).getDate();
    const _dates = [];

    for (let day = 1; day <= numDaysInMonth; day++) {
      _dates.push(new Date(year, month, day));
    }

    this.dates = _dates;
  }

  onAppointmentDragEnded(event: CdkDragEnd) {
    const index = this.appointments.indexOf(event.source.data);
    this.appointments[index].position = event.source.getFreeDragPosition();
  }

  deleteAppointment(appointment: any) {
    console.log('Deleted');
  }
}
