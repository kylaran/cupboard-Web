import { NgModule } from "@angular/core";
import { Router, RouterModule, Routes } from "@angular/router";
import { DetailsPage } from "./HomePage/DetailsPage/detailspage";
import { GalleryPage } from "./HomePage/home-content/gallery-page/gallery";
import { HomeContentComponent } from "./HomePage/home-content/home-content.component";
import { HomeFeedbackComponent } from "./HomePage/home-feedback/home-feedback.component";

const page: Routes = [
    {path: '', component: HomeContentComponent},
    {path: 'contacts', component: HomeFeedbackComponent},
    {path: 'services', component: DetailsPage},
]
@NgModule({
imports:[RouterModule],
exports:[RouterModule]
})
export class AppRoutingModule{

}