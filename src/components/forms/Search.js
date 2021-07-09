import {useState} from "react";

const Search = ({id, labelText, initialValue}) => {
    const [inputValue, updateInputValue] = useState(initialValue)

    return (
        <div>
            <form>
                <label htmlFor={id}>
                    {labelText}
                    <input
                        id={id}
                        value={inputValue}
                        placeholder={initialValue}
                        onChange={(e) => updateInputValue(e.target.value)}
                        onClick={(e) => updateInputValue("")}/>
                </label>
                <button>Submit</button>
            </form>
        </div>
    )
}

export default Search

