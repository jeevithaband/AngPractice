import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { CollegeComponent } from './college/college.component';
import { StudentComponent } from './student/student.component';
import { TeacherComponent } from './teacher/teacher.component';
import { ViewexComponent } from './viewex/viewex.component';
import { ServicecompoComponent } from './servicecompo/servicecompo.component';
import { OnepComponent } from './onep/onep.component';
import { TwoComponent } from './two/two.component';
import { ReactiveformComponent } from './reactiveform/reactiveform.component';
import { Reactiveform2Component } from './reactiveform2/reactiveform2.component';
import { TodoComponent } from './todo/todo.component';
import { DairyComponent } from './dairy/dairy.component';
import { PipecompoComponent } from './pipecompo/pipecompo.component';
import { PipenewcompoPipe } from './pipenewcompo.pipe';
import { UserComponent } from './user.component';
import { ChildComponent } from './child/child.component';
import { ParentComponent } from './parent/parent.component';




@NgModule({
  declarations: [
    AppComponent,
    CollegeComponent,
    StudentComponent,
    TeacherComponent,
    ViewexComponent,
    ServicecompoComponent,
    OnepComponent,
    TwoComponent,
    ReactiveformComponent,
    Reactiveform2Component,
    TodoComponent,
    DairyComponent,
    PipecompoComponent,
    PipenewcompoPipe,
    UserComponent,
    ChildComponent,
    ParentComponent,
  
   
    
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
