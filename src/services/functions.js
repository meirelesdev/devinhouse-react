export const toUpperFirtLetter = (string) => {
  return string.charAt(0).toUpperCase() + string.slice(1);
}
export const getMenuSemanas = (array) => {
  return array.map((semana) => {
    const id = semana.replace(/\D+/g, '')
    const name = semana.replace(/\d+/g, '')
    const refs = `/${name}/${id}`
    const title = `${toUpperFirtLetter(name)}`
    return {
      refs,
      title: `${title} ${id}`,
      class: "active"
    }
  })
}