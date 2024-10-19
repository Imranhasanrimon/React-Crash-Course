
const App = () => {
    const mark = 70;
    return (
        <div>
            {
                mark < 80 ? <h1>average result</h1> : <h1>brilliant result</h1>
            }
        </div>
    );
};

export default App;