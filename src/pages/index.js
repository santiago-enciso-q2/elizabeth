import logo from "../static/images/logos/logo.svg"
// import './App.css';
import Layout from "../components/layout"
import { Link } from 'react-router-dom'

function IndexPage() {
    return (
        <Layout>
            <header className="App-header">
                <h1>Elizabeth | Design System</h1>
                <p>Welcome to your new site.</p>
                <img src={logo} className="App-logo" alt="logo" />
                <Link to="/page-2/">Go to page 2</Link> <br />
            </header>
        </Layout>
    );
}

export default IndexPage;
