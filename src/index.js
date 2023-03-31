import React from 'react';
import { render } from "react-dom";
import { Modal } from './component/Modal'

const App = () => (
  <div>
    <Modal />
  </div>
)

render(<App />, document.getElementById("root"));