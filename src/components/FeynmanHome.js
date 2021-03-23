import React from 'react';
import Step1 from './feynman/Step1';
import Step2 from './feynman/Step2';
import Step3 from './feynman/Step3';
import Step4 from './feynman/Step4';
import Step5 from './feynman/Step5';

function FeynmanHome() {
    return (
        <div>
            <h1>
                Feynman Method Home
            </h1>

            <h3>
                What is the Feynman Method?
            </h3>
            <p>
                If you can explain it to a kid, you understood what you are trying to learn.
                </p>
            <div className="section-cards">
                <Step1 />
                <Step2 />
                <Step3 />
                <Step4 />
                <Step5 />

            </div>
        </div>
    )
}

export default FeynmanHome
