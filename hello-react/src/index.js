import React, {useState} from 'react';
import ReactDOM from 'react-dom';
import './index.css';


function App() {
  const [manager, setManager] = useState("Alex");
  const [status, setStatus] = useState("Open");
  return (
    <>
    <div>
        <h1>Manager on Duty: {manager}</h1>
        <button onClick={() => setManager("Christine")}>New Manager</button>
    </div>
    <div>
      <h1>Status: {status}</h1>
      <button onClick={() => setStatus("Open")}>Open</button>
      <button onClick={() => setStatus("Closed")}>Closed</button>
      <button onClick={() => setStatus("Back in Five")}>Break</button>

      </div>
      </>
  ) 
}

ReactDOM.render(
  // <Hello library="React" message="dynamic data" number={3}/>,
  <App />,
  document.getElementById('root')
);




// const lakeList = ["Lake Michigan", "Lake Superior", "Lake Mead"]
// const lakeList = [
//   { id: "1", name: "Echo", trailhead: "Echo" },
//   { id: "2", name: "Maud", trailhead: "Wrights" },
//   { id: "3", name: "Velma", trailhead: "Bayview" }
// ];

// function Lake({name}) {
//   return (
//     <h1>{name}</h1>
//   );

// }



// function Lake(props) {
//   return (
//     <div>
//       <h1>Visit {props.name}!</h1>
//     </div>
//   );
// }

// function SkiResort(props){
//   return (
//     <div><h1>Visit the {props.name} Resort!</h1>
//     </div>
//   );

//   }

// function App(props) {
//   if (props.season === "summer") {
//     return <Lake name="Jenny Lake" />;
//   }
//   else if (props.season === "winter") {
//     return <SkiResort name="Jackson Hole Mountainside" />;
//   }
//   else { 
//     return <h2>Come back another time!</h2>;
//   }
// }

// function App({ lakes }) {
//   return (
//     <div>
//       {lakes.map(lake =>
//       (
//         <div key={lake.id}>
//           <h2>{lake.name}</h2>
//           <p>Accessed by: {lake.trailhead}</p>
//         </div>

//       ))
//       }
//     </div>
//   );
// }

// function App({lakes}) {
//   return (
//     <ul>
//       {lakes.map(
//         lake => (
//           <li>{lake}</li>
//         )
//       )}
//     </ul>
//   );
// }


// function Hello({library, message, number}) { 
//   // console.log(props);
//   return (
//     <div>
//       <h1>Welcome to {library}</h1>
//       <p>{message}</p>
//       <p>{number} Props Total</p>
//     </div>
//   );
// }


