axios.get("https://corona-virus-world-and-india-data.p.rapidapi.com/api", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "corona-virus-world-and-india-data.p.rapidapi.com",
            "x-rapidapi-key": "601658785cmshef7fb52de4dea3ep1aa7e1jsn69d3aee4fc37"
        }
    })
    .then(response => {
        console.log(response.data);

        if (response.data.countries_stat.length >= 0) {

            var temp = "";
            response.data.countries_stat.forEach(u => {
                temp += "<tr>";
                temp += "<td>" + u.country_name + "</td>";
                temp += "<td>" + u.cases + "</td>";
                temp += "<td>" + u.active_cases + "</td>";
                temp += "<td>" + u.deaths + "</td>";
                //temp += "<td>" + u.new_cases + "</td>";
                //temp += "<td>" + u.new_deaths + "</td>";
                temp += "<td>" + u.serious_critical + "</td>";
                /*temp += "<td>" + u.tests_per_1m_population + "</td>";
                temp += "<td>" + u.total_cases_per_1m_population + "</td>";
                temp += "<td>" + u.total_recovered + "</td>";*/
                temp += "<td>" + u.total_tests + "</td></tr>";
            })

            document.getElementById("data").innerHTML = temp;

        } else {
            alert("Message");
        }

        const tableHead = document.getElementById("tableTh");

        //tableHead.addEventListener("click", function() {
        $('th').on('click', function() {
            var column = $(this).data('column')

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
            var xyz = response.data.countries_stat.sort(compare);
            console.log(xyz);
            //table(data);
            if (response.data.countries_stat.length >= 0) {
                var temp = "";
                response.data.countries_stat.forEach(u => {
                    temp += "<tr>";
                    temp += "<td>" + u.country_name + "</td>";
                    temp += "<td>" + u.cases + "</td>";
                    temp += "<td>" + u.active_cases + "</td>";
                    temp += "<td>" + u.deaths + "</td>";
                    temp += "<td>" + u.serious_critical + "</td>";
                    temp += "<td>" + u.total_tests + "</td></tr>";
                })

                document.getElementById("data").innerHTML = temp;

            } else {
                alert("Message");
            }
        });


    }, err => {
        console.log(err)
    })