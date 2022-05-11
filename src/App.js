import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useState } from 'react';
import Response from './components/Response';

function App() {
  const [form, setForm] = useState("");
  const [prompts, setPrompts] = useState([]);
  const [preset, setPreset] = useState("none");



  const onSubmitHandler = (event) => {
    event.preventDefault();
    
    //adds prompt
    setPrompts([form, ...prompts,])
    setForm("")
  }

  const onChangeHandler = (event) => {
    setPreset(event.target.value)
  }

  const onChangeHandlerPrompt =(event) => {
    setPreset("none")
  }

  return (
    <div className="App">
      <h1>Welcome to OpenAI</h1>
      <form onSubmit={onSubmitHandler}>
        <label className='form-control w-50 mx-auto border-0'>Please choose a prompt or enter your own prompt below to see the AI's response:</label>
        <div className='form-group'>
        <select name="presetprompt" value={preset} onChange={onChangeHandler}>
          <option value="none">none</option>
          <option value="Write a poem about a dog">Write a poem about a dog</option>
          <option value="Write a story about a boy who loves penguins">Write a story about a boy who loves penguins</option>
          <option value="Tell me a joke">Tell me a joke</option>
          <option value="Describe a platypus">Describe a platypus</option>
        </select>
        </div>
        {
          preset === "none" 
            ? 
            <textarea className='form-control w-50 mx-auto' cols="50" rows="3" value={form} onChange={e => setForm(e.target.value)}>
            </textarea>
            :
            <textarea className='form-control w-50 mx-auto' cols="50" rows="3" value={preset} onChange={onChangeHandlerPrompt}>
            </textarea>
        }
        {/* // <textarea className='form-control w-50 mx-auto' cols="50" rows="3" value={form} onChange={e => setForm(e.target.value)}>
        // </textarea> */}
        <input type="submit" value="Submit" className='btn btn-primary mt-2' />
      </form>

      <h3 className='mt-5'>Responses</h3>
      <div className='w-50 mx-auto' style={{backgroundColor: 'lightgray', minHeight: 400}}>
        {
          prompts.map((prompt, i) => {
            return <Response key = {i} prompt = {prompt}/>
          })
        }
      </div>

    </div>
  );
}

export default App;
