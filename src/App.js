import React from 'react';
import Home from './components/Home';
import PageNotFound from './components/PageNotFound';
import ErrorBoundary from './components/ErrorBoundary';
import UserPage from './components/UserPage';
function App() {
  return (
    <div>
        <Home />
        <PageNotFound />
        <ErrorBoundary /> 
        <UserPage />       
    </div>
  )
}

export default App;   