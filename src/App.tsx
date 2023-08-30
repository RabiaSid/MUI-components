import "./App.css";
import { useState } from "react";
import CustomizedTable from "./components/Table";
import CustomizedForm from "./components/form";


function App() {
  
  let data = [
    {
      postId: 1,
      id: 1,
      Dessert: "Frozen yoghurt",
      Calories: "159",
      Fat: "6.0",
      Carbs:"24",
      Protein:"4.0"
    },
    {
      postId: 1,
      id: 2,
      Dessert: "Ice cream sandwich",
      Calories: "237",
      Fat: "9.0",
      Carbs:"37",
      Protein:"4.3"
    },
    {
      postId: 1,
      id: 3,
      Dessert: "Eclair",
      Calories: "262",
      Fat: "16.0",
      Carbs:"24",
      Protein:"6.0"
    },
    {
      postId: 1,
      id: 4,
      Dessert: "Cupcake",
      Calories: "305",
      Fat: "3.7",
      Carbs:"67",
      Protein:"4.3"
    },
    {
      postId: 1,
      id: 5,
      Dessert: "Gingerbread",
      Calories: "356",
      Fat: "16.0",
      Carbs:"49",
      Protein:"3.9"
    },
    {
      postId: 1,
      id: 6,
      Dessert: "Frozen yoghurt",
      Calories: "159",
      Fat: "6.0",
      Carbs:"24",
      Protein:"4.0"
    },
    {
      postId: 1,
      id: 7,
      Dessert: "Ice cream sandwich",
      Calories: "237",
      Fat: "9.0",
      Carbs:"37",
      Protein:"4.3"
    },
    {
      postId: 1,
      id: 8,
      Dessert: "Eclair",
      Calories: "262",
      Fat: "16.0",
      Carbs:"24",
      Protein:"6.0"
    },
    

  ];

  return (
    <div className="container m-0 p-0 ">
      <div className="main_div py-md-5 py-2 ">
        <div className="row d-flex  justify-content-between align-items-center py-3 ">
          <h1 className="fs-2">
            Material-UI Components
          </h1>
          <div className="col-11 col-lg-8 my-3 ">
            <CustomizedTable 
              label="Testing data"
              cols={[
                {
                  heading: "Id",
                  key: "id",
                },
                {
                  heading: "Dessert",
                  key: "Dessert",
                },
                {
                  heading: "Calories",
                  key: "Calories",
                },
                {
                  heading: "Fat",
                  key: "Fat",
                },
                {
                  heading: "Carbs",
                  key: "Carbs",
                },
                {
                  heading: "Protein",
                  key: "Protein",
                },
              ]}
              datasourse={data}
            />
          </div>
          <div className="col-11 col-lg-4 my-3 d-flex justify-content-between align-items-center flex-column">
            <CustomizedForm />
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;

