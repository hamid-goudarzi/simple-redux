import React from "react";
import { Alert } from "react-bootstrap";
import Counter from "./components/Counter";

function App() {
    return (
        <div className="container rtl">
            <Alert  className="w-50 mx-auto text-center mt-5">
                Redux is easier than you thought  
            </Alert>
            <Counter />
        </div>
    );
}

export default App;
