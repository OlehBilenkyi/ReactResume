import { useEffect } from 'react';
import ReactGA from 'react-ga4';

export const useAnalytics = (pageTitle: string) => {
  useEffect(() => {
    ReactGA.initialize('YOUR_GA4_ID');
    ReactGA.send({ 
      hitType: 'pageview', 
      page: window.location.pathname, 
      title: pageTitle 
    });
  }, [pageTitle]);
};