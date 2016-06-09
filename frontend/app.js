import './style.scss';
//G E T  D A T A  S E R V I C E
import Data from './service/data';

//D E P E N D E C I E S
import vueRouter from 'vue-router';
Vue.use(vueRouter);


import cuttedwidth from './view/cutted-width';
Vue.component('cutted-width', cuttedwidth);



let rootComponent = Vue.extend({
    replace: false,
    template: `
        <div id="root-component">
            <h1>Художественная Мастерская</h1>
            <!--<a v-link="{ name: 'index'}">Главная</a>
            <a v-link="{ name: 'oil'}">Масло</a>
            <a v-link="{ name: 'brush'}">Сухая кисть</a>
            <a v-link="{ name: 'contacts'}">Контакты</a>-->
            <router-view></router-view>
             <h1>
                <span class="logo-kraski">краски</span>
                <span class="logo-risunki">Рисунки</span>
            </h1>
        </div>

    `
});

let router = new vueRouter({
    history: false
});

router
    .map({
        '/': {
            name: 'index',
            component: {
                template: `
                <div>
                    ИКОНКА портреты маслом 
                    ИКОНКА портреты сухой кистью 
                    ИКОНКА товары для художников 
                    <cutted-width :image="image"></cutted-width>
                </div>
            `,
                data() {
                    return {
                        image: {
                            src: 'media/images/gif-sample/cutted-album.jpg'
                        }
                    };
                }
            }
        },
        '/oil': {

            name: 'oil',
            component: {
                template: `
                    <h1>Потреты Маслом</h1>
            `
            }
        },
        '/brush': {
            name: 'brush',
            component: {
                template: `
                    <h1>Портреты сухой кистью</h1>
            `
            }
        },
        '/contacts': {
            name: 'contacts',
            component: {
                template: `
                    contacts
            `
            }
        }
    })
    .start(rootComponent, '#application', () => {
        console.log('Приложение работает');
    });
