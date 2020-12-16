const getIndustries = async () => {
  try {
    const db = await import(`@/static/data/industries.json`)

    return Object.values(db).pop()
  } catch (err) {
    console.log(err)
    return []
  }
}

const getCountries = async () => {
  try {
    const db = await import(`@/static/data/countries.json`)
    return Object.values(db).pop()
  } catch (err) {
    console.log(err)
    return []
  }
}

export { getIndustries, getCountries }
