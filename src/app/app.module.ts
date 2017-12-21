// Import Dependencies
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
//import { NgProgressModule, NgProgressBrowserXhr } from 'ngx-progressbar';
import { BrowserXhr } from '@angular/http'
import 'rxjs/add/operator/map';
// import { MatProgressSpinnerModule } from '@angular/material';
// import { NgProgressModule } from 'ngx-progressbar';
// import { RoundProgressModule } from 'angular-svg-round-progressbar';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { MatSelectModule } from '@angular/material';
// Services
import { ScriptService } from './services/script.service';
//import { FlashMessagesModule } from 'angular2-flash-messages';
import { ApiserviceService } from './services/apiservice.service';
import { CommonMethodsService } from './services/common-methods.service';

// Containers
import { AppComponent } from './app.component';
import { PageNotFoundComponent } from "./components/pagestatus/404.component";

export function createTranslateLoader(http: HttpClient) {
  return new TranslateHttpLoader(http, './assets/i18n/', '.json');
}

//Logins
import { ForgotPWRespComponent } from "./components/login/forgotpwresp/forgotpwresp.component";
import { ForgotUNComponent } from "./components/login/forgotusrname/forgotusrname.component";
import { ForgotUNRespComponent } from "./components/login/forgotusrnmresp/forgotusrnmresp.component";
import { InvalidInputComponent } from "./components/login/invalidinput/invalidinput.component";
import { LoginUserComponent } from "./components/login/loginuser/loginuser.component";
import { RegisterComponent } from "./components/login/register/register.component";
import { RoleSelectComponent } from "./components/login/roleselect/roleselect.component";
import { SecurityQNComponent } from "./components/login/secquestions/secquestions.component";
import { HomeComponent } from './components/home/home.component';
import { InitialLoginComponent } from './components/login/initlogin/initlogin.component';
import { DashboardComponent } from './components/dashboard/dashboard.component';
import { GridLayoutComponent } from './components/gridlayout/gridlayout.component';
import { ForgotPWComponent } from './components/login/forgotpw/forgotpw.component';
import { SidebarComponent } from './components/dashboard/sidebar/sidebar.component';
import { HeaderComponent } from "./components/dashboard/header/header.component";
import { LangSelectComponent } from './components/login/lang-select/lang-select.component';
import { FooterComponent } from './components/login/footer/footer.component';
import { LoginHeaderComponent } from './components/login/login-header/login-header.component';
import { LoginContentComponent } from './components/login/login-content/login-content.component';
import { LoginServiceService } from './services/login-service.service';

// Routes
export const ROUTES: Routes = [
  {
    path: '',
    component: LoginContentComponent,
    children: [
      {
        path: '',
        component: RoleSelectComponent
      },
      {
        path: 'roleselect',
        component: RoleSelectComponent
      },
      {
        path: 'register',
        component: RegisterComponent
      },
      {
        path: 'loginuser',
        component: LoginUserComponent
      },
      {
        path: 'invalidinput',
        component: InvalidInputComponent
      },
      {
        path: 'forgotusrname',
        component: ForgotUNComponent
      },
      {
        path: 'forgotusrnmresp',
        component: ForgotUNRespComponent
      },
      {
        path: 'forgotpw',
        component: ForgotPWComponent
      },
      {
        path: 'forgotpwresp',
        component: ForgotPWRespComponent
      },
      {
        path: 'secquestions',
        component: SecurityQNComponent
      },
      {
        path: 'initlogin',
        component: InitialLoginComponent
      },
      {
        path: 'dashboard',
        component: DashboardComponent
      },
      {
        path: 'gridlayout',
        component: GridLayoutComponent
      }
    ]
  },
  { path: '**', component: PageNotFoundComponent }
];



@NgModule({
  declarations: [
    AppComponent,
    PageNotFoundComponent,
    HomeComponent,
    InitialLoginComponent,
    ForgotPWComponent,
    ForgotPWRespComponent,
    ForgotUNComponent,
    ForgotUNRespComponent,
    InvalidInputComponent,
    LoginUserComponent,
    RegisterComponent,
    RoleSelectComponent,
    SecurityQNComponent,
    DashboardComponent,
    GridLayoutComponent,
    SidebarComponent,
    HeaderComponent,
    LangSelectComponent,
    FooterComponent,
    LoginHeaderComponent,
    LoginContentComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    HttpClientModule,
    BrowserAnimationsModule,
    //FlashMessagesModule,
    //NgProgressModule,
    RouterModule.forRoot(ROUTES),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: (createTranslateLoader),
        deps: [HttpClient]
      }
    }),
    MatSelectModule
  ],
  providers: [
    ScriptService,
    ApiserviceService,
    CommonMethodsService,
    LoginServiceService
    //{provide: BrowserXhr, useClass: NgProgressBrowserXhr}
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
