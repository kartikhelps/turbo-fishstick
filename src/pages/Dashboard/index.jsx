import { CustomCalendar } from "./CustomCalendar"
import ActionAreaCard from "./CustomCards";
import CompossedLineBarArea from "./CustomCharts";
import ListRender from "./ListRender";
import App from "./RoundPie";
import RoundPie from "./RoundPie";

export default function Dashboard() {
  return (
    <>
      <div className="App">
        <h1>Component charts </h1>
        <CompossedLineBarArea />
      </div>
      <div className="App">
        <h1>Component Table</h1>
        <ListRender />
      </div>
      <div className="App">
        <h1>Calendar </h1>
        <CustomCalendar />
      </div>
      <ActionAreaCard/>
        {/* <App/> */}
    </>
  );
}
