import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'
import { Modal, DynamicSelect, DYVIX_MODAL_THEME, DYVIX_MODAL_VALIDATION_PRESET, DYVIX_GLOBAL_ANIMATION, DyvixToastContainer, dyvixToast, DYVIX_MODAL_ELEMENT} from 'dyvix-ui';


function App() {
  const testData = Array.from({ length: 9 }, (_, i) => ({
    type: "text",
    name: `field_${i}`,
    placeholder: `Extended Field ${i + 1}`,
    amount: 1
  }));
  
  return (
    <Modal
      theme={DYVIX_MODAL_THEME.MIDNIGHT}
      animation={DYVIX_GLOBAL_ANIMATION.UNFOLD}
      preset={"Login"}
      
      onSubmit={(data) => console.log(data)}
    />)
}

export default App
