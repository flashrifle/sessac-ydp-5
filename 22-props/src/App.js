import logo from './logo.svg';
import './App.css';
import FunctionComponent from './FunctionComponent';
import ClassComponent from './ClassComponent';
import Test from './Test';
import Test2 from './Test2';

import Button from './Button';
import Prop1 from './Prop1';
import Prop2 from './Prop2';
import Prop3 from './Prop3';

function App() {
    return (
        <div className="App">
            {/* <FunctionComponent name="새싹" />
            <FunctionComponent />
            <hr></hr>
            <ClassComponent name="새싹" />
            <ClassComponent />
            <hr></hr>
            <Button link="https://www.google.com">Google</Button> */}
            <Test />
            <Test2 />
            <Prop1 food="김취" />
            <Prop1 />
            <hr></hr>
            <Prop2
                title="코딩광풍"
                author="김코딩"
                price="13,500원"
                type="자기계발서"
            />
            <Prop3 text="콘솔 띄워" />
        </div>
    );
}

export default App;
