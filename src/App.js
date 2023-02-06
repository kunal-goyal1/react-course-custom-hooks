import React from "react";
import BackwardCounter from "./components/BackwardCounter";
import ForwardCounter from "./components/ForwardCounter";

function App() {
    return (
        <React.Fragment>
            <h1>Welcome to Prepbytes</h1>
            <ForwardCounter />
            <BackwardCounter />
        </React.Fragment>
    );
}

export default App;
