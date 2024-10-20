import { useState } from "react";

const App = () => {
    const [status, setStatus] = useState(false);
    const changeStatus = () => {
        setStatus(!status);
    }
    return (
        <div>
            <button onClick={changeStatus}>{status ? 'ON' : 'Off'}</button>
        </div>
    );
};

export default App;

