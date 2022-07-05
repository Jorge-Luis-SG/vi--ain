import { CommonModule } from '@angular/common';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ClipboardModule } from 'ngx-clipboard';
import { NgxSpinnerModule } from 'ngx-spinner';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { PipesModule } from './pipes/pipes.module';
// import { MetamaskComponent } from './components/metamask/metamask.component';
// import { NavbarComponent } from './components/navbar/navbar.component';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { AdminModule } from './components/admin/admin.module';
import { IConfig, NgxMaskModule } from 'ngx-mask';
import { PagesComponent } from './pages/pages.component';
import { AdminComponent } from './admin/admin.component';
import { PagesRoutingModule } from './pages/pages-routing.module';

// AoT requires an exported function for factories
export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http);
}

const maskConfig: Partial<IConfig> = {
  validation: false,
};


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    PagesComponent,
    AdminComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    FormsModule,
    ReactiveFormsModule,
    ClipboardModule,
    AppRoutingModule,
    PagesRoutingModule,
    NgxSpinnerModule,
    PipesModule,
    AdminModule,
    NgxMaskModule.forRoot(maskConfig),
    TranslateModule.forRoot({
      loader: {
        provide: TranslateLoader,
        useFactory: HttpLoaderFactory,
        deps: [HttpClient]
      }
    })],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
