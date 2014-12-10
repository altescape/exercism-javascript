function warningMaker( obstacle ){
    var count = 0, zones = [];
    return function ( number, location ) {
        count++;
        zones.push([location, number]);
        var zonesString = "";
        zones.forEach(function (element, index, array) {
            zonesString = zonesString + "\n" + zones[index][0] + " (" + zones[index][1] + ")";
        });

        console.log(zonesString);

        console.log("Beware! There have been " +
            obstacle +
            " sightings in the Cove today!\n" +
            number +
            " " +
            obstacle +
            "(s) spotted at the " +
            location +
            "!\n" +
            "This is Alert #" +
            count +
            " today for " +
            obstacle +
            " danger.\n" +
            "Current danger zones are:\n" +
            zonesString
        );
    };
}

function warningMaker( obstacle ){
    var count = 0;
    var zones = [];
    return function ( number, location ) {
        count++;
        zones.push( [location, number] );
        var list = "";
        for(var i = 0; i<zones.length; i++){
            list = list + "\n" + zones[i][0] + " (" + zones[i][1] + ")";
        }
        alert("Beware! There have been " +
            obstacle +
            " sightings in the Cove today!\n" +
            number +
            " " +
            obstacle +
            "(s) spotted at the " +
            location +
            "!\n" +
            "This is Alert #" +
            count +
            " today for " +
            obstacle +
            " danger.\n" +
            "Current danger zones are: " +
            list
        );
    };
}

var warning1 = warningMaker("giant ice bat");
warning1(33, "Blizzard Beach");
warning1(33, "Ice Caves");
warning1(33, "Frozen Falls");
warning1(33, "Ice Caves");
warning1(33, "Ice Caves");
warning1(33, "Frozen Falls");