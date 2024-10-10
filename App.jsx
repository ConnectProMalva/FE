import * as React from "react";
import * as ReactDOM from "react-dom/client";
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";

import SignUp from "./Pages/SignupPage/SignUp";
import LandingPage from "./Pages/LandingPage/LandingPage";
import EmailVerification from "./Pages/EmailVerificationPage/EmailVerification";
import Login from "./Pages/LoginPage/Login";
import ForgotPassword from "./Pages/ForgotPasswordPage/ForgotPassword";
import Profile from "./Pages/ProfilePage/Profile";
import Services from "./Pages/ServicesPage/Services";
import HowItWorks from "./Pages/HowItWorksPage/HowItWorks";
import ArtisanDashboard from "./Pages/ArtisanDashboard/ArtisanDashboard";
import Jobs from "./Pages/ArtisanJOBS/Jobs";
import JobDetails from "./Pages/ArtisanJOBS/JobDetails";
import PostAJob from "./Pages/PostAJob.jsx/PostAJob"
import FaqPage from "./Pages/FaqPage/FaqPage";
import Application from "./Pages/ApplicationPage/Application";
import ArtisanProfile from "./Pages/ProfilePage/ArtisanProfile/ArtisanProfile";
import ArtisanWorkExperience from "./Pages/ProfilePage/ArtisanProfile/ArtisanWorkExperience";
import ArtisanPortfolio from "./Pages/ProfilePage/ArtisanProfile/ArtisanPortfolio";
import ArtisanAboutProfile from "./Pages/ProfilePage/ArtisanProfile/ArtisanAboutProfile";
import ArtisanSocialLinks from "./Pages/ProfilePage/ArtisanProfile/ArtisanSocialLinks";
import ArtisanContacts from "./Pages/ProfilePage/ArtisanProfile/ArtisanContacts";
import ClientContacts from "./Pages/ProfilePage/ClientProfile/ClientContacts";
import ClientSocialLinks from "./Pages/ProfilePage/ClientProfile/ClientSocialLinks";
import ClientAboutProfile from "./Pages/ProfilePage/ClientProfile/ClientAboutProfile";
import ClientPortfolio from "./Pages/ProfilePage/ClientProfile/ClientPortfolio";
import ClientWorkExperience from "./Pages/ProfilePage/ClientProfile/ClientWorkExperience";
import ClientProfile from "./Pages/ProfilePage/ClientProfile/ClientProfile";
import ClientDashboard from "./Pages/ClientDashboard/ClientDashboard";





const router = createBrowserRouter([
  {
    path: "/",
    element: <LandingPage/>,
  },

  {
    path: "/SignUp",
    element: <SignUp/>,
  },

  {
    path: "/EmailVerification",
    element: <EmailVerification/>
  },
  {
    path: "/Login",
    element: <Login/>
  },
  {
    path: "/ForgotPassword",
    element: <ForgotPassword/>
  },
  {
    path: "/Profile",
    element: <Profile/>
  },
  {
    path: "/Services",
    element: <Services/>
  },
  {
    path: "/ArtisanDashboard",
    element: <ArtisanDashboard/>
  },
  {
    path: "/HowItWorks",
    element: <HowItWorks/>
  },
  {
    path: "/job-listing",
    element: <Jobs/>
  },
  {
    path: "/job-details/:id",
    element: <JobDetails/>
  },
  {
    path: "/HowItWorks",
    element: <HowItWorks/>
  },
  {
    path: "/PostAJob",
    element: <PostAJob/>
  },
  {
    path: "/faq",
    element: <FaqPage/>
  },
  {
    path: "/application",
    element: <Application/>
  },
  {
    path: "/artisanProfile",
    element: <ArtisanProfile/>
  },
  {
    path: "/artisanWorkExperience",
    element: <ArtisanWorkExperience/>
  },
  {
    path: "/artisanPortfolio",
    element: <ArtisanPortfolio/>
  },
  {
    path: "/artisanAbout",
    element: <ArtisanAboutProfile/>
  },
  {
    path: "/artisanSocials",
    element: <ArtisanSocialLinks/>
  },
  {
    path: "/contacts",
    element: <ArtisanContacts/>
  },
  {
    path: "/ClientDashboard",
    element: <ClientDashboard/>
  },
  {
    path: "/clientProfile",
    element: <ClientProfile/>
  },
  {
    path: "/clientWorkExperience",
    element: <ClientWorkExperience/>
  },
  {
    path: "/clientPortfolio",
    element: <ClientPortfolio/>
  },
  {
    path: "/clientAbout",
    element: <ClientAboutProfile/>
  },
  {
    path: "/clientSocials",
    element: <ClientSocialLinks/>
  },
  {
    path: "/ClientContacts",
    element: <ClientContacts/>
  }
  
]);


export default function App() {
  return (
    <React.StrictMode>
      <RouterProvider router={router} />
    </React.StrictMode>
  );
}