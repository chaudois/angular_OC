import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';

import {NumberPickerModule} from 'ng-number-picker';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PostService } from './services/post.service';
import { AuthComponent } from './auth/auth.component';
import { BlogPostContainerComponent } from './blog-post-container/blog-post-container.component';
import {Routes} from '@angular/router'

const appRoutes:Routes=[
  {path:'',component:BlogPostContainerComponent}
]
@NgModule({
  declarations: [
    AppComponent,
    BlogPostComponent,
    AuthComponent,
    BlogPostContainerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    NumberPickerModule
    ],
  providers: [
    PostService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
