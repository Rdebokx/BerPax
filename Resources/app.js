//vars
labelFontSize = 18;
labelHeight = 30;

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
    text: "Start",
    top: 40,
    left: 90,
    font: {
        fontSize: 20
    },
    color: "#000"
}));

//buttons
var buttonWrapper = Ti.UI.createView({
    top: 130,
    left: 30,
    right: 30,
    bottom: 0
});
wrapper.add(buttonWrapper);

//=== Order section ===
var orderButton = Ti.UI.createView({
    left: 0,
    right: 0,
    height: 50,
    top: 0,
    backgroundColor: "#f07f08",
    borderColor: "#b05b05",
    borderWidth: 3,
    borderRadius: 10
});
buttonWrapper.add(orderButton);
orderButton.add(Ti.UI.createLabel({
    text: "Order Request",
    color: "#fff",
    font: {
        fontSize: 15
    }
}));
orderButton.addEventListener("click", function(e){
    buttonClicked(0);
});

//order section
var orderSection = Ti.UI.createView({
    height: 10,
    left: 0,
    right: 0,
    top: 75,
    layout: "vertical",
    backgroundColor: "#f00"
});
buttonWrapper.add(orderSection);

var getTaxiLabel = Ti.UI.createLabel({
    text: "Get a taxi now",
    left: 0,
    height: labelHeight,
    color: "#000",
    font: {
        fontSize: labelFontSize
    }
});
orderSection.add(getTaxiLabel);
getTaxiLabel.addEventListener("click", function(e){
    //TODO
});

var planLabel = Ti.UI.createLabel({
    text: "Plan trip",
    left: 0,
    height: labelHeight,
    color: "#000",
    font: {
        fontSize: labelFontSize
    }
});
orderSection.add(planLabel);

var frequentLabel = Ti.UI.createLabel({
    text: "Frequent trips",
    left: 0,
    height: labelHeight,
    color: "#000",
    font: {
        fontSize: labelFontSize
    }
});
orderSection.add(frequentLabel);

var recentLabel = Ti.UI.createLabel({
    text: "My recent orders",
    left: 0,
    height: labelHeight,
    color: "#000",
    font: {
        fontSize: labelFontSize
    }
});
orderSection.add(recentLabel);


//=== Invoice button ===
var invoiceButton = Ti.UI.createView({
    left: 0,
    right: 0,
    top: 100,
    height: 50,
    backgroundColor: "#f07f08",
    borderColor: "#b05b05",
    borderWidth: 3,
    borderRadius: 10
});
buttonWrapper.add(invoiceButton);
invoiceButton.add(Ti.UI.createLabel({
    text: "invoices",
    color: "#fff",
    font: {
        fontSize: 15
    }
}));
invoiceButton.addEventListener("click", function(e){
    buttonClicked(1);
})

//invoice section
var invoiceSection = Ti.UI.createView({
    height: 0,
    left: 0,
    right: 0,
    top: 300
});
buttonWrapper.add(invoiceSection);

var decemberLabel = Ti.UI.createLabel({
    text: "December (unpaid)",
    left: 0,
    color: "#000",
    font: {
        fontSize: labelFontSize,
        fontWeight: "bold"
    }
});
invoiceSection.add(decemberLabel);

var novemberLabel = Ti.UI.createLabel({
    text: "November",
    left: 0,
    color: "#000",
    font: {
        fontSize: labelFontSize,
    }
});
invoiceSection.add(novemberLabel);

var oktoberLabel = Ti.UI.createLabel({
    text: "Oktober",
    left: 0,
    color: "#000",
    font: {
        fontSize: labelFontSize,
    }
});
invoiceSection.add(oktoberLabel);

//=== Ask button ===
var askButton = Ti.UI.createView({
    left: 0,
    right: 0,
    height: 50,
    top: 200,
    backgroundColor: "#f07f08",
    borderColor: "#b05b05",
    borderWidth: 3,
    borderRadius: 10
});
askButton.addEventListener("click", function(e){
    buttonClicked(2);
});
buttonWrapper.add(askButton);

askButton.add(Ti.UI.createLabel({
    text: "Ask question",
    color: "#fff",
    top: 400,
    font: {
        fontSize: 15
    }
}));


//ask section
var askSection = Ti.UI.createView({
    height: 0,
    left: 0,
    right: 0,
    layout: "vertical"
});
buttonWrapper.add(askSection);

var myTaxiLabel = Ti.UI.createLabel({
    text: "Where is my taxi",
    left: 0,
    color: "#000",
    font: {
        fontSize: labelFontSize,
    }
});
askSection.add(myTaxiLabel);

var faqLabel = Ti.UI.createLabel({
    text: "FAQ",
    left: 0,
    color: "#000",
    font: {
        fontSize: labelFontSize,
    }
});
askSection.add(faqLabel);

//=== Event handler ===
var expanded = [false, false, false];
var upValues = [orderButton.top, invoiceButton.top, askButton.top];
var sectionHeights = [120, 90, 90];
var sections = [orderSection, invoiceSection, askSection];
var buttons = [orderButton, invoiceButton, askButton];
var buttonClicked = function(index){
    var slideDown = !expanded[index];
    var slideDownCallback = function(){
        Ti.API.info("--slideDown callback called");
        //make room by repositioning buttons
        for(var k = 0; k < 3; k++){
            if(k > index){
                Ti.API.info("--moving button down");
                buttons[k].animate(Ti.UI.createAnimation({
                    top: buttons[k].top + sectionHeights[index]
                }));
            }
        }
        //expand section
        Ti.API.info("--unfolding section " + sectionHeights[index] + " " + JSON.stringify(sections[index]));
        sections[index].animate(Ti.UI.createAnimation({
            height: sectionHeights[index]
        }));
    }
    //first, hide all sections and reposition buttons. If necessary use callback on last animation to slide down section.
    Ti.API.info("--resetting elements");
    for(var i = 0; i < 3; i++){
        Ti.API.info("-resetting element " + i);
        sections[i].animate(Ti.UI.createAnimation({
            height: 0
        }));
        buttons[i].animate(Ti.UI.createAnimation({
            top: upValues[i]
        }, (slideDown && i == 2 ? slideDownCallback : null)));
    }
    expanded = [false, false, false];
    expanded[index] = true;
}

win.open();
