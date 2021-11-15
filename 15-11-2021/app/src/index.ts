import {APIService} from './ts/APIService';

const api = new APIService();

api.getCovidData().then(data => {
    const keys = Object.keys(data[0]);
    const topRow = document.createElement('tr');
    const table = document.getElementById('table');
    table.appendChild(topRow);
    keys.forEach(key => {
        const th = document.createElement('th');
        th.textContent = key;
        topRow.appendChild(th);
    });
    data.forEach(element => {
        const keys = Object.keys(element);
        const row = document.createElement('tr');
        keys.forEach(key => {
            const td = document.createElement('td');
            td.textContent = (<any>element)[key];
            row.appendChild(td);
        });
        table.appendChild(row);
    });
});