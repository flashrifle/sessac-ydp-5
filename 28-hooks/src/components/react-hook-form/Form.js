import React from 'react';
import { useForm } from 'react-hook-form';

export default function Form() {
    const {
        register, // input 할당, value 변경 감지
        handleSubmit, // form submit 시 호출
        formState: { errors }, // 폼 상태 객체
        watch, // 특정 폼 필드의 값을 실시간으로 사용
    } = useForm();

    // handleSubmit(funcA, funcB): 두개의 함수 받음
    // a : 필수
    // b : 선택

    const onValid = (data) => {
        console.log('onvalid', data);
    };

    const onInValid = (err) => {
        console.log('onInvalid', err);
    };

    console.log('error :', errors);
    console.log('watch', watch('username'));

    return (
        <div>
            <h1>react-hook-form 라이브러리 데모</h1>
            <form onSubmit={handleSubmit(onValid)}>
                <input
                    type="text"
                    placeholder="username"
                    {...register('username', {
                        required: '이름은 필수입니다.',
                    })}
                />
                {errors.username?.message}
                <br />
                <input
                    type="text"
                    placeholder="email"
                    {...register('email', {
                        required: '이메일을 입력하세요',
                        validate: {
                            useGmail: (v) =>
                                v.includes('gmail.com') ||
                                'gmail로만 가능합니다.',
                        },
                    })}
                />
                {errors.email?.message}
                <br />
                <input
                    type="text"
                    placeholder="age"
                    {...register('age', {
                        validate: (v) => v >= 0 || '숫자만 입력하세요',
                    })}
                />
                {errors.age?.message}
                <br />
                <button type="submit">Submit</button>
            </form>
        </div>
    );
}
