import React, { useState } from 'react';

export default function Event_ex() {
    const [name, setName] = useState('');
    const [email, setEmail] = useState('');
    const [profile, setProfile] = useState([
        { id: 1, name: '코디', email: 'codi@gmail.com' },
        { id: 2, name: '윤소희', email: 'codi@gmail.com' },
    ]);

    const addProfile = () => {
        setProfile(
            profile.concat({
                id: profile.length + 1,
                name: name,
                email: email,
            })
        );
        setName('');
        setEmail('');
    };

    const addEnter = (e) => {
        if (e.nativeEvent.isComposing) {
            return;
        }
        if (e.code === 'Enter') addProfile(e.target.value);
    };

    const deleteProfile = (targetId) => {
        console.log(targetId);
        const newProfile = profile.filter((profile) => profile.id !== targetId);
        setProfile(newProfile);
    };

    return (
        <div>
            <input
                type="text"
                placeholder="이름"
                value={name}
                onChange={(e) => setName(e.target.value)}
            ></input>
            <input
                type="text"
                placeholder="이메일"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                onKeyDown={addEnter}
            ></input>
            <button onClick={addProfile}>등록</button>
            <h1>
                {profile.map((value) => {
                    return (
                        <div onDoubleClick={() => deleteProfile(value.id)}>
                            {value.name}:{value.email}
                        </div>
                    );
                })}
            </h1>
        </div>
    );
}
