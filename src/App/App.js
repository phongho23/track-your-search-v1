import React, {Component} from 'react';
import {Route, Link} from 'react-router-dom';
import JoblistNav from '../JoblistNav/JoblistNav';
import JobPageNav from '../JobPageNav/JobPageNav';
import JoblistMain from '../JoblistMain/JoblistMain';
import JobPageMain from '../JobPageMain/JobPageMain';
import landingPage from '../landingPage/landingPage';
import dummyStore from '../dummy-store';
import {getJoboppsForWeek, findJobitem, findWeek} from '../jobopps-helpers';
import './App.css'; 

class App extends Component {
    state = {
        jobopps: [],
        jobweeks: []
    };

    componentDidMount() {
        setTimeout(() => this.setState(dummyStore), 600);
    }

    renderNavRoutes() {
        const {jobopps, jobweeks} = this.state;
        return (
            <>
                {['/home', '/home/week/:weekId'].map(path => (
                    <Route
                        exact
                        key={path}
                        path={path}
                        render={routeProps => (
                            <JoblistNav
                                jobweeks={jobweeks}
                                jobopps={jobopps}
                                {...routeProps}
                            />
                        )}
                    />
                ))}

                <Route
                    path="/home/Jobitem/:jobId"
                    render={routeProps => {
                        const {jobId} = routeProps.match.params;
                        const job = findJobitem(jobopps, jobId) || {};
                        const week = findWeek(jobweeks, job.weekId);
                        return <JobPageNav {...routeProps} week={week} />;
                    }}
                />

                <Route path="/home/add-week" component={JobPageNav} />
                <Route path="/home/add-job" component={JobPageNav} />
            </>
        );
    }

    renderMainRoutes() {
        const {jobopps, jobweeks} = this.state;
        return (
            <>
                {['/home', '/home/week/:weekId'].map(path => (
                    <Route
                        exact
                        key={ path }
                        path={ path }
                        render={routeProps => {
                            const { weekId } = routeProps.match.params;
                            const joboppsForWeek = getJoboppsForWeek(
                                jobopps,
                                weekId
                            );
                            return (
                                <JoblistMain
                                    { ...routeProps }
                                    jobopps={ joboppsForWeek }
                                />
                            );
                        }}
                    />
                ))}
                <Route
                    path="/home/Jobitem/:jobId"
                    render={routeProps => {
                        const {jobId} = routeProps.match.params;
                        const job = findJobitem(jobopps, jobId);
                        return <JobPageMain {...routeProps} job={job} />;
                    }}
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
                return <Route exact path="/" component={landingPage} />
            }}
        />
        );
    }

    render() {
        return (
            <div className="App">
                <header className="App__header">
                    <a><h1>
                        <Link to="/home">TrackYourSearch</Link>{' '}
                    </h1></a>
                    <a><h2>
                        <Link to="/home">Home</Link>
                    </h2></a>
                    <a><h2>
                        <Link to="/home/add-week">Add Week</Link>
                    </h2></a>
                    <a><h2>
                        <Link to="/home/add-job">Add Job</Link>
                    </h2></a>
                </header>

                <nav className="App__landing">
                    {this.renderAppLanding()}
                </nav>

                <nav className="App__nav">
                    {this.renderNavRoutes()}
                </nav>

                <main className="App__main">
                    {this.renderMainRoutes()}
                </main>

            </div>
        );
    }
}

export default App;