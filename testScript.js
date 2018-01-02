 var loader = $("#loader");
    var loaderSquares = loader.find(".loader-square");

    var squares = [
        { id: "#0", r: 0, g: 0, b: 0 },
        { id: "#1", r: 0, g: 16, b: 0 },
        { id: "#2", r: 0, g: 32, b: 0 },
        { id: "#3", r: 0, g: 48, b: 0 },
        { id: "#4", r: 0, g: 64, b: 0 },
        { id: "#5", r: 0, g: 80, b: 0 },
        { id: "#6", r: 0, g: 96, b: 0 },
        { id: "#7", r: 0, g: 112, b: 0 },
        { id: "#8", r: 0, g: 128, b: 0 },
        { id: "#9", r: 0, g: 144, b: 0 }
    ];

    setInterval(function() {
        loaderSquares.each(function(index, value) {
            var current = squares[index];

            if(current.g == 0) {
                current.g = 144;
            }
            else {
                current.g = current.g - 16;
            }

            var colour = "rgb(" + current.r + "," + current.g + "," + current.b + ")";

            var square = loader.find(current.id);

            square.css("background-color",  colour);
            square.css("color",  colour);
        });
    },
    300);
