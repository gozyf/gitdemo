
//"use strict"
/* Задания на урок:

1) Удалить все рекламные блоки со страницы (правая часть сайта)

2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

4) Список фильмов на странице сформировать на основании данных из этого JS файла.
Отсортировать их по алфавиту 

5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Стерва с малекой грудью сосала ",
        "Как я от проститутку в Тайланде",
        "Саша Грей в Джасур-Сутере",
        "Две девочки и один член",
        "Хентай в другом мире..."
    ]
   
};

const adv = document.querySelectorAll('.promo__adv img'),
      poster = document.querySelector('.promo__bg'),
      genre = document.getElementsByClassName('promo__genre'),
      promTitle = document.querySelector('.promo__title'),
      promDesc = document.querySelector('.promo__descr'),
      promoRat = document.querySelectorAll('.promo__ratings'),
      watchFilms = document.querySelector('.promo__interactive-title'),
      addNewF = document.querySelector('.promo__interactive .add .promo__interactive-title'),
      logo = document.querySelector('.header__logo'),
      searchbar = document.getElementsByClassName('adding__input'),
      movieList = document.querySelector('.promo__interactive-list');


 adv.forEach(item => {
    item.remove();
});

promoRat.forEach(item1 => {
    item1.remove();
});
 
searchbar[0].placeholder = 'Освежи воспопинание?!';

genre[0].textContent = 'БДСМ';
genre[0].style.color = "#ffd500";

promTitle.textContent ="Девушка в Черных чулках";
promTitle.style.color = '#ffffff';
promDesc.innerHTML = 'Меня пытали всю ночь!';

watchFilms.textContent = "Мои просмотренные порно-фильмы";
//console.dir(watchFilms);
addNewF.textContent = "ДОБАВИТЬ НОВОЕ ПОРНО";

poster.style.backgroundImage = 'url("img/preview.jpg")';

movieList.innerHTML ="";

movieDB.movies.sort();

//console.log(poster.innerHTML);

movieDB.movies.forEach((film, i) => {
    movieList.innerHTML +=` 
     <li class="promo__interactive-item"> ${i + 1} ${film}
         <div class="delete"></div>
     </li>
     `;
});

const menu = document.querySelectorAll(".promo__menu-item");
console.log(menu);
menu[0].textContent = "Teens";
menu[0].href = 'https://rt.pornhub.com/categories/teen';
menu[1].textContent = "Milf";
menu[1].href = 'https://rt.pornhub.com/categories/milf';
menu[2].textContent = "Fetish";
menu[3].href = 'https://rt.pornhub.com/categories/fetish';
menu[3].textContent = "Blowjob";
menu[3].href = 'https://rt.pornhub.com/categories/blowjob';
menu[4].textContent = "Ebony";
menu[4].href = 'https://rt.pornhub.com/categories/ebony';