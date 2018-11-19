const BASE_URL = "https://zagster-service.herokuapp.com"

$(updateView)

function updateView(){
   $.getJSON(BASE_URL + "/rides/count", updateRideCount)
   $.getJSON(BASE_URL + "/rides/count/per_month", printData)
}

function printData(data) {
    [{"1":20},{"2":31},{"3":79},{"4":88},{"5":156},{"6":301},{"7":405},{"8":187},{"9":401},{"10":353},{"11":113},{"12":79}]
}

function updateRideCount(data) {
    numberOfRides = data.count
    $("h2#rideCount").html(numberOfRides)
}