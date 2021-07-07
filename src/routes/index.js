// import About from "../Examples/About";
// import Contact from "../Examples/Contact";
// import Home from "../Examples/Home";

import AboutPage from "../containers/Home/AboutPage";
import ContactPage from "../containers/Home/ContactPage";
import HOCPage from "../containers/Home/HOCPage";
import HomePage from "../containers/Home/HomePage";
import HookPage from "../containers/Home/HookPage";


const routesHome = [
  {
    exact: true,
    path: '/',
    component: HomePage
  },
  {
    exact: false,
    path: '/contact',
    component: ContactPage
  },
  {
    exact: false,
    path: '/about',
    component: AboutPage
  },
  {
    exact: false,
    path: '/hoc',
    component: HOCPage
  },
  {
    exact: false,
    path: '/hook',
    component: HookPage
  },
];

export { routesHome };
