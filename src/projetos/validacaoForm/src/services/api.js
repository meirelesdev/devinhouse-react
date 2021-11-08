import axios from 'axios'
import { URLS } from "./constants";

const api = axios.create({method:"get"})

const getContent = async (url) => {
    const res = await api.get(url)
    console.log(res)
}
export default getContent

export async function getAllUsers() {
  const response = await fetch(`${URLS.BASE}/usuarios`, { method: "GET" });
  const data = await response.json();
  return data;
}

export async function saveNewUser(user) {
  await fetch(`${URLS.BASE}/usuarios`, {
    method: "POST",
    body: JSON.stringify(user),
    headers: { "Content-Type": "application/json" },
  });
}

export async function getAllTechs() {
  const response = await fetch(`${URLS.BASE}/tecnologias`, { method: "GET" });
  const data = await response.json();
  return data;
}

export async function saveNewTech(tech) {
  console.log(tech);
  await fetch(`${URLS.BASE}/tecnologias`, {
    method: "POST",
    body: JSON.stringify(tech),
    headers: { "Content-Type": "application/json" },
  });
}
