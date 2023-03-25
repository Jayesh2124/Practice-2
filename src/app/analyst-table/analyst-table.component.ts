import { Component, OnInit } from '@angular/core';
import { NgbCalendar, NgbDate, NgbDatepickerModule, NgbDateStruct } from '@ng-bootstrap/ng-bootstrap';
import { FormsModule } from '@angular/forms';
import { LoginService } from '../login.service';

@Component({
  selector: 'app-analyst-table',
  templateUrl: './analyst-table.component.html',
  styleUrls: ['./analyst-table.component.css'],

})
export class AnalystTableComponent implements OnInit {

  isDisabled = (date: NgbDate, current: { day: number; month: number; year: number }) => date.month !== current.month;
  isWeekend = (date: NgbDate) => this.getWeek(date);
  isWeek: any
  constructor(private calendar: NgbCalendar, private auth: LoginService) { }
  ngOnInit(): void {

    this.isWeek = (date: NgbDate) => this.calendar;


  }
  NO: number = 0
  getWeek(data: NgbDate): any {
    debugger
    if(data.day == 1 )
    {this.NO=0}
    if (this.calendar.getWeekday(data) == 3) {
      debugger
      
      this.NO = this.NO + 1;
      if (this.NO % 3 == 0) {
        debugger;
        this.NO = 0;
        return data
      }
    }
  
  }

  Login() {
    this.auth.login().subscribe((result) => {
      console.log(result);

    })
  }

}
