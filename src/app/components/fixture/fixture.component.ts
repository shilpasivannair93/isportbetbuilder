import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Fixture } from 'src/app/models/betbuilder';
import { BetbuilderService } from 'src/app/services/betbuilder.service';
import { DatePipe, formatDate } from '@angular/common';

@Component({
  selector: 'app-fixture',
  templateUrl: './fixture.component.html',
  styleUrls: ['./fixture.component.css']
})
export class FixtureComponent implements OnInit {
  fixtures!: Fixture[];
  dateArray: string[] = [];
  selectedIndex = 0;
  selectedDate!: string;
  constructor(private betBuilderService: BetbuilderService, private router: Router) {
    this.setDateArray();
  }
  ngOnInit(): void {
  }

  setDateArray() {
    const today = new Date();
    for (let i = 0; i < 7; i++) {
      const date = new Date();
      date.setDate(today.getDate() + i);
      this.dateArray.push(formatDate(date, 'yyyy-MM-dd', 'en-US'));
    }
    this.selectedDate = this.dateArray[0];
    this.getAllFixtures();
  }

  getAllFixtures() {
    this.betBuilderService.getAllFixtures().subscribe(fixtures => {
      const offsetInMillis = new Date().getTimezoneOffset() * 60 * 1000;
      fixtures.forEach(fixture => {
        const utcTime = new Date(fixture.KickOffUtc).getTime();
        const localTime = new Date(utcTime + offsetInMillis);
        fixture.KickOffUtc = localTime.toLocaleString();
      });
      this.fixtures = fixtures;
    });
  }

  toggleActive(index: number) {
    this.selectedIndex = index;
    this.selectedDate = this.dateArray[index];
  }

  get leagueNames() {
    // Get unique league names
    if (this.fixtures && this.fixtures.length) {
      return [...new Set(this.fixtures.map(fixture => fixture.LeagueName))];
    } else {
      return
    }
  }

  getFixturesByLeagueName(leagueName: string) {
    // Filter fixtures by leagueName
    return this.fixtures.filter(fixture => {
      const datePipe = new DatePipe('en-US');
      const formattedDate = datePipe.transform(fixture.KickOffUtc, 'yyyy-MM-dd');
      if (fixture.LeagueName === leagueName && formattedDate === this.selectedDate) {
        return fixture;
      } else {
        return;
      }
    });
  }

  redirectToBuilderBets(fixture: Fixture) {
    // Redirect to Builder Bets
    const queryParams = encodeURIComponent(JSON.stringify(fixture));
    this.router.navigateByUrl(`/bets?data=${queryParams}`);
  }
}
