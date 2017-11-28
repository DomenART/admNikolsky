{extends 'file:templates/master.tpl'}
{block 'content'}
<main class="homepage-main">
    <div class="home-slider">
        <div class="home-slider__content" uk-slideshow="animation: push">
            <div class="uk-position-relative" uk-visible-toggle uk-light>
                <ul class="uk-slideshow-items home-slider__images">
                    <li>
                        <img src="../img/home-slide-1.jpg" alt="" uk-cover>
                    </li>
                    <li>
                        <img src="../img/home-slide-2.jpg" alt="" uk-cover>
                    </li>
                    <li>
                        <img src="../img/home-slide-3.jpg" alt="" uk-cover>
                    </li>
                </ul>
            </div>
            <ul class="home-slider__dotnav uk-dotnav uk-flex-center uk-margin">
                <li uk-slideshow-item="0"><a href="#">Item 1</a></li>
                <li uk-slideshow-item="1"><a href="#">Item 2</a></li>
                <li uk-slideshow-item="2"><a href="#">Item 3</a></li>
            </ul>
        </div>
    </div>
    <div class="homepage-sitetitle">
        <div class="homepage-sitetitle__logo uk-flex uk-flex-center">
            <img src="../img/logo.png" alt="">
        </div>
        <div class="homepage-sitetitle__text">
            <span>Никольское сельское поселение</span><br>
            Новоусманского района Воронежской области
        </div>
    </div>
    <div class="homepage-content">
        <div class="uk-container">
            <nav class="content-menu uk-grid uk-grid-small">
                <div class="uk-width-3-4@m uk-width-1-1@l uk-width-3-4@xl">
                    <div class="uk-child-width-1-2 uk-child-width-1-4@s uk-child-width-1-6@l uk-grid-small" uk-grid uk-height-match="target: a">
                        <div>
                            <a href="#"><span>НОВОСТИ</span></a>
                        </div>
                        <div>
                            <a href="#"><span>ЖКХ</span></a>
                        </div>
                        <div>
                            <a href="#">Муниципальные <span>УСЛУГИ</span></a>
                        </div>
                        <div>
                            <a href="#">Муниципальный <span>КОНТРОЛЬ</span></a>
                        </div>
                        <div>
                            <a href="#">Муниципальные <span>ЗАКУПКИ</span></a>
                        </div>
                        <div>
                            <a href="#">Муниципальная <span>СЛУЖБА</span></a>
                        </div>
                    </div>
                </div>
            </nav>
            <div class="homepage-first-section">
                <div uk-grid class="uk-grid-small">
                    <div class="uk-width-1-2@l">
                        <section class="homepage-news">
                            <header class="homepage-news__header uk-flex uk-flex-middle uk-flex-between">
                                <div class="homepage-news__title">последние новости</div>
                                <div>
                                <a href="#" class="button-more button-more--light">читать все<span uk-icon="icon: arrow-right"></span></a>
                            </div>
                            </header>
                            <article class="homepage-news-item">
                                <div class="uk-grid uk-grid-large">
                                    <div class="uk-width-1-5@s uk-width-1-1@m uk-width-1-5@l">
                                        <div class="homepage-news-item__date uk-flex">
                                            <span>30</span>
                                            <div>
                                                октябрь<br>
                                                2017
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-4-5@s uk-width-1-1@m uk-width-4-5@l">
                                        <a href="#" class="homepage-news-item__title">Название - заголовок  последней новости, краткий анонс, может быть в две - три - четыре - пять и более строк, но слишком длинный не желательно...</a>
                                    </div>
                                </div>
                            </article>
                            <article class="homepage-news-item">
                                <div class="uk-grid uk-grid-large">
                                    <div class="uk-width-1-5@s uk-width-1-1@m uk-width-1-5@l">
                                        <div class="homepage-news-item__date uk-flex">
                                            <span>28</span>
                                            <div>
                                                октябрь<br>
                                                2017
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-4-5@s uk-width-1-1@m uk-width-4-5@l">
                                        <a href="#" class="homepage-news-item__title">Название - заголовок  последней новости, краткий анонс, может быть в две - три - четыре - пять и более строк, но слишком длинный не желательно...</a>
                                    </div>
                                </div>
                            </article>
                            <article class="homepage-news-item">
                                <div class="uk-grid uk-grid-large">
                                    <div class="uk-width-1-5@s uk-width-1-1@m uk-width-1-5@l">
                                        <div class="homepage-news-item__date uk-flex">
                                            <span>15</span>
                                            <div>
                                                октябрь<br>
                                                2017
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-4-5@s uk-width-1-1@m uk-width-4-5@l">
                                        <a href="#" class="homepage-news-item__title">Название - заголовок  последней новости, краткий анонс, может быть в две - три - четыре - пять и более строк, но слишком длинный не желательно...</a>
                                    </div>
                                </div>
                            </article>
                            <article class="homepage-news-item">
                                <div class="uk-grid uk-grid-large">
                                    <div class="uk-width-1-5@s uk-width-1-1@m uk-width-1-5@l">
                                        <div class="homepage-news-item__date uk-flex">
                                            <span>19</span>
                                            <div>
                                                октябрь<br>
                                                2017
                                            </div>
                                        </div>
                                    </div>
                                    <div class="uk-width-4-5@s uk-width-1-1@m uk-width-4-5@l">
                                        <a href="#" class="homepage-news-item__title">Название - заголовок  последней новости, краткий анонс, может быть в две - три - четыре - пять и более строк, но слишком длинный не желательно...</a>
                                    </div>
                                </div>
                            </article>
                            <span class="homepage-mark">НОВОСТИ</span>
                        </section>
                    </div>
                    <div class="uk-width-1-2@l">
                        <div class="uk-grid-small uk-margin-small" uk-grid uk-height-match="target: .js-holidays-and-schedule">
                            <div class="uk-width-1-2@s">
                                <a href="#" class="homepage-holiday js-holidays-and-schedule">
                                    <span class="homepage-holiday__header">
                                        Мы празднуем:
                                    </span>
                                    <span class="homepage-holiday__title">
                                        День села - название отмечаемого события
                                    </span>
                                    <span class="homepage-holiday__intro">
                                        Уважаемые жители и гости Никольского сельского поселения! Приглашаем Вас на празднование Дня села...
                                    </span>
                                    <span class="button-more button-more--light">подробнее<span uk-icon="icon: arrow-right"></span></span>
                                </a>
                            </div>
                            <div class="uk-width-1-2@s">
                                <div class="schedule js-holidays-and-schedule">
                                    <div class="schedule__header">
                                        График приёма граждан:
                                    </div> 
                                    <div class="schedule__text">
                                        <div class="uk-flex uk-flex-between uk-flex-wrap">
                                            <span>Пн-Чт:</span> с 08.00 до 16.00
                                        </div>
                                        <div class="uk-flex uk-flex-between uk-flex-wrap">
                                            <span>Перерыв:</span>  с 12.00 до 13.00
                                        </div>
                                        <div class="schedule__untendable">
                                            <span>Чт:</span> неприемный день
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <a href="#" class="homepage-month-event" style="background: url('img/month-event.jpg') 50% 50% no-repeat; background-size: cover;">
                            <span class="homepage-month-event__header uk-flex uk-flex-between uk-flex-middle">
                                <span class="homepage-month-event__title">Событие месяца</span>
                                <span>
                                    <span class="button-more button-more--light">подробнее<span uk-icon="icon: arrow-right"></span></span>
                                </span>
                            </span>
                            <span class="homepage-month-event__pagetitle">
                                Заголовок события месяца. Фоновая картинка- выводится из новости, обращать внимание, чтобы нижняя часть была темной, тк текст белый
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="homepage-second-section">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-width-3-4@m">
                        <div class="dot-block"></div>
                        <article class="homepage-greetings">
                            <img src="../img/photo.jpg" class="homepage-greetings__image" alt="">
                            <div class="homepage-greetings__text-content">
                                <div class="homepage-greetings__text">
                                    <p>
                                        Дорогие друзья!
                                    </p>
                                    <p>
                                        Приветствую  вас на официальном сайте Никольского сельского поселения Новоусманского муниципального района Воронежской области. Я рад, что теперь в мировом информационном пространстве отражена жизнь нашего муниципального образования.
                                    </p>
                                    <p>
                                        Время показало правильность курса на открытость власти и расширение диалога с населением по проблемам, которые волнуют каждого из нас. Мы настроены на искренний и конструктивный диалог с жителями. Хочу вас заверить, что власть всегда открыта  для обмена мнениями и предложениями.
                                    </p>
                                    <p>
                                        Масловский – поселок  энергичных, целеустремлённых и талантливых людей. Вместе мы сможем не только улучшить настоящее, но и обеспечить достойное будущее. Мы рады всем гостям сайта и надеемся, что информация, размещенная на сайте, станет доступна всем, кому не безразлична судьба нашего поселения, кто искренне заинтересован в его дальнейшем развитии и процветании.
                                    </p>
                                    <p>
                                        Уверен, что наше общение будет полезным!Желаю Вам удачи, достижения целей и позитивных планов!
                                    </p>
                                    <p>
                                        С уважением,<br>
                                        Глава Никольскогосельского поселения <span>Полухин Н.И.</span>
                                    </p>
                                </div>
                                <a href="#" class="button-more button-more--light button-more--greetings">подробнее<span uk-icon="icon: arrow-right"></span></a>
                            </div>
                        </article>
                        <div class="dot-block-small"></div>
                    </div>
                    <div class="uk-width-1-4@m">
                        <a href="#" class="outer-link uk-flex-middle">
                            <span class="uk-flex uk-flex-middle">
                                <span class="outer-link__image">
                                    <img src="../img/pfr.jpg" alt="">
                                </span>
                                <span class="outer-link__text">
                                    Управление ПФР по Новоусманскому району Воронежской области информирует
                                </span>
                            </span>
                        </a>
                        <a href="#" class="outer-link uk-flex-middle">
                            <span class="uk-flex uk-flex-middle">
                                <span class="outer-link__image">
                                    <img src="../img/novousman.png" alt="">
                                </span>
                                <span class="outer-link__text">
                                    Cайт администрации Новоусманского муниципального района
                                </span>
                            </span>
                        </a>
                        <a href="#" class="outer-link uk-flex-middle">
                            <span class="uk-flex uk-flex-middle">
                                <span class="outer-link__image">
                                    <img src="../img/gubernator.png" alt="">
                                </span>
                                <span class="outer-link__text">
                                    График личного приема граждан в общественных приемных губернатора Воронежской области
                                </span>
                            </span>
                        </a>
                        <a href="#" class="outer-link uk-flex-middle">
                            <span class="uk-flex  uk-flex-middle">
                                <span class="outer-link__image">
                                    <img src="../img/prokuratura.png" alt="">
                                </span>
                                <span class="outer-link__text">
                                    Прокуратура Воронежской области информирует
                                </span>
                            </span>
                        </a>
                    </div>
                </div>
            </div>
            <div class="homepage-third-section">
                <div class="uk-grid-small" uk-grid>
                    <div class="uk-width-1-2@m">
                        <section class="homepage-documents">
                            <header class="homepage-documents__header uk-flex uk-flex-between uk-flex-middle">
                                <div class="homepage-documents__title">Документы</div>
                                <div>
                                    <a href="#" class="button-more button-more--light">смотреть все</a>
                                </div>
                            </header>
                            <a href="#" class="document-item document-item--homepage">
                                Название - заголовок  информационного документа, который может быть интересен посетителю сайта
                            </a>
                            <a href="#" class="document-item document-item--homepage">
                                Название - заголовок  информационного документа, который может быть интересен посетителю сайта
                            </a>
                            <a href="#" class="document-item document-item--homepage">
                                Название - заголовок  информационного документа, который может быть интересен посетителю сайта
                            </a>
                            <a href="#" class="document-item document-item--homepage">
                                Название - заголовок  информационного документа, который может быть интересен посетителю сайта
                            </a>
                            <span class="homepage-mark homepage-mark--dark homepage-mark--activity">Деятельность</span>
                        </section>
                        <a href="#" class="event" style="background: url('img/event.jpg') 50% 50% no-repeat; background-size: cover;">
                            <span class="event__header">
                                <span class="button-more button-more--light button-more--event">подробнее<span uk-icon="icon: arrow-right"></span></span>
                            </span>
                            <span class="event__title">
                                Заголовок события . Фоновая картинка- выводится из новости, обращать внимание, чтобы нижняя часть была темной, тк текст белый
                            </span>
                            <span class="event__mark homepage-mark">новости</span>
                        </a>
                    </div>
                    <div class="uk-width-1-2@s uk-width-1-4@m">
                        <a href="#" class="homepage-map">
                            Карта поселения
                            <span class="homepage-map__mark homepage-mark">о поселении</span>
                        </a>
                        <a href="#" class="homepage-strategy">
                            Стратегия развития сельского поселения
                            <span class="homepage-strategy__mark homepage-mark">о поселении</span>
                        </a>
                        <a href="#" class="homepage-effectivness">
                            Показатели эффективности
                            <span class="homepage-effectivness__mark homepage-mark">деятельность</span>
                        </a>
                    </div>
                    <div class="uk-width-1-2@s uk-width-1-4@m">
                        <a href="#" class="homepage-zoning">
                            Градостроительное зонирование
                        </a>
                        <a href="#" class="outer-link">
                            <span class="uk-flex uk-flex-middle">
                                <span class="outer-link__image">
                                    <img src="../img/anti-corruption.png" alt="">
                                </span>
                                <span class="outer-link__text">
                                    Противодействие коррупции
                                </span>
                            </span>
                        </a>
                        <a href="#" class="homepage-stop-corruption uk-flex-middle">
                            <span class="uk-flex uk-flex-middle">
                                <span class="homepage-stop-corruption__sign">!</span>
                                <span>Сообщите о факте коррупции</span>  
                            </span>
                        </a>
                        <a href="#" class="outer-link">
                            <span class="uk-flex uk-flex-middle">
                                <span class="outer-link__image">
                                    <img src="../img/icmo.png" alt="">
                                </span>
                                <span class="outer-link__text">
                                    Избирательная комиссия (ИКМО) информирует
                                </span>
                            </span>
                        </a>
                        <a href="#" class="outer-link">
                            <span class="uk-flex uk-flex-middle">
                                <span class="outer-link__image">
                                    <img src="../img/uslugi.png" alt="">
                                </span>
                                <span class="outer-link__text">
                                    Портал государственных и муниципальных услуг
                                </span>
                            </span>
                        </a>
                    </div>
                </div> 
            </div>
        </div>
    </div>
</main>
{/block}