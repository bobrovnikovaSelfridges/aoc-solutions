import { input } from "./input"

const [leftList, rightList] = input
// p.1.
const getTotalDiffsSum = (leftList: number[], rightList: number[]) => {
    const sortedLeftList = leftList.sort((a, b) => a - b)
    return rightList.sort((a, b) => a - b).reduce((sumAcc, rightListValue, id) => {
        const diff = Math.abs(rightListValue - sortedLeftList[id])
        return sumAcc += diff
    }, 0)
}

console.log(getTotalDiffsSum(leftList, rightList))
// 2378066

// p.2.
const getOccurrenciesWithSum = (leftList: number[], rightList: number[]) => {
    const occurrencesCount = rightList.reduce((acc, rightListValue) => {
        const isOccurrnece = leftList.includes(rightListValue);
        if (isOccurrnece) {
            const existingValue = acc.get(rightListValue);
            acc.set(rightListValue, existingValue ? existingValue + 1 : 1);
        }
        return acc;
    }, new Map());
    let sum = 0;

    occurrencesCount.forEach((occurrences: number, key: number) => {
        sum += occurrences * key;
    });
    return sum;
};

console.log(getOccurrenciesWithSum(leftList, rightList));
// 18934359
