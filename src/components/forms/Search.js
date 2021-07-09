import { useState} from "react";

const Search = () => {
    const [location, setLocation] = useState("Austin, TX")

    return (
        <div>
            <form>
                <label>
                    Location
                    <input id="location"  value={location} onChange={e => setLocation(e.target.value)} placeholder="Location" />
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Search
