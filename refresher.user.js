// ==UserScript==
// @name         ThinkOrSwim Refresher
// @namespace    http://tampermonkey.net/
// @version      2026-04-22
// @description  Automatically reloads the ThinkOrSwim web platform the first time you return to the tab after 5am local time.
// @author       You
// @match        https://trade.thinkorswim.com/
// @icon         https://www.google.com/s2/favicons?sz=64&domain=thinkorswim.com
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    const key = 'tos_last_refresh_day';

    function getRefreshTime() {
        const d = new Date();
        d.setHours(5, 0, 0, 0);
        return d;
    }

    document.addEventListener('visibilitychange', () => {
        if (document.visibilityState !== 'visible') return;
        const now = new Date();
        const boundary = getRefreshTime();
        if (now >= boundary) {
            const lastDay = localStorage.getItem(key);
            const today = now.toDateString();
            if (lastDay !== today) {
                localStorage.setItem(key, today);
                location.reload();
            }
        }
    });
})();