// Include the React library
const React = require("react");

// Include the react-router module
const router = require("react-router");

// Include the Route component for displaying individual routes
const Route = router.Route;

// Include the Router component to contain all our Routes
// Here where we can pass in some configuration as props
const Router = router.Router;
// Include the hashHistory prop to handle routing client side without a server
// https://github.com/ReactTraining/react-router/blob/master/docs/guides/Histories.md#hashhistory
const hashHistory = router.hashHistory;

// Include the IndexRoute (catch-all route)
const IndexRoute = router.IndexRoute;

// Reference the high-level components
const Main = require("../components/Main");
const Search = require("../components/children/Search");
const Saved = require("../components/children/Saved");
const Results = require("../components/children/Results");


// Export the Routes
module.exports = (

  // The high level component is the Router component
  <Router history={hashHistory}>
    
      <Route path="/" component={Main}>

      {/* Three children */}
      <Route path="Search" component={Search} />
      <Route path="Results" component={Results} />
      <Route path="Saved" component={Saved} />


      {/* If user selects any other path... we get the Info Route */}
      <IndexRoute component={Search} />

    </Route>
   </Router>

);
