import { Component, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { BlogsComponent } from './pages/blogs/blogs.component';
import { PageBlogComponent } from './pages/blogs/page-blog/page-blog.component';
import { ContactComponent } from './pages/contact/contact.component';
import { BuyAndSellComponent } from './pages/dashboard/pages/buy-and-sell/buy-and-sell.component';
import { CollectionNftComponent } from './pages/dashboard/pages/collection-nft/collection-nft.component';
import { DashboardComponent } from './pages/dashboard/pages/dashboard/dashboard.component';
import { HomeComponent } from './pages/home/home.component';
import { MintComponent } from './pages/mint/mint.component';
import { Mint2Component } from './pages/mint/mint2/mint2.component';
import { Page404Component } from './pages/page404/page404.component';
import { PortfolioComponent } from './pages/portfolio/portfolio.component';
import { DisruptiveComponent } from './pages/portfolio/web/disruptive/disruptive.component';
import { MestComponent } from './pages/portfolio/web/mest/mest.component';
import { NftixComponent } from './pages/portfolio/web/nftix/nftix.component';
import { PandarianComponent } from './pages/portfolio/web/pandarian/pandarian.component';
import { ServicesComponent } from './pages/services/services.component';
import { TeamComponent } from './pages/team/team.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'home', component: HomeComponent },
  { path: 'mint', component: MintComponent },
  { path: 'mint-nft', component: Mint2Component },
  { path: 'services', component: ServicesComponent },
  { path: 'contact-us', component: ContactComponent },
  { path: 'blogs', component: BlogsComponent },
  { path: 'blog', component: PageBlogComponent },
  { path: 'team', component: TeamComponent },
  { path: 'portfolio', component: PortfolioComponent },
  { path: 'disruptive-land', component: DisruptiveComponent },
  { path: 'mest', component: MestComponent },
  { path: 'nftix', component: NftixComponent },
  { path: 'pandarian', component: PandarianComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'collection', component: CollectionNftComponent },
  { path: 'buy-and-sell', component: BuyAndSellComponent },


  { path: '**', component: Page404Component }
];



@NgModule({
  imports: [BrowserModule, RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
