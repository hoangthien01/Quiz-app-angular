import { NgModule } from '@angular/core';
import { StoreModule } from '@ngrx/store';
import { quizReducer } from './store/reducer';

@NgModule({
    imports: [
        StoreModule.forFeature('feature_quiz', quizReducer)
    ]
})

export class CoreModule {}