import Card from './components/Card';
import Student from './components/Student';
import TodoList from './components/TodoList';

function App() {
    const handleClick = (name: string, grade: number): void => {
        console.log(`안녕 난 ${name}이고, ${grade}학년 이야`);
    };
    return (
        <div className="App">
            ts with react
            <Student name="새싹" grade={3} handleClick={handleClick} />
            <br />
            <Student
                name="새싹"
                grade={1}
                part="CS"
                handleClick={handleClick}
            />
            <br />
            <Card title="오늘 배울 것은?">
                <p>Typescript with React</p>
            </Card>
            <br />
            <TodoList />
        </div>
    );
}

export default App;
