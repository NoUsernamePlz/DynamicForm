import "./App.css";
import Form from "./components/form";

function App() {
  return (
    <div className="App">
      <div className="bg-violet-400 w-screen h-screen flex justify-center ">
        <div className=" w-full md:w-5/6 lg:w-5/6 bg-gray">
          <h1 className="text-xl  text-white font-bold m-2 md:m-8 lg:m-8 ">
            Create Form add Fields Of Your Choice :)
          </h1>

          <Form />
        </div>
      </div>
    </div>
  );
}

export default App;
