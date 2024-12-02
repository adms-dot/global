import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { RouterProvider, createHashRouter } from 'react-router-dom';
import Home from './components/Home.jsx';
import About from './components/About.jsx';
// import About from './components/About.jsx';
import Contact from './components/Contact.jsx';

// Facilities
import Communication from './components/Facilities/Communication.jsx';
import Counselling from './components/Facilities/Counselling.jsx';
import Exam from './components/Facilities/Exam.jsx';
import Internet from './components/Facilities/Internet.jsx';
import Learning from './components/Facilities/Learning.jsx';
import Ocd from './components/Facilities/Ocd.jsx';
import School from './components/Facilities/School.jsx';
import Speech from './components/Facilities/Speech.jsx';
import Adhd from './components/Facilities/Adhd.jsx';
import Anger from './components/Facilities/Anger.jsx';
import Autism from './components/Facilities/Autism.jsx';
import Behaviour from './components/Facilities/Behaviour.jsx';


//Services
import Early from './components/Services/Early.jsx';
import Nri from './components/Services/Nri.jsx';
import Online from './components/Services/Online.jsx';
import Parenting from './components/Services/Parenting.jsx';
import Pediatric from './components/Services/Pediatric.jsx';
import Psychological from './components/Services/Psychological.jsx';
import Special from './components/Services/Special.jsx';
import Stammering from './components/Services/Stammering.jsx';
import Station from './components/Services/Station.jsx';
import Art from './components/Services/Art.jsx';

//branches
import Branches from './components/Branches.jsx';
import Moga from './components/Moga.jsx';
import Bathinda from './components/Bathinda.jsx';
import Faridkot from './components/Faridkot.jsx';


const router = createHashRouter([
  {
    path: '/',
    element: <App />,
    children: [
      {
        path: '',
        element: <Home />,
      },
      {
        path: 'about',
        element: <About />,
      },
      {
        path: 'contact',
        element: <Contact />,
      },
      {
        path: 'Counselling',
        element: <Counselling />,
      },
      {
        path: 'Autism',
        element: <Autism />,
      },
      {
        path: 'Anger',
        element: <Anger />,
      },
      {
        path: 'Adhd',
        element: <Adhd />,
      },
      {
        path: 'learning',
        element: <Learning />,
      },
      {
        path: 'behaviour',
        element: <Behaviour />,
      },
      {
        path: 'speech',
        element: <Speech />,
      },
      {
        path: 'internet',
        element: <Internet />,
      },
      {
        path: 'school',
        element: <School />,
      },
      {
        path: 'communication',
        element: <Communication />,
      },
      {
        path: 'exam',
        element: <Exam />,
      },
      {
        path: 'ocd',
        element: <Ocd />,
      },

      {
        path: 'pediatric',
        element: <Pediatric />,
      },
      {
        path: 'psychological',
        element: <Psychological />,
      },
      {
        path: 'early',
        element: <Early />,
      },
      {
        path: 'art',
        element: <Art />,
      },
      {
        path: 'special',
        element: <Special />,
      },
      {
        path: 'parenting',
        element: <Parenting />,
      },
      {
        path: 'nri',
        element: <Nri />,
      },
      {
        path: 'station',
        element: <Station />,
      },
      {
        path: 'stammering',
        element: <Stammering />,
      },
      
      {
        path: 'online',
        element: <Online />,
      },
      {
        path: 'branches',
        element: <Branches />,
      },
      {
        path: 'moga',
        element: <Moga />,
      },
      {
        path: 'bathinda',
        element: <Bathinda />,
      },
      {
        path: 'faridkot',
        element: <Faridkot />,
      },
      

      

      

      

      
      
      
      
      
      
    
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    
    <RouterProvider router={router} />
    
  </React.StrictMode>
);