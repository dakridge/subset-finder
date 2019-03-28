const findSubset = (items, target) => {
    if (items.includes(target)) {
        return [target];
    }

    // remove items greater than the target
    const filteredItems = items.filter(item => item < target);

    for (let ii = 0; ii < filteredItems.length; ii += 1) {
        const item = filteredItems[ii];
        const subset = findSubset(filteredItems.slice(ii + 1), target - item);

        if (subset.length > 0) {
            return [item].concat(subset);
        }
    }

    return [];
};

const findSubsets = (items, target) => {
    // convert to numbers
    target = parseInt(target, 10);
    items = items.map(d => parseInt(d, 10));

    // reverse sort
    items.sort((a, b) => b - a);

    let done = false;
    const subsets = [];
    let counter = 0;

    console.log( 'finding subsets for: ', items, ' with target: ', target );

    while (!done) {
        const subset = findSubset(items, target);

        if (subset.length > 0) {
            subsets.push(subset);

            subset.forEach((item) => {
                items.splice(items.indexOf(item), 1);
            });
        }
        else {
            done = true;
        }

        counter += 1;

        if (counter >= 1000) {
            done = true;
        }
    }

    console.log( 'Found Subsets:', subsets );
    return subsets;
};

export default findSubsets;
