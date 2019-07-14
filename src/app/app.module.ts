import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BlogPostComponent } from './blog-post/blog-post.component';
import { PostService } from './services/post.service';
import { AuthService} from './services/auth.service';
import { AuthComponent } from './auth/auth.component';
import { BlogPostContainerComponent } from './blog-post-container/blog-post-container.component';
import {RouterModule,Routes} from '@angular/router'
import {FormsModule} from '@angular/forms'

const appRoutes:Routes=[
  {path:'',component:BlogPostContainerComponent},
  {path:'blog',component:BlogPostContainerComponent},
  {path:'blog/:id',component:BlogPostComponent},
  {path:'auth',component:AuthComponent}
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
    RouterModule.forRoot(appRoutes),
    FormsModule


    ],
  providers: [
    PostService,
    AuthService
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
