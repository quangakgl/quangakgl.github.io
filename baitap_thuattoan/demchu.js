/**
 * Created by quang on 15/04/2017.
 */
let str = 'You get all the new posts in Teaching Matters all major additions to the website and a lot of snippets to inspire teachers almost daily However ' +
    'Facebook has its way of prioritising what you see and what you don’t Posts from companies however noncommercial like WebEnglish are sometimes only shown' +
    ' under Pages or not at all To be sure to receive all WebEnglish notifications you can click on See first under Following as shown in the picture Only in' +
    ' this way you can guarantee not to miss a thing'              // Cho 1 chuỗi
let arr1 = str.toLowerCase()                                       // chuyển viết hoa sang viết thường
let arr = arr1.split(' ')                                          // chuyển chuỗi thành mảng
let array = arr.sort()                                             // sắp xếp theo thứ tự a,b,c

 function demchu() {

     for (let i = 0;i<array.length;i++){

         if (array[i]){
             count = 1
             for (let j = i+1;j<array.length;j++){
                if (array[i] === array[j]){
                    count ++;
                    array[j] = 0
                }
             }
             console.log(array[i] + ' xuat hien ' + count + ' lan')
         }
     }
 }

demchu(array)