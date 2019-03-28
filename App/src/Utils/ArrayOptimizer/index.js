const findSubset = (items, target) => {
    if (items.includes(target)) {
        return [target];
    }

    // remove items greater than the target
    const filteredItems = items.filter(item => item < target);

    // console.log(filteredItems);

    for (let ii = 0; ii < filteredItems.length; ii += 1) {
        const item = filteredItems[ii];
        const subset = findSubset(filteredItems.slice(ii + 1), target - item);

        if (subset) {
            return [item].concat(subset);
        }
    }

    return [];
};

const findSubsets = (items, target) => {
    // reverse sort
    items.sort().reverse();

    let done = false;
    const subsets = [];
    let counter = 0;

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

    return subsets;
};

export default findSubsets;
