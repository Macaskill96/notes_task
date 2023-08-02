import {INotes} from "../interfaces";

let category = ['Task', 'Random Thought', 'Idea'];
let notes:INotes[] = [
    {date: '02.05.2015', note: 'Buy a car', category:'Task'},
    {date: '15.12.2015', note: 'Take a shower', category:'Idea'},
    {date: '01.01.2016', note: 'Wake up', category:'Task'},
    {date: '30.01.2016', note: 'Going to new job', category:'Task'},
    {date: '04.02.2016', note: 'Meet with friends', category:'Random Thought'},
    {date: '28.06.2017', note: 'Cooking', category:'Idea'},
    {date: '28.06.2022', note: 'Wash a cat', category:'Random Thought'}
];

export {category, notes}