export async function getAllResorts() {
   try {
      const response = await fetch('https://api.themeparks.wiki/v1/destinations')
      return await response.json();
   } catch(error) {
      return[]
   }
}

export async function getParksWithinResort() {
   try {
      const response = await fetch('https://api.themeparks.wiki/v1/destinations')
      return await response.json();
   } catch(error) {
      return[]
   }
}

// export getParksWithinResort = (resortId) => {

// }

// export getOpeningHoursOfPark = (parkId) => {

// }

// export getAttractionsWithinPark = (parkId) => {

// }

// export getRestaurantsWithinPark = (parkId) => {

// }

// export getShowsWithinPark = (parkId) => {

// }

