import {it,describe} from "node:test"
import assert from "node:assert";
import { sum } from "./index.js";

//test function from index.js
describe("Sum Function", () => {
    //kedua argumen bernilai benar yaitu number
    it("should add correctly", () => {
        const operandA = 1;
        const operandB = 1;

        const result = sum(operandA, operandB);
        const expectedResult = 2;
        assert.equal(result, expectedResult)
    })
})