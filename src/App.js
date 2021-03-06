import React from 'react';
import Comments from './pages/Comments';
import { Helmet } from 'react-helmet';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.scss';

const  App = () => {
  return (
    <div className="App">
      <Helmet>
        <meta charset="utf-8" />
        <title>Comments</title>
        <html dir="LTR" lang="en" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta name="description" content="Web site created using create-react-app" />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="robots" content="noindex"></meta>
      </Helmet>
      <Comments />
    </div>
  );
}

export default App;

