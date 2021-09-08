function apifetch() {
    fetch("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
            "method": "GET",
            "headers": {
                "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
                "x-rapidapi-key": "601658785cmshef7fb52de4dea3ep1aa7e1jsn69d3aee4fc37"
            }

        })
        .then(response => {
            response.json()

            .then(data => {
                console.log(data);
                sorting(data);
                table(data);
            });
        })
}
apifetch();


function table(data) {

    if (data.countries_stat.length >= 0) {
        var temp = "";

        data.countries_stat.forEach(u => {
            temp += "<tr>";
            temp += "<td>" + u.country_name + "</td>";
            temp += "<td>" + u.cases + "</td>";
            temp += "<td>" + u.active_cases + "</td>";
            temp += "<td>" + u.deaths + "</td>";
            temp += "<td>" + u.serious_critical + "</td>";
            temp += "<td>" + u.total_tests + "</td></tr>";
        })

        document.getElementById("data").innerHTML = temp;
        console.log(data.countries_stat);
    } else
        alert("Message");
}

function sorting(data) {

    jQuery(document).ready(function($) {
        $('th').on('click', function() {

            var column = $(this).data('column')
            console.log($);
            console.log('Clicked', column);

            function compare(a, b) {

                var first = parseInt(a[column].replace(/,/g, '').replace(/(n\/a)+/gi, '0'));
                var second = parseInt(b[column].replace(/,/g, '').replace(/(n\/a)+/gi, '0'));

                if (first < second) {
                    return -1;
                } else if (first > second) {
                    return 1;
                }
                return 0;
            }

            let xyz = data.countries_stat.sort(compare);
            console.log(xyz);
            table(data);

        });
    });
}