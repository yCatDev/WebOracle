

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
function RandomInt(min: number, max: number){
    return min+Math.round(Math.random()*max)
}
class AcientText
{
    private element: Element;
    trueText: string;
    ancientText: string = "";

    constructor(element: Element)
    {
        this.element = element;
        const tmp = this.trueText = element.textContent;
        for (let i = 0; i < tmp.length; i++)
        {
            this.ancientText+=characters[RandomInt(0,tmp.length-1)];
        }
        element.textContent = this.ancientText;
        element.classList.add("loaded");
    }

    public show(textToo: boolean){
        if (textToo)
        {
            this.element.textContent = this.trueText;
            this.element.classList.add("selectedText");
            this.element.id = "there";
            console.log(document.documentElement.clientHeight);
            EPPZScrollTo.scrollVerticalToElementById("there", document.documentElement.clientHeight/2);
        }
        this.element.classList.add("showedText");
    }

}

window.onload = () =>
{
    let text: AcientText[] = [];
    const elements = document.getElementsByClassName("predictionText");
    for (let i = 5; i < elements.length; i++)
    {
        text.push(new AcientText(elements[i]));
    }

    let button = document.getElementById("startButton");
    button.addEventListener("click", () => {

        let s = RandomInt(0, text.length);
        for (let i = 0; i < text.length; i++){
            text[i].show(i==s);
        }
        button.style.display = "block";
    })
    EPPZScrollTo.scrollVerticalToElementById("top", document.documentElement.clientHeight/2);
}



