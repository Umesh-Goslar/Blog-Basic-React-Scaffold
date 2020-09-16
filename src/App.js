import React from 'react';
import './app.scss';
class App extends React.Component {
    render() {
        return (
            <>
                <div className={"row"}>
                    <div className={"column"}>
                        <div className={"card"}>
                            <h1>Basic React Scaffold</h1>
                            <p>In this blog you will learn to set up a React Application:</p>
                            <ul>
                                <li>Using Webpack, Webpack Dev Server and Babel from scratch</li>
                            </ul>
                            <p>I am assuming that you have Node installed already on your system.</p>
                            <h2>Using Webpack, Webpack Dev Server and Babel from scratch</h2>
                            <p>The former was simple right. However, let's learn how we can set up our React App from scratch.</p>
                            <h3>Step 1: Create package.json file</h3>
                            <pre>
                                <span>cd ~<br />mkdir projectname<br />cd ~/projectname</span>
                                <br />
                                <span>Creates package.json file<br />npm init --yes</span>
                            </pre>
                            <h3>Step 2: Install react and react-dom</h3>
                            <pre>
                                <span>
                                    npm i react react-dom,<br />
                                    npm i react react-scripts,<br />
                                    npm install node-sass,
                                </span>
                            </pre>
                            <h3>Step 3: Create directories and files for the project</h3>
                            <pre>
                                <span>
                                    mkdir src public<br />
                                    touch src/index.js src/App.js public/index.html
                                </span>
                            </pre>
                            <h3>Step 4: Create a React Component src/App.js</h3>
                            <h3>Step 5: Create a div#root inside public/index.html</h3>
                            <h3>Step 6: Insert App.js component into the DOM</h3>
                            <h3>Step 7: Add scripts and browserslist in the package.json</h3>
                            <h3>Step 8: npm start</h3>
                        </div>
                    </div>
                </div>
            </>
        );
    }
}
export default App