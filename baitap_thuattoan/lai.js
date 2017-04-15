/**
 * Created by quang on 14/04/2017.
 */
let lai = function (tien,laixuat,nam) {
    return tien + (tien * laixuat/100)*12*nam;
}
console.log("So tien phai tra la:"+ lai(1000,0.05,3))
