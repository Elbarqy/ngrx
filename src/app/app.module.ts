import { counterReducer } from './store/reducer';
import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { StoreModule } from '@ngrx/store';
import { TodoViewComponent } from './views/todo-view/todo-view.component';

@NgModule({
  declarations: [
    AppComponent,
    TodoViewComponent
  ],
  imports: [
    BrowserModule,
    StoreModule.forRoot({
      count: counterReducer
    }, {}),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
