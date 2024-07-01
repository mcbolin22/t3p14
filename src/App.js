
import './App.css';
import EntryParent from './components/EntryParents';
import EntryForm from './components/EntryForm';
import { UseJournalData } from './context/BlogContext';

function App() {

  // let someExampleGlobalState = UseJournalData();

  let journalEntries = UseJournalData();

  return (
    <div className="App">

      {/* {someExampleGlobalState} */}

      {/* {journalEntries?.length > 0 && <p>{JSON.stringify(journalEntries)}</p>} */}

      <EntryForm entryData={{}}  />

      {journalEntries?.map((entry, index) => {
        return <EntryParent key={index} entryData={entry} />
      }) }
    </div>
  );
}

export default App;
