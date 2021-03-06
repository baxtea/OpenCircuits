import "jest";

import {ClampedValue} from "../../../../site/public/ts/utils/ClampedValue";

describe("ClampedValue", () => {
    describe("Constructor", () => {
        it("One parameter", () => {
            var v1 = new ClampedValue(1);
            expect(v1.getValue()).toBe(1);
            expect(v1.getMinValue()).toBe(1);
            expect(v1.getMaxValue()).toBe(1);

            var v2 = new ClampedValue(5);
            expect(v2.getValue()).toBe(5);
            expect(v2.getMinValue()).toBe(5);
            expect(v2.getMaxValue()).toBe(5);

            var v3 = new ClampedValue(-123);
            expect(v3.getValue()).toBe(-123);
            expect(v3.getMinValue()).toBe(-123);
            expect(v3.getMaxValue()).toBe(-123);
        });
        it("All parameters", () => {
            var v1 = new ClampedValue(1, 1, 1);
            expect(v1.getValue()).toBe(1);
            expect(v1.getMinValue()).toBe(1);
            expect(v1.getMaxValue()).toBe(1);

            var v2 = new ClampedValue(5, 1, 6);
            expect(v2.getValue()).toBe(5);
            expect(v2.getMinValue()).toBe(1);
            expect(v2.getMaxValue()).toBe(6);

            var v3 = new ClampedValue(-123, -200, 5);
            expect(v3.getValue()).toBe(-123);
            expect(v3.getMinValue()).toBe(-200);
            expect(v3.getMaxValue()).toBe(5);
        });
    });
    describe("Modifiers", () => {
        it("Set Value", () => {
            var v1 = new ClampedValue(1, 1, 1);
            v1.setValue(7);
            expect(v1.getValue()).toBe(1);
            v1.setValue(-15);
            expect(v1.getValue()).toBe(1);
            v1.setValue(0);
            expect(v1.getValue()).toBe(1);
            v1.setValue(2);
            expect(v1.getValue()).toBe(1);

            var v2 = new ClampedValue(5, 1, 6);
            v2.setValue(17);
            expect(v2.getValue()).toBe(6);
            v2.setValue(-15);
            expect(v2.getValue()).toBe(1);
            v2.setValue(0);
            expect(v2.getValue()).toBe(1);
            v2.setValue(7);
            expect(v2.getValue()).toBe(6);
            for (var i = 1; i <= 6; i++) {
                v2.setValue(i);
                expect(v2.getValue()).toBe(i);
            }

            var v3 = new ClampedValue(-123, -200, 5);
            v3.setValue(17);
            expect(v3.getValue()).toBe(5);
            v3.setValue(-1500);
            expect(v3.getValue()).toBe(-200);
            v3.setValue(-201);
            expect(v3.getValue()).toBe(-200);
            v3.setValue(6);
            expect(v3.getValue()).toBe(5);
            for (var i = -123; i <= 5; i++) {
                v3.setValue(i);
                expect(v3.getValue()).toBe(i);
            }
        });
    });
});
