
let autocomplete;

function initAutocomplete() {
  autocomplete = new google.maps.places.Autocomplete(
    document.getElementById('autocomplete'),
    {
      fields: ['place_id', 'geometry', 'name', 'address_components']
    });
  // autocomplete.addListener('place_changed', onPlaceChanged);
}

window.initAutocomplete = initAutocomplete;

document.getElementById("searchsubmit").addEventListener("click", function () {
  onPlaceChanged()
})

// function getPostcode(place) {
//   let postcode = "";
//   for (const component of place.address_components) {
//     const componentType = component.types[0];
//     if (componentType == "postal_code") {
//       postcode = component.short_name
//     }
//   }
//   return postcode
// }
