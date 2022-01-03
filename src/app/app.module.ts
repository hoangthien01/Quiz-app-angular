import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { QuizComponent } from './quiz/quiz.component';
import { ResultComponent } from './result/result.component';
import { StoreModule } from '@ngrx/store';
import { HttpClientModule } from '@angular/common/http';
<<<<<<< HEAD
import { FormsModule } from '@angular/forms';
=======
import { CoreModule } from './core/core.modules';
>>>>>>> 3fc5be9d38c570946e1e466497578c62f9ba13d3

@NgModule({
  declarations: [AppComponent, HomeComponent, QuizComponent, ResultComponent],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    StoreModule.forRoot({}, {}),
<<<<<<< HEAD
    FormsModule,
=======
    CoreModule
>>>>>>> 3fc5be9d38c570946e1e466497578c62f9ba13d3
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
