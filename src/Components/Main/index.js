import React, {useEffect, useState} from 'react'
import axios from 'axios'
import Directory from '../Directory/index'

function Main(){
    const [users, setUsers] = useState([])
    const [search, setSearch] = useState("")

    useEffect(() => {
        getRandomUsers()
    }, [])

    async function getRandomUsers(){
        const result = await axios.get('https://randomuser.me/api/?results=25&seed=seed')
        setUsers(result.data.results)
    }

    function getSearchResults(){
        console.log('Searching for:', search)
        const searchedUser = users.filter(user => search.indexOf(user.name.first)> -1 || search.indexOf(user.name.last)> -1)
        console.log(searchedUser)
        setUsers(searchedUser)
    }
  

    function handleFormSubmit(event){
        event.preventDefault()
        getSearchResults()
    }

    function clearSearch(){
        setSearch("")
        getRandomUsers()
    }


    function sortEmail(){
        console.log('Sorting email')
        const sorted = users.sort( function(item1, item2){
            if(item1.email < item2.email){
                return -1
            }
            if (item1.email > item2.email){
                return 1
            }
            return 0
        })
        console.log('Sorted List: ', sorted)
        setUsers([...sorted])
    }

    function handleInputChange(event){
        setSearch(event.target.value)
        console.log(event.target.value)
    }

    function sortNumber(){
        console.log('Sorting phone number')
        const sorted = users.sort( function(item1, item2){
            if(item1.phone < item2.phone){
                return -1
            }
            if (item1.phone > item2.phone){
                return 1
            }
            return 0
        })
        console.log('Sorted List: ', sorted)
        setUsers([...sorted])
    }

    return(
        <div className="container" style={{marginTop: "20px", marginBottom: "20px"}}>
            {/* search function */}
            <div className="input-group mb-3 float-center">
                <input value={search} onChange={handleInputChange} type="text" className="form-control" placeholder="Search Employee" aria-label="Recipient's username" aria-describedby="button-addon2"/>
                <button className="btn btn-outline-danger" onClick={clearSearch}>Clear</button>
                <button onClick={handleFormSubmit} className="btn btn-outline-primary" type="submit" id="button-addon2">Search</button>
            </div>
            <div style={{display: "flex", justifyContent: "center",  margin: "auto", color: "gray"}}>
                <p><small>Use buttons below to sort employees</small></p>
            </div>
            <Directory list={users} sortEmail={sortEmail} sortNumber={sortNumber}/>
        </div>
    )
}

export default Main