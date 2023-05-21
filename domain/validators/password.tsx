

export default function ValidatePassword(password : string) {

    const eightCharacters = /^.{8,}$/;
    const alphanumericAndSymbols = /^[a-zA-Z0-9!@#$%^&*()]*$/;
    const containsSymbol = /[!@#$%^&*()]/;

    return eightCharacters.test(password) 
        && alphanumericAndSymbols.test(password)
        && containsSymbol.test(password);
}
