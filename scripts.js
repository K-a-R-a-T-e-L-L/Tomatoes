// Получаем шаблон спецификаций
const specsTemplate = document.querySelector("#specifications-template");
const specsContainer = document.querySelector('.product-specs');

// Данные для спецификаций
const productSpecs = [
    ['Страна', 'Россия'],
    ['Поставщик', 'Фермеры: Наталья и Юрий Лейшан'],
    ['Тип упаковки', 'Крафтовый пакет'],
    ['Сертификаты качества', 'В наличии']
];

const nutritionalValues = [
    ['Энергетическая ценность', '18 кКал'],
    ['Белки', '0.9 г'],
    ['Жиры', '0.2 г'],
    ['Углеводы', '3.9 г']
];

const storageConditions = [
    ['Срок хранения', '7 дней'],
    ['Температура хранения', 'от 3 ° до 7 °']
];

// Создаем клоны шаблона
const specsClone = specsTemplate.content.cloneNode(true);
specsClone.querySelector('.product-specs__title').textContent = "ХАРАКТЕРИСТИКИ";

const nutritionClone = specsTemplate.content.cloneNode(true);
nutritionClone.querySelector('.product-specs__title').textContent = "ПИЩЕВАЯ ЦЕННОСТЬ НА 100Г";

const storageClone = specsTemplate.content.cloneNode(true);
storageClone.querySelector('.product-specs__title').textContent = "УСЛОВИЯ ХРАНЕНИЯ";

// Функция для добавления элементов спецификации
function addSpecItems(clone, data) {
    data.forEach(item => {
        const itemElement = document.createElement('div');
        itemElement.className = 'product-specs__item';

        const property = document.createElement('span');
        property.className = 'product-specs__property';
        property.textContent = item[0];

        const value = document.createElement('span');
        value.className = 'product-specs__value';
        value.textContent = item[1];

        itemElement.appendChild(property);
        itemElement.appendChild(value);
        clone.querySelector('.product-specs__group').appendChild(itemElement);
    });
}

// Добавляем спецификации на страницу
addSpecItems(specsClone, productSpecs);
specsContainer.appendChild(specsClone);

addSpecItems(nutritionClone, nutritionalValues);
specsContainer.appendChild(nutritionClone);

addSpecItems(storageClone, storageConditions);
specsContainer.appendChild(storageClone);

// Работа с карточками товаров
const productCardTemplate = document.getElementById('template-product-card');
const productsContainer = document.querySelector('.related-products');

// Данные для карточек товаров
const productsData = [
    {
        image: './images/milk.png',
        title: 'Молоко 3,2 %',
        manufacturer: 'От Вадима Рошки',
        price: '95 ₽',
        unit: ' / 0,93 л'
    },
    {
        image: './images/bread.png',
        title: 'Хлеб пшеничный',
        manufacturer: 'От Дарьи и Марии',
        price: '95 ₽',
        unit: ' / 0,930 г'
    },
    {
        image: './images/egg.png',
        title: 'Яйца куриные',
        manufacturer: 'От Евгения Рошаль',
        price: '120 ₽',
        unit: ' / 10 шт'
    },
    {
        image: './images/butter.png',
        title: 'Масло сливочное 82 %',
        manufacturer: 'От Вадима Рошки',
        price: '290 ₽',
        unit: ' / 250 г'
    }
];

// Создаем и добавляем карточки товаров
productsData.forEach(product => {
    const cardClone = productCardTemplate.content.cloneNode(true);
    
    cardClone.querySelector('.product-card__image').src = product.image;
    cardClone.querySelector('.product-card__title').textContent = product.title;
    cardClone.querySelector('.product-card__manufacturer').textContent = product.manufacturer;
    cardClone.querySelector('.product-card__price').textContent = product.price;
    
    const unitSpan = document.createElement('span');
    unitSpan.className = 'product-card__price-unit';
    unitSpan.textContent = product.unit;
    cardClone.querySelector('.product-card__price').appendChild(unitSpan);
    
    productsContainer.appendChild(cardClone);
});

// Элементы управления переключением страниц
const descriptionLink = document.getElementById('nav-description');
const reviewsLink = document.getElementById('nav-reviews');
const fromLink = document.getElementById('nav-from');

const descriptionPage = document.querySelector('.main__page--description');
const reviewsPage = document.querySelector('.main__page--reviews');
const fromPage = document.querySelector('.main__page--from');

// Функция для переключения страниц
function switchPage(activePage, activeLink) {
    const pages = [descriptionPage, reviewsPage, fromPage];
    const links = [descriptionLink, reviewsLink, fromLink];

    pages.forEach(page => page.style.display = 'none');
    links.forEach(link => link.className = 'nav__item');
    
    activePage.style.display = 'block';
    activeLink.className = 'nav__item nav__item--active';
}

// Навешиваем обработчики событий
descriptionLink.addEventListener('click', () => switchPage(descriptionPage, descriptionLink));
reviewsLink.addEventListener('click', () => switchPage(reviewsPage, reviewsLink));
fromLink.addEventListener('click', () => switchPage(fromPage, fromLink));

// Инициализируем начальное состояние
switchPage(descriptionPage, descriptionLink);