
const App = () => {
    const postFormData = (e) => {
        e.preventDefault()
    }

    return (
        <div>
            <form onSubmit={postFormData}>
                <input type="text" name="" placeholder="Name" id="" />
                <button type="submit">Submit</button>
            </form>

        </div>
    );
};

export default App;