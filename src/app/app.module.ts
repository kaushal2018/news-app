import { DateTimeFormatPipe } from './pipe/datetimeformatpipe';
import { AppRoutingModule } from './app-routing.module';
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { PageNotFoundComponent } from './components/page-not-found/page-not-found.component';
import { NewsapiService } from './services/newsapi.service';
import { SummaryPipe } from './pipe/summary.pipe';
import { DateFormatPipe } from './pipe/dateformatpipe';
import { BusinessComponent } from './components/business/business.component';
import { EntertainmentComponent } from './components/entertainment/entertainment.component';
import { GeneralComponent } from './components/general/general.component';
import { HealthComponent } from './components/health/health.component';
import { InComponent } from './components/in/in.component';
import { NewsComponent } from './components/news/news.component';
import { ScienceComponent } from './components/science/science.component';
import { SportsComponent } from './components/sports/sports.component';
import { TechnologyComponent } from './components/technology/technology.component';
import { UkComponent } from './components/uk/uk.component';
import { UsComponent } from './components/us/us.component';
import { FormsModule } from '@angular/forms';
import { SearchComponent } from './components/search/search.component';

@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    FooterComponent,
    HomeComponent,
    PageNotFoundComponent,
    SummaryPipe,
    DateFormatPipe,
    DateTimeFormatPipe,
    BusinessComponent,
    EntertainmentComponent,
    GeneralComponent,
    HealthComponent,
    InComponent,
    NewsComponent,
    ScienceComponent,
    SportsComponent,
    TechnologyComponent,
    UkComponent,
    UsComponent,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    NgbModule.forRoot(),
    AppRoutingModule
  ],
  providers: [NewsapiService],
  bootstrap: [AppComponent]
})
export class AppModule {}
