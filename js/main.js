let n1 = parseInt(prompt("Wprowadź pierwszą liczbę"));
let n2 = parseInt(prompt("Wprowadź drugą liczbę"));
function porownanie(par1,par2) {
    // let n1 = parseInt(prompt("Wprowadź pierwszą liczbę"));
    // let n2 = parseInt(prompt("Wprowadź drugą liczbę"));
    // let n3 = n1 + n2;


    if (par1 == 20 || par2 == 20 || par1+par2 >= 20) {
        return true;
    }
else{
    return false;
}
}
console.log(porownanie(n1,n2))