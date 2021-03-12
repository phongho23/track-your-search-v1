import React, {Component} from 'react';
import { Route, Link, BrowserRouter as Router, Switch } from 'react-router-dom';
import JoblistNav from '../JoblistNav/JoblistNav';
import JobPageNav from '../JobPageNav/JobPageNav';
import JoblistMain from '../JoblistMain/JoblistMain';
import JobPageMain from '../JobPageMain/JobPageMain';
import landingPage from '../landingPage/landingPage';
import AddWeek from '../AddWeek/AddWeek';
import AddJob from '../AddJob/AddJob';
import config from '../config';
import './App.css'; 
import ApiContext from '../ApiContext';

import '../../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { NavigationBar } from '../NavHeader/NavHeader';

class App extends Component {
    state = {
        jobs: [],
        weeks: []
    };

    componentDidMount() {
        Promise.all([
          fetch(`${config.API_ENDPOINT}/jobs`),
          fetch(`${config.API_ENDPOINT}/weeks`)
        ])
          .then(([jobsRes, weeksRes]) => {
            if (!jobsRes.ok)
              return jobsRes.json().then(e => Promise.reject(e))
            if (!weeksRes.ok)
              return weeksRes.json().then(e => Promise.reject(e))
    
            return Promise.all([
              jobsRes.json(),
              weeksRes.json(),
            ])
          })
          .then(([jobs, weeks]) => {
            this.setState({ jobs, weeks })
          })
          .catch(error => {
            console.error({ error })
          })
      }

      handleAddWeek = week => {
        this.setState({
          weeks: [
            ...this.state.weeks,
            week
          ]
        })
      }

      handleAddJob = job => {
        this.setState({
          jobs: [
            ...this.state.jobs,
            job
          ]
        })
      }      

      handleDeleteJob = jobId => {
        this.setState({
          jobs: this.state.jobs.filter(job => job.id !== jobId)
        })
      }

    renderNavRoutes() {
        return (
            <>
                {['/home', '/home/week/:weekId'].map(path => 
                    <Route
                      exact
                      key={path}
                      path={path}
                      component={JoblistNav}
                    />
                )}
                <Route
                  path="/home/job/:jobId"
                  component={JobPageNav}
                />
                <Route 
                  path="/home/add-week" 
                  component={JobPageNav} 
                />
                <Route 
                  path="/home/add-job" 
                  component={JobPageNav} 
                />
            </>
        )
    }

    renderMainRoutes() {
        return (
            <>
                {['/home', '/home/week/:weekId'].map(path => (
                    <Route
                        exact
                        key={ path }
                        path={ path }
                        component={JoblistMain}
                    />
                ))}
                <Route
                    path="/home/job/:jobId"
                    component={JobPageMain}
                />
                <Route
                    path="/home/add-week"
                    component={AddWeek}
                />
                <Route
                    path="/home/add-job"
                    component={AddJob}
                />
            </>
        );
    }

    renderAppLanding() {
        return (
        <Route
            exact
            path="/"
            render={ () => {
                return <Route 
                  exact path="/" 
                  component={landingPage} 
                />
            }}
        />
        );
    }

    render() {
      const value = {
        jobs: this.state.jobs,
        weeks: this.state.weeks,
        addWeek: this.handleAddWeek,
        addJob: this.handleAddJob,
        deleteJob: this.handleDeleteJob,
      }

        return (
            <ApiContext.Provider value={value} >

            <div className="App" >

              <nav className="App__nav" >
                  <Router>
                    <NavigationBar />
                  </Router>
              </nav>

              <nav className="App__landing" style={{ backgroundImage: `url("https://i.imgur.com/cVXTiZ8.png")` }}>
                {this.renderAppLanding()}
              </nav>

              <nav className="App__nav"  style={{ backgroundImage: `url("https://i.imgur.com/Waz7kvK.png")` }}>
                {this.renderNavRoutes()}
              </nav>

              <main className="App__main" style={{ backgroundImage: `url("https://i.imgur.com/ziDD8Wt.png")` }}>
                {this.renderMainRoutes()}
              </main>

            </div>
            
            </ApiContext.Provider>
        );
    }
}

export default App;







// return (
//   <ApiContext.Provider value={value}>
//   <div className="App">
//     <nav className="App__nav">
//       <Router>
//         <NavigationBar />
//       </Router>
//     <header className="App__header">
//     <h1>
//         <Link to="/home">TrackYourSearch</Link>{" "}
//         </h1>
//       <nav>
//         <h2>
//         <Link to="/home">Home</Link>
//         </h2>
//         <h2>
//         <Link to="/home/add-week">Add Week</Link>
//         </h2>
//         <h2>
//         <Link to="/home/add-job">Add Job</Link>
//         </h2>
//       </nav>
//     </header>
//     </nav>

//       <nav className="App__landing">
//           {this.renderAppLanding()}
//       </nav>

//       <nav className="App__nav">
//           {this.renderNavRoutes()}
//       </nav>

//       <main className="App__main">
//           {this.renderMainRoutes()}
//       </main>
//   </div>
//   </ApiContext.Provider>