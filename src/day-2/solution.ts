import { inputString } from "./input";

/** 
Ruless:
The levels are either all increasing or all decreasing.
Any two adjacent levels differ by at least one and at most three.
Example:
7 6 4 2 1: Safe because the levels are all decreasing by 1 or 2.
1 2 7 8 9: Unsafe because 2 7 is an increase of 5.
9 7 6 2 1: Unsafe because 6 2 is a decrease of 4.
1 3 2 4 5: Unsafe because 1 3 is increasing but 3 2 is decreasing.
8 6 4 4 1: Unsafe because 4 4 is neither an increase or a decrease.
1 3 6 7 9: Safe because the levels are all increasing by 1, 2, or 3.
*/

const isSafeWithDampener = (report) => {
    if (isReportSafe(report)) return true;
    return report.some((_, i) => isReportSafe(report.filter((_, j) => j !== i)));
};

const isReportSafe = (report: number[]) => {
    const isIncreasing = report.every(
        (val, i) => i === 0 || val >= report[i - 1]
    );

    const isDecreasing = report.every(
        (val, i) => i === 0 || val <= report[i - 1]
    );
    const isStepValid = (val, report) => Math.abs(val - report) >= 1 && Math.abs(val - report) <= 3
    const areAllStepsValid = report.every((val, i) => i === 0 || isStepValid(val, report[i - 1]))

    return (isIncreasing || isDecreasing) && areAllStepsValid;
};

const getSafeReportsAmount = (reports) => {
    const safeReportsCount = reports.reduce(
        (safeCount, report) => safeCount + (isSafeWithDampener(report) ? 1 : 0),
        0
    );
    console.log("safe Reports count:", safeReportsCount);
    console.log("Unsafe reports count:", reports.length - safeReportsCount);
};

// 324 correct from the website
getSafeReportsAmount(inputString);
