import React, {useReducer, useEffect} from 'react';
import ReactDOM from 'react-dom';
import './index.css';

// function GitHubUser({login}) { 
//   const [data, setData] = useState(null);
//   useEffect(() => {
//     fetch(`https://api.github.com/users/${login}`)
//       .then(res => res.json())
//       .then(setData)
//       .catch(console.error);
//   }, []);
//   if (data) {
//     return <div><h1>{data.login}</h1>
//       <img src={data.avatar_url} width={100} />
//       <p>{JSON.stringify(data)}</p></div>;
//   }
//   return null;

// }


function Checkbox() {
  const [checked, toggle] = useReducer(
    checked => !checked,
    false
  );


  
  return (<>
    <input type="checkbox"
      onChange={toggle} />
    {checked ? "checked" : "not checked"}
  </>
  );
}

// function App() { 
//   const [val, setVal] = useState("");
//   const [val2, setVal2] = useState("");
//   useEffect(() => {
//     console.log(`field 1: ${val}`);
//   }, [val] );
//   useEffect(() => {
//     console.log(`field 2: ${val2}`);
//   }, [val2]);
//   return (
//     <>
//       <label>Favorite Phrase:</label>
//       <input
//         value={val}
//         onChange={e=> setVal(e.target.value)}
//       />
//       <br />
//       <label>Second Favorite Phrase:</label>
//       <input
//         value={val2}
//         onChange={e=>setVal2(e.target.value)}
//       />

//     </>
//   )
// }


ReactDOM.render(

  <Checkbox />,
  document.getElementById('root')
);



// function Checkbox() {
//   const [checked, setChecked] = useState(false);
//   useEffect(() => {
//     // alert(`checked: ${checked.toString()}`);
//     console.log(`checked: ${checked.toString()}`);
//   });

//   return (
//     <>
//       <input
//         type="checkbox"
//         value={checked}
//         onChange={() =>
//           setChecked(checked => !checked)}
//       />
//       {checked ? "checked" : "not checked"}
//     </>
//   )
// }

// function App() {
//   const [year, setYear] = useState(2050);
//   const [manager, setManager] = useState("Alex");
//   const [status, setStatus] = useState("Open");
//   return (
//     <>
//       <div>
//         <h1>{year}</h1>
//         <button onClick={()=> setYear(year+1) }>Click Me</button>
//       </div>
//     <div>
//         <h1>Manager on Duty: {manager}</h1>
//         <button onClick={() => setManager("Christine")}>New Manager</button>
//     </div>
//     <div>
//       <h1>Status: {status}</h1>
//       <button onClick={() => setStatus("Open")}>Open</button>
//       <button onClick={() => setStatus("Closed")}>Closed</button>
//       <button onClick={() => setStatus("Back in Five")}>Break</button>

//       </div>
//       </>
//   ) 
// }




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


