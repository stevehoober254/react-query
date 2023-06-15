import axios from 'axios';

const API_URL = "http://localhost:3000/superheroes";


export const fetchSuperHeroes = () => axios.get(API_URL) 
 