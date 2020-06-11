import React from 'react';

//Components
import Stage from './Stage';
import Display from './Display';
import StartButton from './StartButton';

const Tetris = () => {
    return (
        <div>
            <Stage />
            <aside>
                <div>
                    <Display tex ="Score"/>
                    <Display tex ="Rows"/>
                    <Display tex ="Level"/>
                </div>
                <StartButton />
            </aside>
        </div>
    )
}

export default Tetris;