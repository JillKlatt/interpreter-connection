
// import { Dropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import { Dropdown, DropdownButton } from 'react-bootstrap'

function City() {

    //const cities = ["Atlanta", "Cleveland", "Chicago"]

    const cities = [
        {name: "Atlanta"}, {name: "Cleveland"}, {name: "Chicago"}
    ]

    function renderCities() {
        for (let i = 0; i < cities.length; i++){
            return (
            <Dropdown.Item href='#/action-1'>Here's One:{cities[i]}</Dropdown.Item>
            )
        }
    }

    function selectCity() {
        console.log(cities.length)
        return(
        cities.map(city => 
            <option value={city.name}>{city.name}</option>)
        )
    }


    return(
        <div>
        <Dropdown>
            <Dropdown.Toggle variant="success" id="dropdown-basic">
                Select City
            </Dropdown.Toggle>

            <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
                {renderCities()}
            </Dropdown.Menu>
        </Dropdown>

        <DropdownButton id="dropdown-basic-button" title="Select City">
            <Dropdown.Item href='#/action-1'>Action 1</Dropdown.Item>
        </DropdownButton>

        <select>
            {selectCity()}
        </select>
        </div>
    )

}

export default City