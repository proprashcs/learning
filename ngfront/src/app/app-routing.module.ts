import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { RegisterComponent } from './components/register/register.component';
import { LoginComponent } from './components/login/login.component';
import { ForgotPasswordComponent } from './components/forgot-password/forgot-password.component';
import { BlogsComponent } from './components/blogs/blogs.component';
import { UsersComponent } from './components/users/users.component';
import { WriteBlogComponent } from './components/write-blog/write-blog.component';
import { AuthguardService } from './services/authguard.service';
import { TinyEditorComponent } from './components/tiny-editor/tiny-editor.component';
import { BlogComponent } from './components/blog/blog.component';
import { EditBlogComponent } from './components/edit-blog/edit-blog.component';
import { SearchComponent } from './components/search/search.component';
import { LearnComponent } from './components/learn/learn.component';
import { AddContentComponent } from './components/add-content/add-content.component';
import { ContentGuardService } from './services/content-guard.service';
import { AddEbookComponent } from './components/add-ebook/add-ebook.component';
import { EditProfileComponent } from './components/edit-profile/edit-profile.component';
import { EditContentComponent } from './components/edit-content/edit-content.component';
import { AskQuestionComponent } from './components/ask-question/ask-question.component';
import { DiscussComponent } from './components/discuss/discuss.component';
import { QuestionComponent } from './components/question/question.component';
import { WriteAnswerComponent } from './components/write-answer/write-answer.component';
import { EditQuestionComponent } from './components/edit-question/edit-question.component';
import { EditAnswerComponent } from './components/edit-answer/edit-answer.component';
import { SearchPeopleComponent } from './components/search-people/search-people.component';
import { AddVideoComponent } from './components/add-video/add-video.component';
import { AddPlaylistComponent } from './components/add-playlist/add-playlist.component';
import { PlaylistComponent } from './components/playlist/playlist.component';
import { EditPlaylistComponent } from './components/edit-playlist/edit-playlist.component';
import { FeedbackComponent } from './components/feedback/feedback.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { WriteFeedComponent } from './components/write-feed/write-feed.component';
import { AddSourceComponent } from './components/add-source/add-source.component';
import { CodeComponent } from './components/code/code.component';
import { SubmissionComponent } from './components/submission/submission.component';
import { SearchCodeComponent } from './components/search-code/search-code.component';
import { AddStudyFileComponent } from './components/add-study-file/add-study-file.component';
import { UrlErrorComponent } from './components/url-error/url-error.component';





const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'login', component: LoginComponent },
  { path: 'forgotPassword', component: ForgotPasswordComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'users', component: UsersComponent },
  { path: 'users/:username', component: UsersComponent },
  { path: 'writeBlog', component: WriteBlogComponent, canActivate: [AuthguardService] },
  { path: 'tiny', component: TinyEditorComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:id', component: BlogComponent},
  { path: 'editBlog', component: EditBlogComponent, canActivate: [AuthguardService] },
  { path: 'search', component: SearchComponent },
  { path: 'learn/:topic/:subtopic/:section', component: LearnComponent },
  { path: 'learn/:topic/:subtopic', component: LearnComponent },
  { path: 'learn/:topic', component: LearnComponent },
  { path: 'learn', component: LearnComponent },
  { path: 'addContent/:topic/:subtopic', component: AddContentComponent, canActivate: [ContentGuardService]},
  { path: 'addContent/:topic', component: AddContentComponent, canActivate: [ContentGuardService]},
  { path: 'addContent', component: AddContentComponent, canActivate: [ContentGuardService]},
  { path: 'addEbook', component: AddEbookComponent, canActivate: [ContentGuardService] },
  { path: 'editProfile', component: EditProfileComponent, canActivate: [AuthguardService] },
  { path: 'editContent/:topic/:subtopic/:section', component: EditContentComponent, canActivate: [ContentGuardService] },
  { path: 'editContent/:topic/:subtopic', component: EditContentComponent, canActivate: [ContentGuardService] },
  { path: 'editContent/:topic', component: EditContentComponent, canActivate: [ContentGuardService] },
  { path: 'askQuestion', component: AskQuestionComponent, canActivate: [AuthguardService] },
  { path: 'discuss', component: DiscussComponent },
  { path: 'question', component: QuestionComponent },
  { path: 'question/:id', component: QuestionComponent },
  { path: 'writeAnswer/:id', component: WriteAnswerComponent, canActivate: [AuthguardService] },
  { path: "editQuestion", component: EditQuestionComponent, canActivate: [AuthguardService] },
  { path: "editAnswer", component: EditAnswerComponent },
  { path: "searchPeople", component: SearchPeopleComponent, canActivate: [AuthguardService] },
  { path: 'addVideo', component: AddVideoComponent, canActivate: [ContentGuardService] },
  { path: 'addPlaylist', component: AddPlaylistComponent, canActivate: [ContentGuardService] },
  { path: 'playlist/:topic/:subtopic/:name/:number', component: PlaylistComponent },
  { path: 'editPlaylist/:topic/:subtopic/:name', component: EditPlaylistComponent, canActivate: [ContentGuardService] },
  { path: 'feedback', component: FeedbackComponent, canActivate: [AuthguardService] },
  { path: 'dashboard', component: DashboardComponent, canActivate: [AuthguardService] },
  { path: 'addFeed', component: WriteFeedComponent, canActivate: [ContentGuardService] },
  { path: 'addSource', component: AddSourceComponent, canActivate: [ContentGuardService] },
  { path: 'code', component: CodeComponent, canActivate: [AuthguardService] },
  { path: 'submission/:id', component: SubmissionComponent, canActivate: [AuthguardService] },
  { path: 'searchCodes', component: SearchCodeComponent, canActivate: [AuthguardService] },
  { path: 'addStudyFile', component: AddStudyFileComponent, canActivate: [ContentGuardService] },


  // include all routes before this line
  { path: '404', component: UrlErrorComponent },
  { path: '**', redirectTo: '/404' },
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
