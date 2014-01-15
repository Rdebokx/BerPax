(module.exports = function() {
    
    var output = {};
    
    var maps = require("ti.map");
    
    output.showMaps = function(){
        //construct window
        var win = Ti.UI.createWindow({
            backgroundColor: "#fff",
            navBarHidden: true,
        });
        
        var wrapper = Ti.UI.createView({
            top: Ti.Platform.osname != "android" ? 25 : null,
            bottom: 0,
            left: 0,
            right: 0
        });
        win.add(wrapper);
        
        //Title bar
        wrapper.add(Ti.UI.createImageView({
            image: "/images/taxi_logo.png",
            top: 0,
            left: 0,
            height: 75,
            width:75
        }));
        wrapper.add(Ti.UI.createLabel({
            text: "BerPax Taxi App",
            top: 15,
            left: 90,
            font: {
                fontWeight: "bold",
                fontSize: 20
            },
            color: "#000"
        }));
        wrapper.add(Ti.UI.createLabel({
            text: "Where is my taxi?",
            top: 40,
            left: 90,
            font: {
                fontSize: 20
            },
            color: "#000"
        }));
        
        //create couple of annotations
        
        
        //create view
        var annotations = [
            maps.createAnnotation({
                title: "Taxi 1015",
                subtitle: "Status: on route.ETA: 14:36",
                latitude: 51.538862,
                longitude: 5.167297
            })
        ];
        var mapsView = maps.createView({
            top: 75,
            bottom: 0,
            left: 0,
            right: 0,
            region: {
                latitude: 51.564266,
                longitude: 5.107269,
                latitudeDelta: 0.4
            },
            annotations: annotations
        });
        
        wrapper.add(mapsView);
        
        win.open();
 
    }
    
    return output;

}());