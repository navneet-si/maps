import { Card } from "./card";
import current from "../assets/current.png";
import routing from "../assets/routing.png";
import live from "../assets/live.png";
import trav from "../assets/ani.webm";

export function Features() {
  return (
     
      <div className="w-[95%]  m-auto h-screen  flex items-center justify-between relative">
        <h1 className="text-4xl font-bold absolute left-[42.5%] top-8 text-teal-800"><u>Features Provided :</u></h1>
      <div className="grid grid-cols-2 grid-rows-2 gap-x-4 w-[750px] gap-y-4">
        <Card title="Live Tracking" bgimg={live.toString() }description="Keep track while moving" />
        <Card title="Current Location" bgimg={current.toString()}description="Check Your Current Location"/>
        <Card title="Routing" bgimg={routing.toString()} description="Navigate between Places"/>
      </div>
      <div className="flex mr-40 items-center h-full">
        <video className="rounded-lg" src={trav} width="250px" height="300px" autoPlay loop muted />
      </div>
    </div>

  );
}
