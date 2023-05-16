import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { FixtureComponent } from './components/fixture/fixture.component';
import { BuilderBetsComponent } from './components/builder-bets/builder-bets.component';
import { ErrorComponent } from './components/error/error.component';
import { HeaderComponent } from './components/header/header.component';
import { UtcToLocalTimePipe } from './pipes/utc-to-local-time.pipe';

@NgModule({
  declarations: [
    AppComponent,
    FixtureComponent,
    BuilderBetsComponent,
    ErrorComponent,
    HeaderComponent,
    UtcToLocalTimePipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
