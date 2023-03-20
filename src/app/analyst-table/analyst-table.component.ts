import {Component, OnInit} from '@angular/core';
import { NgbCalendar, NgbDate, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-analyst-table',
  templateUrl: './analyst-table.component.html',
  styleUrls: ['./analyst-table.component.css'],
 
})
export class AnalystTableComponent implements OnInit{
 
  isDisabled = (date: NgbDate, current: { month: number; year: number }) => date.month !== current.month;
  isWeekend = (date: NgbDate) => this.calendar.getWeekday(date) == 3;

	constructor(private calendar: NgbCalendar) {}
  ngOnInit(): void {
    
  }


}
