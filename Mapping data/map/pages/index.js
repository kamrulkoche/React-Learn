import React from "react"
import Card from "./Component/Card"
import Data from './data.json'
export default function Home() {
  //console.log(Data[0].title);
  // let items = [];
  // items = Data.map((item) => <Card titleText={item.title} descText={item.desc} />);
  return (
    <>

      {/* <div>
        <h1 className="">Todo App</h1>
        <Card titleText="cell mother" descText="this is desc1"/>
        <Card titleText="cell father" descText="this is desc2"/>
        <Card titleText="cell wife" descText="this is desc3"/>
      </div> */}


      {/* <div>
        <h1 className="">Todo App</h1>
        <Card titleText={Data[0].title} descText={Data[0].desc}/>
        <Card titleText={Data[1].title} descText={Data[1].desc}/>
        <Card titleText={Data[2].title} descText={Data[2].desc}/>
        <Card titleText={Data[3].title} descText={Data[3].desc}/>
      </div> */}


      {/* <div>
        <h1 className="">Todo App</h1>
        {items}
      </div> */}


      <div>
        <h1 className="">Todo App</h1>
        {Data.map((item,index) => <Card key={index} titleText={item.title} descText={item.desc} />)}
      </div>
    </>
  )
}
