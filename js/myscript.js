var a = 100;
function mrun()  {
 // document.body.innerHTML = '<h1> Run JavaScript</h1>'
 //document.write('<h1> writeln:  Run JavaScript</h1> ');
 var b = 200;
 console.log ("Не вдалося відкрити вказане посилання");
 var d = new Date();
 document.write('момент завантаження сторінки:'
    + d.getHours() + ':'
    + d.getMinutes() + ':'
    + d.getSeconds()
);
alert(a+b);
/*
 alert(" test Дозволяє отримати доступ до елементу за допомогою поєднання клавіш  \
    із заданою в атрибуті латинською літерою або цифрою (0-9). Браузери при цьому \
    використовують різні комбінації клавіш. \
Internet Explorer, Chrome , Safari : Alt + S \
Opera: Shift + Esc, S \
Firefox: Shift + Alt + S \
При використанні комбінації клавіш елемент отримує фокус,\
 але конкретна дія залежить від застосовуваного тега. ");
 */
}
function testfor()
{
    var ob={top:1, left:15, right:74};
for(a in ob){ x=ob[a];
alert('ob.'+a+' = '+x);
}

}

function look_p () {
var ob = document.getElementsByTagName ("p"); 

for(a in ob){ x=ob[a];
    alert('ob.'+a+' = '+x.innerHTML);
    }
}

function diffArr(){

    var liveCol = document.getElementsByTagName('p');
    var col = document.querySelectorAll('p');
   alert(liveCol.length);
   alert(col.length);
   
   document.body.innerHTML = "";

}