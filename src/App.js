import React, { useState } from 'react'
import './App.css'


function App() {
    let [value, inpValue] = useState("")
    let [todo, setTodoFunc] = useState([])
    let inp = (e) => {
        // inp=e.target.value
        inpValue(e.target.value)
    }
    let add = () => {
        setTodoFunc([...todo, value]);
        inpValue("")
    }
    let removeTodo = (ind) => {
        let arr = [...todo]
        arr.splice(ind, 1)
        setTodoFunc(arr)
    }
    let removeAllTodo = (ind) => {
        let arr2 = [...todo]
        arr2.splice(ind)
        setTodoFunc(arr2)
    }
    let updateTodo = (val, ind) => {
        let arr3 = [...todo]
        var a = prompt()
        arr3[ind] = a
        setTodoFunc(arr3)
    }
    return (
        <div className='main'>
            <div className='main2'><input value={value} onChange={inp} />
                <button className='one' onClick={add}>Add Todo</button>
                <button className='one' onClick={removeAllTodo}>Delete All</button>
            </div>
            <div>
                {
                    todo.map((val, ind) => {
                        return <li key={ind}>{val}<button className='two' onClick={() => removeTodo(ind)}>Delete</button><button className='two' onClick={() => updateTodo(val, ind)}>Update</button></li>

                    })
                }
            </div>
        </div>
    )
}
export default App