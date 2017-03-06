const rot13 = str => {
    const alphabet        = "abcdefghijklmnopqrstuvwxyz";
    const ShiftedAlphabet = "nopqrstuvwxyzabcdefghijklm";
    let tab = [];
    str.toLowerCase().split("").forEach(el => {
        tab.push(ShiftedAlphabet[alphabet.indexOf(el)]);
    });
    console.log(tab.join(""));
};

let args = process.argv.slice(2);
args.map(rot13);
