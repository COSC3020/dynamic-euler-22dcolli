//Ishita Patel recomended me do this problem and helped me complete it during a study session, I've marked the parts I did not originally get
function e(n) {
    let eul = 1;
    let factorial = 1;
    //she pointed out they increment the same, so we don't need multiple loops
    for(let i = 1; i <= n; i++){
        fact = (fact * i);
        eul = (eul + (1.0 / factorial))
    }
    return eul;
}
