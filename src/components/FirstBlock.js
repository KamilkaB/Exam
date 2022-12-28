import React from "react";
import { image } from './Icons'

export default function Head() {
    return (
        <>
            <div className="container">
                <img className="BackImage1" src={image[2]} alt='Vector' />
                <img className="BackImage4" src={image[12]} alt='Vector' />
                <img className="BackImage5" src={image[13]} alt='Vector' />
                <div className="HeadBlock">
                    <div className="HeadBlock1">
                        <img src={image[3]} alt='Icon' />
                    </div>
                    <div className="HeadBlock2">
                        <div className="HeadBlock2Items">
                            <h2>Каталог товаров</h2>
                            <h2>Блог</h2>
                            <h2>Контакты</h2>
                        </div>
                    </div>
                    <div className="HeadBlock3">
                        <div className="HeadBlock3Items">
                            <button ><img src={image[5]} alt='lupa' /></button>
                            <button ><img src={image[0]} alt='icon1' /></button>
                            <button><img src={image[1]} alt='icon1' /></button>
                        </div>
                    </div>
                </div>
                <div className="Dots">
                    <div className="Dot"></div>
                    <div className="Dot"></div>
                    <div className="Dot"></div>
                </div>
                <div className="FirstBlock">
                    <h1>Свежеобжаренный кофе</h1>
                    <img className="BackImage2" src={image[6]} alt='Vector' />
                    <img className="BackImage3" src={image[7]} alt='Vector' />
                    <div className="FirstBlock-Text">
                        <h2>Кофе Запорожской обжарки из разных стран произрастания с доставкой на дом.</h2>
                        <h2>Мы обжариваем кофе <p>каждые выходные</p>.</h2>
                        <button><h2>Посмотреть каталог</h2></button>
                    </div>
                </div>
                {/* *************************************************** */}
                <div className="SecondBlock">
                    <h2>Каталоги нашей продукции</h2>
                    <div className="SecondBlock-fblock">
                        <div>
                            <img src={image[8]} className='img-inblock' alt='Asorti' />
                            <h3 className="h3-inblock">Свежеобжаренный кофе</h3>
                            <button className="button-inblock"><h3>Купить</h3></button>
                        </div>
                        <div>
                            <img src={image[10]} className='img-inblock' alt='Asorti' />
                            <h3 className="h3-inblock">Чай и кофейные напитки</h3>
                            <button className="button-inblock"><h3>Купить</h3></button>
                        </div>
                        <div>
                            <img src={image[9]} className='img-inblock' alt='Asorti' />
                            <h3 className="h3-inblock">Продукция для вендинга</h3>
                            <button className="button-inblock"><h3>Купить</h3></button>
                        </div>
                        <div>
                            <img src={image[11]} className='img-inblock' alt='Asorti' />
                            <h3 className="h3-inblock">Здоровое питание</h3>
                            <button className="button-inblock"><h3>Купить</h3></button>
                        </div>
                    </div>
                </div>
                {/* ************************************************************ */}
                <div className="ThirdBlock">
                    <div className="ThirdBlock-Head">
                        <h2>Товары со скидкой</h2>
                        <h3>Наша компания предлагает покупать товар со скидкой не только в дни распродаж или в течении действия ограниченных предложений, но и пользоваться скидками постоянно!</h3>
                    </div>
                    <div className="ThirdBlock-Center">
                        <button id='button1'><i class="gg-arrow-long-down"></i></button>
                        <div className="ThirdBlock-Asorti">
                            <div className="ThirdBlock-Asorti-Head">
                                <div className="ThirdBlock-Asorti-Head-First">
                                    <div className="Sale">%</div>
                                    <h2>Скидки</h2>
                                    <img src={image[14]} alt='coffe' />
                                </div>
                                <div className="ThirdBlock-Asorti-Head-Second">
                                    <ul>250 г. <i class="gg-chevron-down"></i></ul>
                                    <img src={image[16]} alt='coffe' />
                                    <div>
                                        <h2>4.0 <p>(32 отзыва)</p></h2>
                                    </div>
                                    <img src={image[15]} alt='coffe' />
                                    <h3>Кислинка</h3>
                                    <img src={image[17]} alt='coffe' />
                                    <h3>Горчинка</h3>
                                    <img src={image[17]} alt='coffe' />
                                    <h3>Насыщенность</h3>
                                    <img src={image[17]} alt='coffe' />
                                </div>
                            </div>
                            <div className="ThirdBlock-Asorti-Bottom">
                                <div className="ThirdBlock-Asorti-Bottom-First">
                                    <h1>Colombia Supremo</h1>
                                    <h3>Свежеобжаренный кофе - <br /> описание товара, вкус, аромат</h3>
                                </div>
                                <div className="ThirdBlock-Asorti-Bottom-Second">
                                    <h2>350 $</h2>
                                    <h1>250$</h1>
                                    <button>В корзину</button>
                                </div>
                            </div>
                        </div>
                        <div className="ThirdBlock-Asorti">
                            <div className="ThirdBlock-Asorti-Head">
                                <div className="ThirdBlock-Asorti-Head-First">
                                    <div className="Sale">%</div>
                                    <h2>Скидки</h2>
                                    <img src={image[14]} alt='coffe' />
                                </div>
                                <div className="ThirdBlock-Asorti-Head-Second">
                                    <ul>250 г. <i class="gg-chevron-down"></i></ul>
                                    <img src={image[16]} alt='coffe' />
                                    <div>
                                        <h2>4.0 <p>(32 отзыва)</p></h2>
                                    </div>
                                    <img src={image[15]} alt='coffe' />
                                    <h3>Кислинка</h3>
                                    <img src={image[17]} alt='coffe' />
                                    <h3>Горчинка</h3>
                                    <img src={image[17]} alt='coffe' />
                                    <h3>Насыщенность</h3>
                                    <img src={image[17]} alt='coffe' />
                                </div>
                            </div>
                            <div className="ThirdBlock-Asorti-Bottom">
                                <div className="ThirdBlock-Asorti-Bottom-First">
                                    <h1>Colombia Supremo</h1>
                                    <h3>Свежеобжаренный кофе - <br /> описание товара, вкус, аромат</h3>
                                </div>
                                <div className="ThirdBlock-Asorti-Bottom-Second">
                                    <h2>350 $</h2>
                                    <h1>250$</h1>
                                    <button>В корзину</button>
                                </div>
                            </div>
                        </div>
                        <div className="ThirdBlock-Asorti">
                            <div className="ThirdBlock-Asorti-Head">
                                <div className="ThirdBlock-Asorti-Head-First">
                                    <div className="Sale">%</div>
                                    <h2>Скидки</h2>
                                    <img src={image[14]} alt='coffe' />
                                </div>
                                <div className="ThirdBlock-Asorti-Head-Second">
                                    <ul>250 г. <i class="gg-chevron-down"></i></ul>
                                    <img src={image[16]} alt='coffe' />
                                    <div>
                                        <h2>4.0 <p>(32 отзыва)</p></h2>
                                    </div>
                                    <img src={image[15]} alt='coffe' />
                                    <h3>Кислинка</h3>
                                    <img src={image[17]} alt='coffe' />
                                    <h3>Горчинка</h3>
                                    <img src={image[17]} alt='coffe' />
                                    <h3>Насыщенность</h3>
                                    <img src={image[17]} alt='coffe' />
                                </div>
                            </div>
                            <div className="ThirdBlock-Asorti-Bottom">
                                <div className="ThirdBlock-Asorti-Bottom-First">
                                    <h1>Colombia Supremo</h1>
                                    <h3>Свежеобжаренный кофе - <br /> описание товара, вкус, аромат</h3>
                                </div>
                                <div className="ThirdBlock-Asorti-Bottom-Second">
                                    <h2>350 $</h2>
                                    <h1>250$</h1>
                                    <button>В корзину</button>
                                </div>
                            </div>
                        </div>
                        <button id='button2'><i class="gg-arrow-long-down"></i></button>
                    </div>
                    <div className="Center-Bottom">Смотреть всё</div>
                </div>
                {/********************************************************** */}
                <div className="FourBlock">
                    <img className="BackImage6" src={image[19]} />
                    <img className="BackImage7" src={image[20]} />
                    <img className="BackImage8" src={image[18]} />
                    <img className="BackImage9" src={image[21]} />
                    <div className="FourBlock-Head"><h1>Почему стоит работать именно с нами?</h1></div>
                    <div className="FourBlock-Bottom">
                        <div className="FourBlock-Bottom-Left">
                            <div><i class="fa-solid fa-mug-hot"></i></div>
                            <div><i class="fa-solid fa-square-check"></i></div>
                            <div><i class="fa-solid fa-user-check"></i></div>
                        </div>
                        <div className="FourBlock-Bottom-Right">
                            <div className="FourBlock-Bottom-Right-Inside">
                                <h2>Всегда свежая обжарка</h2>
                                <h3>Подбор степени обжарки под каждый сорт кофе. Всегда свежая обжарка</h3>
                            </div>
                            <div className="FourBlock-Bottom-Right-Inside">
                                <h2>Лучшие цены на продукцию</h2>
                                <h3>Благодаря крупным объемам производства мы даем лучшие цены на нашу продукцию</h3>
                            </div>
                            <div className="FourBlock-Bottom-Right-Inside">
                                <h2>Консультации 24/7</h2>
                                <h3>Наши специалисты готовы всегда помочь
                                    и подсказать вам с выбором кофе или другой продукции.</h3>
                            </div>
                        </div>
                        <img className="BackImage11" src={image[22]} />
                        <img className="BackImage10" src={image[23]} />
                    </div>
                </div>
                {/* ****************************************** */}
                <div className="FiveBlock">
                    <h1>Как мы обжариваем наш кофе:</h1>
                    <h3>Компания Нью Рефайнинг Груп находится в г. Калининграде и имеет свой склад и представительство
                        в Москве. Завод работает на рынке свежеобжаренного кофе и растворимой продукции более 15 лет. Завод имеет немецкое оборудование марки Probat по обжарке кофе и итальянские агломераторы
                        для производства растворимой продукции.</h3>
                    <h3>Кофе поставляется в контейнерах напрямую с плантаций по всему миру. Компания имеет долгосрочные контракты по поставке продукции. Каждая партия проходит строгий контроль на заводе для проверки зерна. Зеленое зерно обжаривается, проходит процесс дегазации и тут же отправляется клиентам. Наши обжарщики прошли обучение в России и за рубежом.
                        <br />
                        У нас свой подход к каждой партии зерна.</h3>
                    <h3>Мы раскрываем вкус каждого сорта кофе.</h3>
                    <button>Перейти в каталог</button>
                    <img className="BackImage12" src={image[24]} />
                </div>
                <div className="SixBlock">
                    <div className="SixBlock-Head">
                        <h1>Новости компании</h1>
                        <div>Читать всё</div>
                    </div>
                    <div className="SixBlock-Bottom">
                        <div className="SixBlock-Bottom-Block">
                            <div className="SixBlock-Bottom-Block-Photo">
                                <img src={image[25]} />
                                <div>
                                    <h2>Танзанийский кофе. Откуда он взялся и почему мы его так любим?</h2>
                                    <h3>Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.</h3>
                                    <h3>Но наш интерес вызван не столько природными красотами, сколько кофе...</h3>
                                    <button>Подробнее <i class="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                            <div className="SixBlock-Bottom-Block-Text">
                                <div>
                                    <h2>Африканский кофе Кения АА</h2>
                                    <h3>Кения АА – у этого кофе, из африканской страны, репутация одного из самых вкусных и ярких сортов в мире. Многие обжарщики высоко оценивают местные разновидности высокогорной арабики.</h3>
                                    <button>Подробнее <i class="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                        <div className="SixBlock-Bottom-Block">
                            <div className="SixBlock-Bottom-Block-Text">
                                <div>
                                    <h2>Африканский кофе Кения АА</h2>
                                    <h3>Кения АА – у этого кофе, из африканской страны, репутация одного из самых вкусных и ярких сортов в мире. Многие обжарщики высоко оценивают местные разновидности высокогорной арабики.</h3>
                                    <button>Подробнее <i class="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                            <div className="SixBlock-Bottom-Block-Photo">
                                <img src={image[25]} />
                                <div>
                                    <h2>Танзанийский кофе. Откуда он взялся и почему мы его так любим?</h2>
                                    <h3>Танзания – красивая африканская страна. Именно здесь расположены легендарные географические объекты – вулкан Килиманджаро и озеро Виктория.</h3>
                                    <h3>Но наш интерес вызван не столько природными красотами, сколько кофе...</h3>
                                    <button>Подробнее <i class="fa-solid fa-arrow-right"></i></button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <img className="BackImage13" src={image[18]} />
                    <img className="BackImage14" src={image[21]} />
                </div>
                <div className="SevenBlock">
                    <div className="SevenBlock-Head">
                        <h1>Мы в Instagram</h1>
                        <button><i class="fa-brands fa-instagram"></i></button>
                    </div>
                    <div className="SevenBlock-Bottom">
                        <img className="BackImage15" src={image[26]} />
                        <img className="BackImage16" src={image[27]} />
                    </div>
                    <div className="SevenBlock-Head-Right">
                        <div className="SevenBlock-Head-Right-Block"></div>
                        <div className="SevenBlock-Head-Right-Block"></div>
                        <div className="SevenBlock-Head-Right-Block"></div>
                        <div className="SevenBlock-Head-Right-Block"></div>
                        <img className="BackImage17" src={image[28]} />
                        <button><i class="fa-solid fa-arrow-right"></i></button>
                        <img className="BackImage18" src={image[29]} />
                    </div>
                </div>
                <div className="EightBlock">
                    <div>
                        <h1>Подписка на новости и рассылку</h1>
                        <h2>Подпишитесь на нашу рассылку прямо сейчас и будьте в курсе<br /> новых поставок, скидок и эксклюзивных предложений.</h2>
                        <input type='text' placeholder='Ваш email'></input>
                        <button>Подписаться</button>
                        <h3>Нажимая на кнопку “Подписаться”, вы принимаете правила <p>пользовательского соглашения</p></h3>
                        <img className="BackImage19" src={image[6]} alt='Vector' />
                        <img className="BackImage20" src={image[7]} alt='Vector' />
                    </div>
                </div>
                <div className="Bottom">
                    <div className="Bottom-Left">
                        <img src={image[3]} alt='Icon' />
                    </div>
                    <div className="Bottom-Right">
                        <div>Каталог товаров</div>
                        <div>Блог</div>
                        <div>Конткаты</div>
                    </div>
                </div>
            </div>
        </>
    )
}