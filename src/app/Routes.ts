import { HomeComponent } from './home/home.component'
import { QuickPlayComponent } from './quick-play/quick-play.component'
import { CharactersComponent } from './characters/characters.component'
import { AboutComponent } from './about/about.component'
export const routes = [
    {
        path: '', component: HomeComponent
    },
    {
        path: 'quickplay', component: QuickPlayComponent
    },
    {
        path: 'characters', component: CharactersComponent
    },
    {
        path: 'about', component: AboutComponent
    }
]