/**
 * @jest-environment jsdom
 */

const buttons = require("./script");

describe("The test file", () => {
	it("exists", () => {
		expect(2 + 2).toBe(4);
	});
});

describe("Buttons", () => {
	console.log(buttons);
	it("exists", () => {
		expect(buttons.exists()).toBeTruthy();
	});
});
