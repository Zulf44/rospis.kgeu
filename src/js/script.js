const App = {
   data() {
      return {
         counter: 0,
         nambers: [],
         lessons: [
            {
               lessonStart: new Date(2022, 0, 13, 11, 20),
               lessonName: "Организационное собрание",
               classroom: "А",
               teacher: "Дирекция ИЦТЭ",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 14, 13, 20),
               lessonName: "Теория систем и системный анализ",
               classroom: "Д-418",
               teacher: "доц. Андреев В.В.",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 14, 15, 00),
               lessonName: "Пакеты прикладных программ",
               classroom: "В-619",
               teacher: "ст.пр. Эшелиоглу Р.И.",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 14, 8, 00),
               lessonName: "Объектно-ориентированное программирование на языке C#",
               classroom: "В-619",
               teacher: "доц. Шустова К.П.",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 20, 9, 40),
               lessonName: "Настройка и администрирование компьютерных сетей",
               classroom: "В-619",
               teacher: "доц. Ситников С.Ю.",
               lessonType: "Лекция"
            },
            {
               lessonStart: new Date(2022, 0, 14, 11, 20),
               lessonName: "Теория систем и системный анализ",
               classroom: "Д-420",
               teacher: "доц. Андреев В.В.",
               lessonType: "Практика"
            },
            {
               lessonStart: new Date(2022, 0, 21, 8, 00),
               lessonName: "Теория систем и системный анализ",
               classroom: "Е-100(8)",
               teacher: "доц. Андреев В.В.",
               lessonType: "Лаб."
            },
         ],
         dayOfWeek: "",
         dateToday: "",
         toDay: new Date,
         lessonToday: [],



      }
   },
   methods: {
      getdayOfWeek() {

         switch (this.toDay.getDay()) {
            case 0:
               this.dayOfWeek = "Воскресенье";
               break;
            case 1:
               this.dayOfWeek = "Понедельник";
               break;
            case 2:
               this.dayOfWeek = "Вторник";
               break;
            case 3:
               this.dayOfWeek = "Среда";
               break;
            case 4:
               this.dayOfWeek = "Четверг";
               break;
            case 5:
               this.dayOfWeek = "Пятница";
               break;
            case 6:
               this.dayOfWeek = "Суббота";
               break;


         }
         let DD = this.toDay.getDate(),
            MM = this.toDay.getMonth(),
            YYYY = this.toDay.getFullYear();
         this.dateToday = `${DD}.${MM + 1}.${YYYY}`;

      },
      getLesonToday(toDay) {


         this.lessonToday = this.lessons.filter(function (item, index, array) {
            return array[index].lessonStart.getDate() === toDay.getDate()
         })

      },
      increaseDate() {
         this.toDay.setTime(this.toDay.getTime() + 86400000);
         this.getdayOfWeek();
         this.getLesonToday(this.toDay);
      },
      reduceDate() {
         this.toDay.setTime(this.toDay.getTime() - 86400000);
         this.getdayOfWeek();
         this.getLesonToday(this.toDay);
      }
   },
   mounted() {
      this.getdayOfWeek()
      this.getLesonToday(this.toDay)
   }


}


Vue.createApp(App).mount("#app")

// const day = {
//    date: "19.01.2022",
//    lessons: [
//       {
//          timeStart: "11:20",
//          lessonName: "Организационное собрание",
//          classroom: "А",
//          teacher: "Дирекция ИЦТЭ",
//          lessonType: "l"
//       },
//       {
//          timeStart: "13:20",
//          lessonName: "Теория систем и системный анализ",
//          classroom: "Д-418",
//          teacher: "доц. Андреев В.В.",
//          lessonType: "l"
//       },
//       {
//          timeStart: "15-00",
//          lessonName: "Пакеты прикладных программ",
//          classroom: "В-619",
//          teacher: "ст.пр. Эшелиоглу Р.И.",
//          lessonType: "l"
//       }

//    ]
// }

// let lessons = [
//    {
//       lessonStart: new Date(2022, 0, 13, 11, 20),
//       lessonName: "Организационное собрание",
//       classroom: "А",
//       teacher: "Дирекция ИЦТЭ",
//       lessonType: "Лекция"
//    },
//    {
//       lessonStart: new Date(2022, 0, 13, 13, 20),
//       lessonName: "Теория систем и системный анализ",
//       classroom: "Д-418",
//       teacher: "доц. Андреев В.В.",
//       lessonType: "Лекция"
//    },
//    {
//       lessonStart: new Date(2022, 0, 19, 15, 00),
//       lessonName: "Пакеты прикладных программ",
//       classroom: "В-619",
//       teacher: "ст.пр. Эшелиоглу Р.И.",
//       lessonType: "Лекция"
//    },
//    {
//       lessonStart: new Date(2022, 0, 20, 8, 00),
//       lessonName: "Объектно-ориентированное программирование на языке C#",
//       classroom: "В-619",
//       teacher: "доц. Шустова К.П.",
//       lessonType: "Лекция"
//    },
//    {
//       lessonStart: new Date(2022, 0, 20, 9, 40),
//       lessonName: "Настройка и администрирование компьютерных сетей",
//       classroom: "В-619",
//       teacher: "доц. Ситников С.Ю.",
//       lessonType: "Лекция"
//    },
//    {
//       lessonStart: new Date(2022, 0, 20, 11, 20),
//       lessonName: "Теория систем и системный анализ",
//       classroom: "Д-420",
//       teacher: "доц. Андреев В.В.",
//       lessonType: "Практика"
//    },
//    {
//       lessonStart: new Date(2022, 0, 21, 8, 00),
//       lessonName: "Теория систем и системный анализ",
//       classroom: "Е-100(8)",
//       teacher: "доц. Андреев В.В.",
//       lessonType: "Лаб."
//    },

// ]



// let dateNow = new Date();
// let lessonToday = lessons.filter(function (item, index, arrey) {
//    return dateNow.getDate() === item.lessonStart.getDate()

// });

// console.log(lessonToday)


// let w = "efjewkmgklelwrmgkmew'gkeerkgml ergmelr,glergerrgerrge"

// if (w.length > 15) {
//    w = w.substring(20, -20);
//    console.log(w)
// }

// function Calendar2(id, year, month) {
//    var Dlast = new Date(year, month + 1, 0).getDate(),
//       D = new Date(year, month, Dlast),
//       DNlast = new Date(D.getFullYear(), D.getMonth(), Dlast).getDay(),
//       DNfirst = new Date(D.getFullYear(), D.getMonth(), 1).getDay(),
//       calendar = '<tr>',
//       month = ["Январь", "Февраль", "Март", "Апрель", "Май", "Июнь", "Июль", "Август", "Сентябрь", "Октябрь", "Ноябрь", "Декабрь"];
//    if (DNfirst != 0) {
//       for (var i = 1; i < DNfirst; i++) calendar += '<td>';
//    } else {
//       for (var i = 0; i < 6; i++) calendar += '<td>';
//    }
//    for (var i = 1; i <= Dlast; i++) {
//       if (i == new Date().getDate() && D.getFullYear() == new Date().getFullYear() && D.getMonth() == new Date().getMonth()) {
//          calendar += '<td class="today">' + i;
//       } else {
//          calendar += '<td>' + i;
//       }
//       if (new Date(D.getFullYear(), D.getMonth(), i).getDay() == 0) {
//          calendar += '<tr>';
//       }
//    }
//    for (var i = DNlast; i < 7; i++) calendar += '<td>&nbsp;';
//    document.querySelector('#' + id + ' tbody').innerHTML = calendar;
//    document.querySelector('#' + id + ' thead td:nth-child(2)').innerHTML = month[D.getMonth()] + ' ' + D.getFullYear();
//    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.month = D.getMonth();
//    document.querySelector('#' + id + ' thead td:nth-child(2)').dataset.year = D.getFullYear();
//    if (document.querySelectorAll('#' + id + ' tbody tr').length < 6) {  // чтобы при перелистывании месяцев не "подпрыгивала" вся страница, добавляется ряд пустых клеток. Итог: всегда 6 строк для цифр
//       document.querySelector('#' + id + ' tbody').innerHTML += '<tr><td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;<td>&nbsp;';
//    }
// }
// Calendar2("calendar2", new Date().getFullYear(), new Date().getMonth());
// // переключатель минус месяц
// document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(1)').onclick = function () {
//    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) - 1);
// }
// // переключатель плюс месяц
// document.querySelector('#calendar2 thead tr:nth-child(1) td:nth-child(3)').onclick = function () {
//    Calendar2("calendar2", document.querySelector('#calendar2 thead td:nth-child(2)').dataset.year, parseFloat(document.querySelector('#calendar2 thead td:nth-child(2)').dataset.month) + 1);
// }
let today = new Date;

console.log(today);
today.setTime(today.getTime() + 86400000)

console.log(today);