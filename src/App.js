// import Decrement from "./components/Decrement";
// import Increment from "./components/Increment";
// import Input from "./components/Input";
// import Reset from "./components/Reset";
import TodoPage from "./pages/TodoPage";

function App() {
  return (
    <div>
      {/* <div className="text-center d-flex justify-content-center pt-5">
        <Decrement />
        <Input />
        <Increment />
      </div>
      <div className="pt-4" >
        <Reset />
      </div> */}
      <div className="container ">
        <TodoPage />
      </div>
    </div>
  );
}

export default App;
