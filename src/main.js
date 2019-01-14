import createElement from './vdom/createElement';
import render from './vdom/render';
import mount from './vdom/mount';
import diff from './vdom/diff';

const createVApp = count => createElement('div', {
    attrs: {
        id: 'app',
        dataCount: count,
    },
    children: [
        'The current count is: ',
        String(count),
        createElement('div', {
            children: Array.from({
                length: count
            }, () => createElement('img', {
                attrs: {
                    style: "height: 50px; width: 50px",
                    src: 'http://cdn.arguments.cn/logo.png',
                },
            })),
        })
    ],
});

let vApp = createVApp(0);
const $app = render(vApp);

let $rootEl = mount($app, document.getElementById('app'));

setInterval(() => {
    const n = ~~(Math.random() * 10);
    const vNewApp = createVApp(n);
    const patch = diff(vApp, vNewApp);

    $rootEl = patch($rootEl);

    vApp = vNewApp;
}, 1000)