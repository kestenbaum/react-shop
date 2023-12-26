import React, {FC} from 'react';
import Header from "./components/Header";
import './style/index.css'
import ItemList from "./components/ItemList";


const App:FC = () => {
    return (
        <div className='app'>
            <Header/>
            <ItemList/>
        </div>
    );
};

export default App;