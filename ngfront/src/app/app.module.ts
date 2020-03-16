import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';
import { FlashMessagesModule } from 'angular2-flash-messages';


import { FormsModule } from '@angular/forms';
// import { RouterModule, Routes } from '@angular/router';

import { NavbarComponent } from './components/navbar/navbar.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { HomeComponent } from './components/home/home.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { ValidateService } from './services/validate.service';
import { AuthService } from './services/auth.service';
import { AuthguardService } from'./services/authguard.service';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BlogService } from './services/blog.service';
import { UsersComponent } from './components/users/users.component';
import { WriteBlogComponent } from './components/write-blog/write-blog.component';
import { TinyEditorComponent } from './components/tiny-editor/tiny-editor.component';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { SearchComponent } from './components/search/search.component';
import { BlogListComponent } from './components/blog-list/blog-list.component';
import { CommentService } from './services/comment.service';
import { LearnComponent } from './components/learn/learn.component';
import { AddContentComponent } from './components/add-content/add-content.component';
import { LearnService } from './services/learn.service';
import { AddEbookComponent } from './components/add-ebook/add-ebook.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditContentComponent } from './components/edit-content/edit-content.component';
import { DiscussComponent } from './components/discuss/discuss.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { DiscussService } from './services/discuss.service';
import { QuestionListComponent } from './components/question-list/question-list.component';
import { QuestionComponent } from './components/question/question.component';
import { WriteAnswerComponent } from './components/write-answer/write-answer.component';
import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { EditAnswerComponent } from './components/edit-answer/edit-answer.component';
import { MainService } from './services/main.service';
import { NotificationService } from './services/notification.service';
import { SearchPeopleComponent } from './components/search-people/search-people.component';
import { UrlErrorComponent } from './components/url-error/url-error.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { AddPlaylistComponent } from './components/add-playlist/add-playlist.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { EditPlaylistComponent } from './components/edit-playlist/edit-playlist.component';
import { ContentGuardService } from './services/content-guard.service';
import { FeedbackService } from './services/feedback.service';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { VideoPlayerComponent } from './components/video-player/video-player.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { NewsFeedService } from './services/news-feed.service';
import { WriteFeedComponent } from './components/write-feed/write-feed.component';
import { AddSourceComponent } from './components/add-source/add-source.component';
import { TinyInputPipe } from './pipes/tiny-input.pipe';
import { CodeEditorComponent } from './components/code-editor/code-editor.component';
import { CodeComponent } from './components/code/code.component';
import { AceEditorModule } from 'ng2-ace-editor'
import { CodeService } from './services/code.service';
import { SubmissionComponent } from './components/submission/submission.component';
import { SearchCodeComponent } from './components/search-code/search-code.component';
import { AddStudyFileComponent } from './components/add-study-file/add-study-file.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    RegisterComponent,
    LoginComponent,
    HomeComponent,
    BlogsComponent,
    ForgotPasswordComponent,
    UsersComponent,
    WriteBlogComponent,
    TinyEditorComponent,
    BlogComponent,
    EditBlogComponent,
    SearchComponent,
    BlogListComponent,
    LearnComponent,
    AddContentComponent,
    AddEbookComponent,
    EditProfileComponent,
    EditContentComponent,
    DiscussComponent,
    AskQuestionComponent,
    QuestionListComponent,
    QuestionComponent,
    WriteAnswerComponent,
    EditQuestionComponent,
    EditAnswerComponent,
    SearchPeopleComponent,
    UrlErrorComponent,
    AddVideoComponent,
    AddPlaylistComponent,
    PlaylistComponent,
    EditPlaylistComponent,
    FeedbackComponent,
    VideoPlayerComponent,
    DashboardComponent,
    WriteFeedComponent,
    AddSourceComponent,
    TinyInputPipe,
    CodeEditorComponent,
    CodeComponent,
    SubmissionComponent,
    SearchCodeComponent,
    AddStudyFileComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FlashMessagesModule,
    AceEditorModule,
    FormsModule,
    FlashMessagesModule.forRoot(),
    
  ],
  providers: [
    ValidateService,
    AuthService,
    AuthguardService,
    BlogService,
    CommentService,
    LearnService,
    DiscussService,
    MainService,
    NotificationService,
    ContentGuardService,
    FeedbackService,
    NewsFeedService,
    CodeService,
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
