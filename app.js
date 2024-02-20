function buy(){
    const buytikict = document.getElementById('busticikt');
    buytikict.classList.add('hidden');
    const showticikt = document.getElementById('busticiktsit');
    showticikt.classList.remove('hidden');
}
function buytikit(){
    const buytikict = document.getElementById('busticiktsit');
    buytikict.classList.add('hidden');
}
function cntiniubuytikit(){
    const continuebuytikict = document.getElementById('busticikt');
    continuebuytikict.classList.remove('hidden');
}






const allsit = document.getElementsByClassName('btn');
let addcount = 0;
 for (const site of allsit){
   site.addEventListener("click",function (e){
        addcount = addcount+1;


        
        document.getElementById("culect-sit-c").innerText = 'C2';
        document.getElementById('culect-sit-e').innerText = 'Economoy';
        document.getElementById('culect-sit-5').innerText = '550';
        document.getElementById('total-site').innerText = addcount;



    } );
 }
// const totalsit = document.getElementsByClassName('btn ');
// let subcount = 40;
//  for (const subsite of totalsit){
//     subsite.addEventListener("click",function (e){
//     subcount = subcount-1;
//         document.getElementById('sub-site').innerText = subcount;
//     } );
//  }
    