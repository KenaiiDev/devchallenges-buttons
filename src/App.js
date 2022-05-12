import React from 'react';
import Buttons from "./components/Buttons";

function App() {
  return (
    <div className="app">
      <h1>Buttons</h1>
      <div className='buttons-group'>
        <Buttons 
          variant="default"
          color="default"
          size="medium"
          text="<Button />"
        />
        <Buttons 
          variant="default"
          color="default"
          size="medium"
          hover={true}
          text="&hover, &focus"
        />
      </div>
      <div className='buttons-group'>
        <Buttons 
          variant="outline"
          color="primary"
          size="medium"
          text="<Button variant='outline' />"
        />
        <Buttons 
          variant="outline"
          color="primary"
          size="medium"
          text="&hover, &focus"
          hover={true}
        />
      </div>
      <div className='buttons-group'>
        <Buttons 
          variant="text"
          color="primary"
          size="medium"
          text="<Button variant='text' />"
        />
        <Buttons 
          variant="text"
          color="primary"
          size="medium"
          text="&hover, &focus"
          hover={true}
        />
      </div>
      <div className='buttons-group'>
        <Buttons 
          variant="default"
          color="primary"
          size="medium"
          text="<Button disableShadow />"
          disableShadow={true}
        />
      </div>
      <div className='buttons-group'>
        <Buttons 
          variant="default"
          color="primary"
          size="medium"
          text="<Button disabled />"
          disabled={true}
        />
        <Buttons 
          variant="text"
          color="primary"
          size="medium"
          text="<Button variant=text disabled />"
          hover={true}
          disabled={true}
        />
      </div>
      <div className='buttons-group'>
        <Buttons 
          variant="default"
          color="default"
          size="medium"
          text="<Button startIcon=local_grocery_store/>"
          startIcon="local_grocery_store"
        />
        <Buttons 
          variant="default"
          color="default"
          size="medium"
          hover={true}
          text="<Button endIcon=local_grocery_store/>"
          endIcon="local_grocery_store"
        />
      </div>
      <div className='buttons-group'>
        <Buttons 
          variant="default"
          color="default"
          size="small"
          text="<Button size='small' />"
        />
        <Buttons 
          variant="default"
          color="default"
          size="medium"
          text="<Button size='medium' />"
        />
        <Buttons 
          variant="default"
          color="default"
          size="large"
          text="<Button size='large' />"
        />
      </div>
      <div className='buttons-group'>
        <Buttons 
          variant="default"
          color="default"
          size="medium"
          text="<Button color=default/>"
        />
        <Buttons 
          variant="default"
          color="primary"
          size="medium"
          text="<Button color=primary/>"
        />
        <Buttons 
          variant="default"
          color="secondary"
          size="medium"
          text="<Button color=secondary/>"
        />
        <Buttons 
          variant="default"
          color="danger"
          size="medium"
          text="<Button color=danger/>"
        />
      </div>
      <div className='buttons-group'>
        <Buttons 
          variant="default"
          color="default"
          size="medium"
          text="&hover, &focus"
          hover={true}
        />
        <Buttons 
          variant="default"
          color="primary"
          size="medium"
          text="&hover, &focus"
          hover={true}
        />
        <Buttons 
          variant="default"
          color="secondary"
          size="medium"
          text="&hover, &focus"
          hover={true}
        />
        <Buttons 
          variant="default"
          color="danger"
          size="medium"
          text="&hover, &focus"
          hover={true}
        />
      </div>
    </div>
  );
}

export default App;
