import RowComponents from "./RowComponents";
import './main.css';
const Main = () => {
  return (
    <div>
      <h1 className="title">Pokemon List</h1>
      <div>
        <RowComponents />
      </div>
    </div>
  );
};

export default Main;
