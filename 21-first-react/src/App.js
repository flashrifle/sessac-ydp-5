import logo from './logo.svg';
import './App.css';

function App() {
    const name = 'jaemin';
    const student = 'sesac';
    const styles = {
        backgroundColor: 'yellow',
        color: 'blue',
        fontSize: '48px',
    };
    const underline = {
        textDecoration: 'underline',
    };
    const animal = '강아지';
    const a = 5;
    const b = 1;
    const title = 'css 어려워';
    return (
        <div className="App">
            {/* 자동 생성 코드 */}
            {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header> */}
            {/* JSX */}
            {/* 하나로 감싸인 요소 */}
            <>
                {/* js 문법 사용 
               - {}로 감싸면 js 표현식 사용이 가능 
               - {}안에서 삼항 연산자 사용 가능 (if, for문 사용 불가) */}
                <div>{name} 안녕?</div>
                <div>
                    {student === 'sesac' ? (
                        <span>새싹인</span>
                    ) : (
                        <span>새싹이 뭐지</span>
                    )}{' '}
                </div>
                {/* 3. style 속성 */}
                <div style={styles}>스타일 적용</div>
                <div
                    style={{
                        backgroundColor: 'yellow',
                        color: 'blue',
                        fontSize: '48px',
                    }}
                >
                    스타일 적용2
                </div>
                {/* 4. className 사용
                - class 속성이 아닌 className 속성 사용 (ex. <div className="App">) 
                
                5. 종료 태그가 없는 태그 사용
                - 기존의 종료 태그가 없는 태그를 사용하더라도 종료 태그를 작성해야 한다. <input /> or <input></input>
                6. 주석
                - jsx 외부 //
                - jsx 내부 {* *}
                */}
                <div>
                    문제 1. 이것은 div태그 입니다.
                    <h3>이것은 div태그 안에 있는 h3 태그입니다</h3>
                </div>
                <hr></hr>
                <h2>
                    문제 2. 제 반려동물의 이름은{' '}
                    <span style={underline}>{name}</span>
                    입니다.
                    <span style={underline}>{name}</span>은{' '}
                    <span style={underline}>{animal}</span>입니다.
                </h2>
                <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmG0E8umwlZItAYhIZcffLgFcUkDIr7WiicQ&usqp=CAU"></img>
                <hr></hr>
                <div>
                    문제 3.
                    {3 + 5 == 8 ? (
                        <span>정답입니다.</span>
                    ) : (
                        <span>틀렸습니다.</span>
                    )}
                </div>
                <hr></hr>
                <div>문제 4. {a > b && <span>a가 b보다 큽니다</span>} </div>
                <hr></hr>
                <div>문제 5. </div>
                <div className="test">{title}</div>
                <br></br>
                아이디 : <input className="input"></input>
                <br></br>
                비밀번호 : <input className="input"></input>
                <hr></hr>
                <div>문제6</div>
                <div className="red">1</div>
                <div className="orange">2</div>
                <div className="yellow">3</div>
                <div className="green">4</div>
                <div className="blue">5</div>
                <div className="navy">6</div>
                <div className="purple">7</div>
                <hr></hr>
            </>
        </div>
    );
}

export default App;
