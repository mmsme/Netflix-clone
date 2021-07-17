import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule } from '@angular/common/http';

/**========================================================================
 *                           Packages
 *========================================================================**/
import { AngularSvgIconModule } from 'angular-svg-icon';

/**========================================================================
 *                           Components
 *========================================================================**/
import { SideNavBarComponent } from './components/side-nav-bar/side-nav-bar.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ChatBarComponent } from './components/chat-bar/chat-bar.component';

@NgModule({
  declarations: [
    AppComponent,
    SideNavBarComponent,
    NavbarComponent,
    ChatBarComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    AngularSvgIconModule.forRoot(),
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
