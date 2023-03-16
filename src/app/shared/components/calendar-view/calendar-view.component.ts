import { CdkDragEnd } from '@angular/cdk/drag-drop';
import { Component, Input } from '@angular/core';
import { Subscription } from 'rxjs';
import { AppointmentService } from 'src/app/services/appointment/appointment.service';

@Component({
  selector: 'app-calendar-view',
  templateUrl: './calendar-view.component.html',
  styleUrls: ['./calendar-view.component.scss'],
})
export class CalendarViewComponent {
  appointments: any[] = [];

  dates: any[] = [];

  private subscription: Subscription;

  constructor(private appointmentService: AppointmentService) {
    this.subscription = appointmentService.appointments.subscribe((_value) => {
      if (_value == null) return;

      this.appointments.push(_value);
    });
  }

  ngOnInit() {
    this.generateDates();
  }

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
    this.appointments = this.appointments.filter((_appointment) => _appointment !== appointment);
  }

  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
