var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const Utils = require('./utils');
test('Clone object function', () => __awaiter(this, void 0, void 0, function* () {
    let object1 = {
        a: 1,
        b: 2,
        c: ['D', 'E'],
        d: [{ a: 1, b: 2 }, { c: 3, d: 4 }],
        e: new Date()
    };
    expect(Utils.clone(object1)).toEqual(object1);
}));
test('Email validation function', () => __awaiter(this, void 0, void 0, function* () {
    expect(Utils.validateEmail('test@test.com')).toBeTruthy();
    expect(Utils.validateEmail('test@test.com.br')).toBeTruthy();
    expect(Utils.validateEmail('test@test.au')).toBeTruthy();
    expect(Utils.validateEmail('test+1@test.au')).toBeTruthy();
    expect(Utils.validateEmail('test@test')).toBeFalsy();
    expect(Utils.validateEmail('blah')).toBeFalsy();
    expect(Utils.validateEmail('@@@')).toBeFalsy();
    expect(Utils.validateEmail('test@test@com')).toBeFalsy();
    expect(Utils.validateEmail('@test.com')).toBeFalsy();
    expect(Utils.validateEmail('@test')).toBeFalsy();
    expect(Utils.validateEmail(' @test.com')).toBeFalsy();
    expect(Utils.validateEmail()).toBeFalsy();
}));
test('Password validation function', () => __awaiter(this, void 0, void 0, function* () {
    expect(Utils.validatePassword('weak')).toBeFalsy();
    expect(Utils.validatePassword('weak2')).toBeFalsy();
    expect(Utils.validatePassword('weak23')).toBeFalsy();
    expect(Utils.validatePassword('weak23WW')).toBeTruthy();
    expect(Utils.validatePassword('weak23ww')).toBeFalsy();
    expect(Utils.validatePassword('Strong123')).toBeTruthy();
    // Too long
    expect(Utils.validatePassword('AHUhauhauhauAHuaHA636363')).toBeFalsy();
    // Missing Capital Letter
    expect(Utils.validatePassword('$trong123')).toBeFalsy();
    // Missing Capital Letter
    expect(Utils.validatePassword('$Trong123')).toBeTruthy();
    expect(Utils.validatePassword()).toBeFalsy();
}));
//# sourceMappingURL=utils.test.js.map