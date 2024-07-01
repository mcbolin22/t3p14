
import './App.css';
import EntryParent from './components/EntryParents';
import EntryForm from './components/EntryForm';
import { UseJournalData } from './context/BlogContext';

function App() {

  // let someExampleGlobalState = UseJournalData();

  let journalEntries = UseJournalData();

  const addEntryToJournal = null;

  // const addEntryToJournal = (title, author, content, date = Date.now(), id = null) => {
  //   // let currentJournalEntries = [...journalEntries];
  //   // currentJournalEntries.push({title, author, content, date});
  //   // setJournalEntries(currentJournalEntries);

  //   // crypto.uuid
  //   // use date as key
  //   // combine all data into a string title+content+date
  //   // simple number as id eg 0, 1, 2

  //   if (id){
  //     // UPDATE EXISTING ENTRY
  //     // find object with the matching ID
  //     let existingEntry = journalEntries.find((entry) => entry.id === id);
  //     // remove the found object from the array
  //     let currentJournalEntries = journalEntries.filter((entry) => entry.id !== id);
  //     // update the found object
  //     existingEntry = {
  //       title, author, content, date, id
  //     }
  //     // add the found object back into the array
  //     let updatedJournalEntries = [...currentJournalEntries, existingEntry];
  //     // write array to state & localstorage
  //     setJournalEntries(updatedJournalEntries);
  //     setStoredEntries(updatedJournalEntries);

  //   } else {
  //     // CREATE NEW ENTRY
  //     setJournalEntries([...journalEntries, { id: journalEntries.length, title, author, content, date }] );
  //     setStoredEntries([...journalEntries, { id: journalEntries.length, title, author, content, date }] );
  //   }
    

    
  // }

  

  return (
    <div className="App">

      {/* {someExampleGlobalState} */}

      {/* {journalEntries?.length > 0 && <p>{JSON.stringify(journalEntries)}</p>} */}

      <EntryForm entry={{}} addEntry={addEntryToJournal} />

      {journalEntries?.map((entry, index) => {
        return <EntryParent key={index} entryData={entry} addEntry={addEntryToJournal} />
      }) }
    </div>
  );
}

export default App;
