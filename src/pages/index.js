import logo from "../static/images/logos/logo.svg"
// import './App.css';
import Layout from "../components/layout"


function IndexPage() {
    return (
        <Layout>
            <header className="App-header">
                <h1>Elizabeth | Design System</h1>
                <p>Welcome to your new site.</p>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                    Edit <code>src/App.js</code> and save to reload.
                </p>
            </header>
        </Layout>
    );
}

export default IndexPage;
