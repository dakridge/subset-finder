// dependencies
import React, { useState } from 'react';

// components
import Button from '@Components/Button';
// import Input from '@Components/Input/Text';

// utils
import findSubsets from 'Utils/ArrayOptimizer';

// styles
import css from './ArrayOptimizer.styl';

const SubsetFinder = () => {
    const [target, setTarget] = useState('40');
    const [array, setArray] = useState('1,2,3');
    const [calculatedValue, setCalculatedValue] = useState(null);

    const calculate = () => {
        const subsets = findSubsets(array.split(','), target);
        setCalculatedValue(subsets);
    };

    return (
        <div className={css.main}>
            <div className={css.container}>
                <div>Subset Finder</div>

                <div className={css.inputContainer}>
                    <div className={css.label}>Array</div>
                    <textarea value={array} onChange={e => setArray(e.target.value)} />
                </div>

                <div className={css.inputContainer}>
                    <div className={css.label}>Target</div>
                    <input value={target} onChange={e => setTarget(e.target.value)} />
                </div>

                <div className={css.inputContainer}>
                    <Button onClick={calculate}>Calculate</Button>
                </div>

                {calculatedValue ? (
                    <div className={css.inputContainer}>
                        <div className={css.subsets}>
                            {calculatedValue.map((subset, ii) => <div key={ii} className={css.subset}>{subset.join(', ')}</div>)}
                        </div>
                    </div>
                ) : null}
            </div>
        </div>
    );
};

export default SubsetFinder;
