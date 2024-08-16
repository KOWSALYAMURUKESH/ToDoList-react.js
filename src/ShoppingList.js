import { useState} from "react"  
  import "./ShoppingList.css"
  
  
  const ShoppingList=()=>
{   
    const [list,setlist] =  useState([{id:1,activity:"Wake up 4.00am"},{id:2,activity:"Take meditation 30 minuts"} ])
    
    const [newitem,setnewitem] = useState("")

const handleChange=(eve)=>{
    setnewitem(eve.target.value)
}
 const handleAdd=()=>{ 
setlist([...list,{id:list.length+1,activity:newitem}])
setnewitem("")
 }
const handleDelete=(removeid)=>{
   var temparr = list.filter(function(item){
    if(item.id === removeid){
        return false
    }
    else{
        return true
    }
   })
   setlist(temparr)
}


    return(<div className="container">
        <div>
    <h1>To do List</h1>
    <input  className="input"  value={newitem} onChange={handleChange}  placeholder="Enter your List" type="text"></input>
    <button  className="add" onClick={handleAdd}>Add</button>
    
    <ol>
   
{
    list.map(function(item) {
        return(<li>{item.activity} <button className="delete" onClick = {()=>{handleDelete(item.id)}}>Delete</button> </li>
            
        )
    })
}
    </ol>
    </div>
    </div>)
}

export default ShoppingList