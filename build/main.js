var characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function RandomInt(min, max) {
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
var AcientText = /** @class */ (function () {
    function AcientText(element) {
        this.ancientText = "";
        this.element = element;
        var tmp = this.trueText = element.textContent;
        console.log("Text is " + tmp);
        for (var i = 0; i < tmp.length; i++) {
            this.ancientText += characters[RandomInt(0, tmp.length - 1)];
        }
        element.textContent = this.ancientText;
    }
    AcientText.prototype.show = function (textToo) {
        if (textToo) {
            this.element.textContent = this.trueText;
            this.element.classList.add("selected");
            this.element.id = "there";
            EPPZScrollTo.scrollVerticalToElementById("there", 0);
        }
        this.element.classList.add("showedText");
    };
    return AcientText;
}());
window.onload = function () {
    var text = [];
    var elements = document.getElementsByClassName("predictionText");
    for (var i = 0; i < elements.length; i++) {
        text.push(new AcientText(elements[i]));
    }
    var button = document.getElementById("startButton");
    button.addEventListener("click", function () {
        var s = RandomInt(0, text.length);
        for (var i = 0; i < text.length; i++) {
            text[i].show(i == s);
        }
    });
};
//# sourceMappingURL=main.js.map