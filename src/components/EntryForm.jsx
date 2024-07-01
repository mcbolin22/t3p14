import { useState } from "react"

// eslint-disable-next-line
{/* <h1>{props.entryData.title}</h1>
<h4>{props.entryData.author}</h4>
<h6>{props.entryData.date}</h6>

<p>{props.entryData.content}</p> */}

export default function EntryForm(props){

    let [localTitle, setLocalTitle] = useState((props.entryData && props.entryData.title) || "Default Title");
    let [localAuthor, setLocalAuthor] = useState(props.entryData ? props.entryData.author : "Default Author");
    let [localContent, setLocalContent] = useState(props.entryData?.content || "Hello World! Write a journal entry!");
    // Date will be done later

    return(
        <div>
            <label htmlFor="entryTitle">Title:</label>
            <input type="text" name="entryTitle" className="entryTitle" value={localTitle} onChange={(event) => setLocalTitle(event.target.value)} />

            <label htmlFor="entryAuthor">Author:</label>
            <input type="text" name="entryAuthor" className="entryAuthor" value={localAuthor} onChange={(event) => setLocalAuthor(event.target.value)} />

            <label htmlFor="entryContent">Content:</label>
            <input type="text" name="entryContent" className="entryContent" value={localContent} onChange={(event) => setLocalContent(event.target.value)} />

            <button onClick={() => props.addEntry(localTitle, localAuthor, localContent, Date.now(), props.entryData?.id )}>
                Submit entry
            </button>

        </div>
    )
}