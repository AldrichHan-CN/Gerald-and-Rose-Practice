import React from 'react'
import HomePage from '../HomePage'
import {homeObjOne, homeObjTwo} from './Data';

function Home() {
    return (
<>
          <HomePage {...homeObjOne} />
          <HomePage {...homeObjTwo} />       

</>
    )}
    export default Home