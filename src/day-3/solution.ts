import { inputDay3 as input } from "./input";

// instructions like mul(X,Y), where X and Y are each 1-3 digit numbers.:
const validInstructionRegex = /mul\((\d{1,3}),\s*(\d{1,3})\)/g;

// p.1.
const getValidInstructions = (inputValue: string) => {
    const response = [...inputValue.matchAll(validInstructionRegex)]
    return response?.reduce((sum, matchedInstruction) => {
        const [_, firstNum, secondNum] = matchedInstruction
        return sum += parseInt(firstNum) * parseInt(secondNum)
    }, 0)
}

// p.2.
const getValidInstructionsWithUpdatedRules = (inputValue: string) => {
     const cleanedRecords = inputValue.split(`don't()`).map((el, index) => {
        if (index === 0) return el
        const cleanedResult = el.split('do()').filter((_, idx) => idx !== 0)
        return cleanedResult
    }).join('')
    return getValidInstructions(cleanedRecords)
}

getValidInstructionsWithUpdatedRules(input)

// const exampleFromTask = `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`
// getValidInstructionsWithUpdatedRules(exampleFromTask)
 
// 173 558 055 is too high
// 83 524 390 too hgh too....
//  20 719 720 is too low
//  71 668 682 correct result

// const disabledInstructionsRegex = /don't\(\).*?do\(\)/gs;
// from task example:
// const exampleFromTaskP1 = `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`
// console.log(getValidInstructions(exampleFromTaskP1)) //161
// console.log(getValidInstructions(input)) // 175700056

