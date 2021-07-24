import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import { ApolloClient, InMemoryCache, ApolloProvider } from '@apollo/client'

import SiteHeader from './components/SiteHeader'
import Category from './pages/Category';
import Homepage from './pages/Homepage'
import ReviewDetails from './pages/ReviewDetails';

//apolloclient
const client = new ApolloClient({
  uri: 'http://localhost:1337/graphql',
  cache: new InMemoryCache()
})


function App() {
  return (
    <Router>
      <ApolloProvider client={client}>
    <div className="App">
     <SiteHeader />
     <Switch>
       <Route exact path="/">
          <Homepage />
       </Route>
       <Route path="/details/:id">
          <ReviewDetails />
       </Route>
       <Route path="/category/:id">
          <Category />
       </Route>
     
     </Switch>
    </div>
    </ApolloProvider>
    </Router>
  );
}

export default App;
