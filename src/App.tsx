import Input from "@components/Input";
import Output from "@components/Output";

const App = () => {
  return (
    <div className="bg-gray-100 justify-evenly flex-col lg:flex-row items-stretch flex p-3 h-screen">
      <Input />
      <Output />
    </div>
  );
};

export default App;
