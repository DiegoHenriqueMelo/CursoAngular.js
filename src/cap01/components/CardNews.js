class CardNews extends HTMLElement {
  constructor() {
    super();
    const shadow = this.attachShadow({ mode: "open" });
    shadow.appendChild(this.build());
    shadow.appendChild(this.styles());
  }

  build() {
    const componentRoot = document.createElement("div");

    componentRoot.setAttribute("class", "card");

    const cardLeft = document.createElement("div");
    cardLeft.setAttribute("class", "left");

    const span = document.createElement("span");
    span.textContent = `By ` + (this.getAttribute("autor") || "Anonimo");
    const h1 = document.createElement("h1");
    h1.textContent = this.getAttribute("titulo");
    const p = document.createElement("p");
    p.textContent = this.getAttribute("description");

    cardLeft.appendChild(span);
    cardLeft.appendChild(h1);
    cardLeft.appendChild(p);

    const cardRight = document.createElement("div");
    cardRight.setAttribute("class", "right");

    const img = document.createElement("img");
    img.setAttribute("src", "../../../public/cap01/assets/darthVader.jpg");
    cardRight.appendChild(img);

    componentRoot.appendChild(cardLeft);
    componentRoot.appendChild(cardRight);

    return componentRoot;
  }
  styles() {
    const style = document.createElement("style");

    style.textContent = `
img{
    width: 250px;
    height: 150px;
}
.card{
    width: 80%;
    display: flex;
    flex-flow: row nowrap;
    align-items: center;
    justify-content: space-between;

    border-radius: 5px;

    padding: 10px;

    background-color:white;
}
.card:hover{
    box-shadow: 2px 2px 15px lightgray;
    transition: .2s
}
.left{
    display: flex;
    flex-flow: column nowrap;
    justify-content: center;
}
h1{
    font-style: 24px;
}
p{
    color: gray;
}
span{
    font-weight: 400;
}
`;

    return style;
  }
}

customElements.define("card-news", CardNews);
