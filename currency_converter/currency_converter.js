var selC0 = $('#currency_0')
var selC1 = $('#currency_1')
//calling the list of all currencies from the api and appending them into the two dropdowns along with their respective values
$.ajax({
    method: 'GET',
    url: 'http://apilayer.net/api/list?access_key=a12ccc7587af96c202bfbe4354d662ab'
})
    .done(function (response) {
        allList = response.currencies
        for (key in allList) {
            var opt1 = $(selC1).append($('<option value="'+key+'">'+allList[key]+'</option>'))
            var opt2 = $(selC0).append($('<option value="'+key+'">'+allList[key]+'</option>'))
        }
        $('#conv').on('click', convert) //calling the convert (currency converter) function
    })
$('#icon2').hide()
//function to convert the 'n' units of currency in dropdown 1 into the currency of dropdown 2
function convert() {
    $.ajax({
        method: 'GET',
        url: 'http://apilayer.net/api/live?access_key=a12ccc7587af96c202bfbe4354d662ab'
    })
        .done(function (response3) {
            for (key in response3.quotes) {
                if (key=='USD'+$(selC0).val()) {
                    var out0 = response3.quotes[key]
                }
                if (key=='USD'+$(selC1).val()) {
                    var out1= response3.quotes[key]
                }
            }
            var number= Math.abs($('#num0').val())
            var output = (out1/out0)*(number)
            $('#show').text(output.toFixed(3)+' '+$(selC1).val())
            $('#show1').text(number+' '+$(selC0).val())

        //showing flags according to the currency
        $.ajax({
            method: 'GET',
            url: 'https://restcountries.eu/rest/v2/all'
        })
        .done(function (database) {
            //-----
            if($(selC0).val()=='USD'){
                var curr = database.filter(function(e){
                    return e.name=="United States of America"
                })
            }
            else{
                var curr = database.filter(function(e){
                return e.currencies[0].code==$(selC0).val()
                })
            }

            //-------
            var curr1 = database.filter(function(e){
                return e.currencies[0].code==$(selC1).val()
            })
            console.log(curr[0].alpha2Code)
            console.log(curr1[0].alpha2Code)
            $('#icon2').show()
            $('#img1').attr('src','https://www.countryflags.io/'+curr[0].alpha2Code+'/shiny/64.png')
            $('#img2').attr('src','https://www.countryflags.io/'+curr1[0].alpha2Code+'/shiny/64.png')
        })

        })


}
