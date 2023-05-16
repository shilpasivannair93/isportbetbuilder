import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { BuilderBets, Fixture, Legs, Markets } from 'src/app/models/betbuilder';
import { BetbuilderService } from 'src/app/services/betbuilder.service';

@Component({
  selector: 'app-builder-bets',
  templateUrl: './builder-bets.component.html',
  styleUrls: ['./builder-bets.component.css']
})
export class BuilderBetsComponent implements OnInit {

  currentFixture!: Fixture;
  legs!: Legs[];
  markets!: Markets[];
  currentLeg!: string;
  currentMarket!: string;
  bets!: BuilderBets;
  constructor(private route: ActivatedRoute, private router: Router, private betBuilderService: BetbuilderService) { }

  ngOnInit() {
    this.setCurrentFixture();
    this.getAllLegs();
  }

  setCurrentFixture() {
    this.route.queryParams.subscribe(params => {
      if (params['data']) {
        const decodedParams = decodeURIComponent(params['data']);
        this.currentFixture = JSON.parse(decodedParams);
      }
    });
  }

  getAllLegs() {
    this.betBuilderService.getAllLegs().subscribe(legs => {
      this.legs = legs;
      this.currentLeg = String(legs[0].selectionId);
      this.getAllMarkets();
    })
  }

  getAllMarkets() {
    this.betBuilderService.getAllMarkets().subscribe(markets => {
      this.markets = markets;
      this.currentMarket = markets[0].MarketId;
      this.getAllBuilderBets();
    })
  }

  getAllBuilderBets() {
    const instance = {
      marketId: this.currentMarket,
      legs: this.currentLeg,
      matchId: this.currentFixture.MatchId
    };
    this.betBuilderService.getBuilderBets(instance).subscribe(bets => {
      this.bets = bets
    });
  }

  setCurrentMarket(value: string) {
    this.currentMarket = value;
    this.getAllBuilderBets();
  }

  setCurrentLeg(value: string) {
    this.currentLeg = value;
    this.getAllBuilderBets();
  }


  backToFixtures() {
    this.router.navigateByUrl('/fixtures');
  }
}
