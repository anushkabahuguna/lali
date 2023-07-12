import { createRef } from "react";
import axios from "axios";
import Registration from "../pages/Registration";
import Login from "../pages/Login";
import About from "../pages/About";
import Contact from "../pages/Contact";

const routes = [
  {
    element: <h1>Home page</h1>,
    path: "/",
    // loader: async () => {
    //   let response = await axios.get(`/api/campgrounds/`);
    //   return response.data;
    // },
    nodeRef: createRef(),
  },
  {
    element: <About/>,
    path: "/about",
    // loader: async () => {
    //   let response = await axios.get(`/api/campgrounds/`);
    //   return response.data;
    // },
    nodeRef: createRef(),
  },
  {
    element: <Login/>,
    path: "/login",
    // loader: async () => {
    //   let response = await axios.get(`/api/campgrounds/`);
    //   return response.data;
    // },
    nodeRef: createRef(),
  },
  {
    element: <Registration />,
    path: "/register",
    // loader: async () => {
    //   let response = await axios.get(`/api/campgrounds/`);
    //   return response.data;
    // },
    nodeRef: createRef(),
  },
  {
    element: <Contact />,
    path: "/contact",
    // loader: async () => {
    //   let response = await axios.get(`/api/campgrounds/`);
    //   return response.data;
    // },
    nodeRef: createRef(),
  },
  //   {
  //     loader: async ({ params }) => {
  //       try {
  //         let response = await axios.get(`/api/campgrounds/${params.campid}`);
  //         // console.log("---------", response);

  //         return response.data;
  //       } catch (err) {
  //         // we can redirect user to maybe a 404 page which contains link to homepage
  //         // and sign up...
  //         console.log(err);
  //         // right now lets redirect to campground list view
  //         return redirect("/campgrounds");
  //       }
  //     },
  //     element: <Campground />,
  //     path: "/campgrounds/:campid",
  //     nodeRef: createRef(),
  //   },

  //   {
  //     loader: async ({ params }) => {
  //       try {
  //         let response = await axios.get(`/api/campgrounds/${params.campid}`);
  //         return response.data;
  //       } catch (err) {
  //         // we can redirect user to maybe a 404 page which contains link to homepage
  //         // and sing up...
  //         console.log(err.response.data);
  //         return redirect("/campgrounds");
  //       }
  //     },
  //     element: <EditCampgroundForm />,
  //     path: "/campgrounds/:campid/edit",
  //     nodeRef: createRef(),
  //   },

  {
    path: "*",
    element: <h1>Not found (404)</h1>,
  },
];

export default routes;
