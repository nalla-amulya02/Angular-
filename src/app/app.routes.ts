import { Routes } from '@angular/router';
import { AboutComponent } from './component/about/about.component';
import { ContactComponent } from './component/contact/contact.component';
import { CareersComponent } from './component/careers/careers.component';
import { ServicesComponent } from './component/services/services.component';
import { ContentComponent } from './component/content/content.component';


export const routes: Routes = [
    {path:""  ,component:ContentComponent},
    {path:"about",component: AboutComponent},
    {path:"contact", component:ContactComponent},
    {path:"services", component:ServicesComponent},
    {path:"careers", component:CareersComponent}
    

];
