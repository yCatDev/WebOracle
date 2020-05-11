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
            this.element.classList.add("selectedText");
            this.element.id = "there";
            console.log(document.documentElement.clientHeight);
            EPPZScrollTo.scrollVerticalToElementById("there", document.documentElement.clientHeight / 2);
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
    var clicked = false;
    var button = document.getElementById("startButton");
    button.addEventListener("click", function () {
        if (clicked)
            return;
        var s = RandomInt(0, text.length);
        for (var i = 0; i < text.length; i++) {
            text[i].show(i == s);
        }
        clicked = true;
    });
    EPPZScrollTo.scrollVerticalToElementById("top", document.documentElement.clientHeight / 2);
};
//# sourceMappingURL=main.js.map