export const fetchGeocode = address => {
  return $.ajax({
    method: 'GET',
    url: `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=AIzaSyAo82B1dCxPWWlLhFr244TV2VPabqEnLc0`
  });
};

export const fetchRestaurants = address => {
  return $.ajax({
    method: 'GET',
    url: '/api/restaurants',
    data: { address }
  });
};
