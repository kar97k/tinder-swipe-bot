function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms));
}

var enable_swiping = true;
var swiping_speed = 300;
var like_cnt = 0;
var dis_cnt = 0;
var no_discription_cnt = 0;

while (enable_swiping == true) {

await sleep(swiping_speed);

/*
Посчитать количество фотографий
get div which contains buttons to switch profile pictures.
there are nubmer of such divs, the first one contains info about pictures of NEXT profile
The second one contains info about CURRENT one.
Thats why I get [1] element of array
*/

let current_profile = document.getElementsByClassName('CenterAlign D(f) Fxd(r) W(100%) Px(8px) Pos(a) TranslateZ(0)')[0];
//get number of profile pictures by counting buttons in div
var photo_quantity = current_profile.getElementsByTagName("button").length;
await sleep(swiping_speed);

//Проверить, что есть описание, посчитав его длинну.
var description_length = 0;

//click button "profile info"
let info_button = document.getElementsByClassName('P(0) Trsdu($normal) Sq(28px) Bdrs(50%) Cur(p) Ta(c) Scale(1.2):h Mb(12px)--ml Mb(8px) focus-button-style')[1];
info_button.click();

//need to wait a second to load info
await sleep(swiping_speed);

let curr_prof_info = document.getElementsByClassName('P(16px) Us(t) C($c-secondary) BreakWord Whs(pl) Fz($ms)');

try {
    description_length = curr_prof_info[0].innerText.length;
} catch (err) {
    description_length = 0;
    no_discription_cnt++;
    console.log("Нет описания")
}

await sleep(swiping_speed);

//init like and dislike buttons
let like_button = document.getElementsByClassName('button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgc(#fff)')[1];

let dislike_button = document.getElementsByClassName('button Lts($ls-s) Z(0) CenterAlign Mx(a) Cur(p) Tt(u) Bdrs(50%) P(0) Fw($semibold) focus-button-style Bxsh($bxsh-btn) Expand Trstf(e) Trsdu($normal) Wc($transform) Pe(a) Scale(1.1):h Scale(.9):a Bgc(#fff)')[0];

if ( photo_quantity > 1 && description_length > 100) {
    console.log("Like");
    console.log(curr_prof_info[0].innerText);
    like_cnt++;
    like_button.click();
} else {
    console.log("Nope");
    dis_cnt++;
    dislike_button.click();
}
}
