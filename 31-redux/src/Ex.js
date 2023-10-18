import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';

function Ex() {
    const [money, setMoney] = useState(0);
    const bank = useSelector((state) => state.bank.money);

    const dispatch = useDispatch();

    return (
        <div className="App">
            <h1>코딩온 은행</h1>
            <h2>잔액: {bank}</h2>
            <input
                type="number"
                value={money}
                onChange={(e) => setMoney(e.target.value)}
            />
            <button
                onClick={() =>
                    dispatch({ type: 'bank/DEPOSIT', payload: money })
                }
            >
                입금
            </button>
            <button
                onClick={() =>
                    dispatch({ type: 'bank/WITHDRAW', payload: money })
                }
            >
                출금
            </button>
        </div>
    );
}

export default Ex;
