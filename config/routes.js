import React from 'react';
import BarChart from '../src/Charts/BarChart/barChart.jsx';
import Main from '../src/main.jsx';
import { Route, IndexRoute } from 'react-router';

/* Our default path is configured to render the Main component.
Main component returns the BarChart component wrapped in a <div>.
*/
export default (
  <Route path="/" component={Main}>
  </Route>
);
