import './App.css';
import Table from "./Components/Table/Table";

const App=()=> {

const header_1=[
	{header:"Name", accessor:"name"}, 
	{header:"Rating", accessor:"movie_rating"} , 
	{header:"Age", accessor:"age"} , 
	{header:"City", accessor:"city"} , 
	{header:"Region", accessor:"region"}, 
	{header:"Country", accessor:"country"}
]

const data_1 = [
	{
		name:  "John",
		age:  29,
		movie_rating:  4,
		city:  "Vancouver",
		region:  "British Columbia",
		country:  "Canada",
	},
	{
		name:  "Sarah",
		age:  32,
		movie_rating:  5,
		city:  "Frankfurt",
		region:  "Hesse",
		country:  "Germany",
	},
	{
		name:  "Dave",
		age:  44,
		movie_rating:  4,
		city:  "San Diego",
		region:  "California",
		country:  "United States",
	},
];

const data_2 = [
	{
		item:  "apple",
		inventory:  12,
		size:  "medium",
	},
        {
		item:  "blueberry",
		inventory:  103,
		size:  "small",
	},
    	{
		item:  "grapefruit",
		inventory:  4,
		size:  "large",
	},
    	{
		item:  "strawberry",
		inventory:  14,
		size:  "small",
	},
];

const header_2=[
	{header:"Item", accessor:"item"}, 
	{header:"Inventory", accessor:"inventory"} , 
	{header:"Size", accessor:"size"} , 
]

const sortColumns=["name","age"]

  return (
    <div className="App">
      <Table data={data_1} columns={header_1} sort={sortColumns}/>
	  <Table data={data_2} columns={header_2} />
    </div>
  );
}

export default App;
