// import { CustomCalendar } from "./CustomCalendar"
import CompossedLineBarArea from "./CustomCharts";
import ListRender from "./ListRender";

export default function Dashboard() {
  return (
    <>
      <div className="App">
        <h1>Component charts </h1>
        <CompossedLineBarArea />
      </div>
      <div className="App">
        <h1>Component Table</h1>
        {/* <StrippedTable /> */}
        <ListRender />
      </div>
      <div className="App">
        <h1>Calendar </h1>
        {/* <CustomCalendar /> */}
      </div>
    </>
  );
}
