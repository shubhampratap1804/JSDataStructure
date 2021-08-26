var birthday = new Map();
birthday.set(1,0);
birthday.set(2,0);
birthday.set(3,0);
birthday.set(4,0);
birthday.set(5,0);
birthday.set(6,0);
birthday.set(7,0);
birthday.set(8,0);
birthday.set(9,0);
birthday.set(10,0);
birthday.set(11,0);
birthday.set(12,0);
birthday.set(13,0);
birthday.set(14,0);
birthday.set(15,0);
birthday.set(16,0);
birthday.set(17,0);
birthday.set(18,0);
birthday.set(19,0);
birthday.set(20,0);
birthday.set(21,0);
birthday.set(22,0);
birthday.set(23,0);
birthday.set(24,0);

let count =0;
while(count<51){
    var birthdayKey = (Math.floor(Math.random()*100) % 24 + 1);
    var birthdayValue = birthday.get(birthdayKey);
    birthdayValue++;
    birthday.set(birthdayKey ,birthdayValue);
    count++;
}
console.log(birthday);
