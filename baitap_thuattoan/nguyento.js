/**
 * Created by quang on 14/04/2017.
 */
function kiemtra(n) {
    if(n<2) {return 0;}
    if(n===2) {return 1;}
    if (n % 2 === 0) {return 0;}
    for (let i = 3; i<n-1;i+=2) {
        if (n % i === 0) return 0
    }
    return 1;
}

function chay(k) {
    let arr = ''
    for (i=1;i<=k;i++){
        if(kiemtra(i)){
            arr += i + '  '
        }
    }
    console.log(arr)
}
chay(500)