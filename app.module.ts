import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NbThemeModule,NbContextMenuModule,NbMenuModule, NbLayoutModule,NbCardModule,NbButtonModule,NbIconModule,NbSidebarModule } from '@nebular/theme';
import { NbEvaIconsModule } from '@nebular/eva-icons';
import { NbAuthModule, NbPasswordAuthStrategy } from '@nebular/auth';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RouterModule } from '@angular/router';
import { NgxChartsModule } from '@swimlane/ngx-charts';
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    NbThemeModule.forRoot({ name: 'dark' }),
    NgxChartsModule,
    NbLayoutModule,
    RouterModule,
    NbSidebarModule.forRoot(),
    NbMenuModule.forRoot(),
    NbContextMenuModule,
    HttpClientModule,
    NbEvaIconsModule,
    NbIconModule,
    NbCardModule,
    NbButtonModule,
    NbAuthModule.forRoot({
      strategies: [
        NbPasswordAuthStrategy.setup({
          name: 'email',
          login: {
            redirect: {
              success: '/dashboard',
              failure: '/dashboard', // stay on the same page
            },
          },
        }),
      ],
      forms: {
        login: {
          redirectDelay: 100, // delay before redirect after a successful login, while success message is shown to the user
          strategy: 'email',  // strategy id key.
          rememberMe: true,   // whether to show or not the `rememberMe` checkbox
         // socialLinks: socialLinks, // social links at the bottom of a page
        },
      }
        
    }),
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
