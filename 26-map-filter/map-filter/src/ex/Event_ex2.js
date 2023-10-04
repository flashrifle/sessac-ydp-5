import React, { useState } from 'react';

export default function Event_ex2() {
    const [name, setName] = useState('');
    const [title, setTitle] = useState('');

    return (
        <div>
            작성자 : <input type="text" placeholder="작성자"></input>
            제목 : <input type="text"></input>
            <button>작성</button>
            <br></br>
            <select>
                <option>작성자</option>
            </select>
            <input type="text" placeholder="검색어"></input>
            <button>검색</button>
            <br />
            <th>
                <td>번호</td>
                <td>제목</td>
                <td>작성자</td>
            </th>
        </div>
    );
}
