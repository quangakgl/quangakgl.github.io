/**
 * Created by quang on 14/04/2017.
 */
function reverse (s) {
    let o = '';
    for (let i = s.length - 1; i >= 0; i--)
        o += s[i];
    return o;
}
console.log(reverse('nguyenxuanquang'))


