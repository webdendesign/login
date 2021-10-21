import {HomePage, ProfilePage} from "../components/pages"

export const routes = [
  {path: '/', component: HomePage, exact: true},
  {path: '/profile', component: ProfilePage, exact: true}
]
