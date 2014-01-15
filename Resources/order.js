(module.exports = function() {
    
    var output = {};
    
    output.openOrderWin = function(){
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
            text: "Order Request",
            top: 40,
            left: 90,
            font: {
                fontSize: 20
            },
            color: "#000"
        }));
        
        //=== top bar ===
        var topBar = Ti.UI.createView({
            top: 75,
            height: 50,
            left: 0,
            right: 0,
            backgroundColor: "#f2f2f2"
        });
        wrapper.add(topBar);
        topBar.add(Ti.UI.createLabel({
            text: "1. START",
            left: 10,
            color: "#000",
            font: {
                fontSize: 16
            }
        }));
        var twoWrapper = Ti.UI.createView({
            left: 90,
            right: 100,
            height: 50,
            backgroundColor: "#a5a5a5"
        });
        topBar.add(twoWrapper);
        twoWrapper.add(Ti.UI.createLabel({
            text: "2. INPUT / EDIT",
            left: 10,
            color: "#fff",
            font: {
                fontSize: 16
            }
        }));
        topBar.add(Ti.UI.createLabel({
            text: "3. VERIFY",
            left: 230,
            color: "#000",
            font: {
                fontSize: 16
            }
        }));
        
        //=== scrollview ===
        var form = Ti.UI.createScrollView({
            top: 135,
            left: 10,
            right: 10,
        });
        wrapper.add(form);
        
        form.add(Ti.UI.createSwitch({
            left: 10,
            width: 40,
            top: 0,
            value: true
        }));
        form.add(Ti.UI.createLabel({
            text: "Recurring",
            top: 5, 
            left: 75,
            color: "#000",
            font: {
                fontSize: 15,
                fontWeight: 'bold'
            }
        }));
        //Where
        var top = 50;
        form.add(Ti.UI.createLabel({
            text: "Where",
            left: 0,
            top: top,
            color: "#000",
            font: {
                fontSize: 15,
                fontWeight: "bold"
            }
        }));
        form.add(createFormRow(top += 20, "From", "Current location"));
        form.add(createFormRow(top += 50, "To", "Home"));
        
        top += 50;
        form.add(Ti.UI.createLabel({
            text: "When",
            left: 0,
            top: top,
            color: "#000",
            font: {
                fontSize: 15,
                fontWeight: "bold"
            }
        }));
        
        
        form.add(createFormRow(top += 20, "Date", "1 Jan 2014"));
        form.add(createFormRow(top += 50, "Departure Time", "16 : 00"));
        //arrival field (loading...)
        var arrival = createFormRow(top += 50, "Arrival time", "16 : 34");
        arrival.field.color = "#7f7f7f";
        var style = Ti.Platform.name === 'iPhone OS' ? Ti.UI.iPhone.ActivityIndicatorStyle.DARK : Ti.UI.ActivityIndicatorStyle.DARK; 
        var activityIndicator = Ti.UI.createActivityIndicator({
          style:style,
          top:10,
          right:10,
          height:Ti.UI.SIZE,
          width:Ti.UI.SIZE
        });
        arrival.field.add(activityIndicator);
        
        win.addEventListener('open', function (e) {
          activityIndicator.show();
        });
        
        
        form.add(arrival);
        
        top += 75;
        var buttonWrapper = Ti.UI.createView({
            left: 0,
            right: 0,
            top: top,
            layout: "horizontal"
        });
        form.add(buttonWrapper);
        buttonWrapper.add(createSquareButton("Reset"));
        var cancelButton = createSquareButton("Cancel");
        cancelButton.addEventListener("click", function(){
            win.close();
        });
        buttonWrapper.add(cancelButton);
        buttonWrapper.add(createSquareButton("OK"));
        
        win.open();

    }
    
    var createFormRow = function(top, label, value){
        var wrapper = Ti.UI.createView({
            top: top,
            left: 0,
            right: 0,
            height: 40,
        });
        var label = Ti.UI.createLabel({
            text: label,
            left: 10,
            color: "#000",
            font: {
                fontSize: 15
            }
        });
        wrapper.label = label;
        wrapper.add(label);
        
        var field = Ti.UI.createTextField({
            value: value,
            left: 150,
            right: 0,
            top: 0,
            bottom: 0,
            borderColor: "7f7f7f",
            paddingLeft: 10,
            backgroundFocusedColor: "#facc99"
        });
        wrapper.field = field;
        wrapper.add(field);
        return wrapper;
    }
    
    var createSquareButton = function(text){
        var button = Ti.UI.createView({
            backgroundColor: "#f07f08",
            borderColor: "#b05b05",
            borderWidth: 2,
            height: 30,
            width: 90,
            left: 10,
            //right: 10
        });
        button.add(Ti.UI.createLabel({
            text: text,
            color: "#fff",
            font: {
                fontSize: 15
            }
        }));
        return button;
    }
    
    return output;

}());