import React, { useState, useEffect } from 'react';

export default function PostItem({ state }) {
    console.log(state);
    return (
        <div>
            {state.length < 1 ? (
                <h1>Loading...</h1>
            ) : (
                <div>
                    {state.map((item) => {
                        return (
                            <div>
                                {item.id}
                                <br /> {item.title}
                                <br /> {item.body}
                            </div>
                        );
                    })}
                </div>
            )}
        </div>
    );
}
