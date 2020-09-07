import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AppComponent } from './app.component';
import { ArenaComponent } from './arena/arena.component';
import { QuickPlayComponent } from './quick-play/quick-play.component';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { routes } from './Routes';
import { AboutComponent } from './about/about.component';
import { CharactersComponent } from './characters/characters.component'

@NgModule({
  declarations: [
    AppComponent,
    ArenaComponent,
    QuickPlayComponent,
    HomeComponent,
    LoginComponent,
    NavBarComponent,
    AboutComponent,
    CharactersComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
