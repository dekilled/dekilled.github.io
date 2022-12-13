// STYLESHEETS
let styles = {
    "style": "css/styles.css",
    "color": "css/color_dark.css",
    "transition":"css/transitions.css"
}

class inputField extends HTMLElement{
    constructor(){
        super();
        var template = document.createElement("template");
        
        //<link rel="stylesheet" href=`+styles.color+`>
        	template.innerHTML =`<link rel="stylesheet" href=`+styles.style+`>
            <link rel="stylesheet" href=`+styles.color+`>
            <link rel="stylesheet" href=`+styles.transition+`>
            <div class="inputContainer">
                <label></label>
                <input placeholder="text" value=""/>
            </div>`;
        
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback(){
        // TYPES:: "text","number",,"tel","email","password"
        var input = this.getAttribute("type");
        var el = this.shadowRoot.querySelector("input");
        var elActive = document.activeElement;
        var elementActive;
        //var reg = new new RegExp('^\([1-9]{2}\) (?:[2-8]|9[1-9])[0-9]{3}\-[0-9]{4}$');
        var maxLength;
        
        el.addEventListener("focus", function(){
            elementActive= elActive.querySelector("app-inputfield").shadowRoot.querySelector("input");
            this.value="";
        });
        el.addEventListener("blur", function(){
            const textoAtual = this.value;
            const isCelular = textoAtual.length === 11 || textoAtual.length === 10;
            let textoAjustado;
                if(isCelular) {
                    const parte1 = textoAtual.slice(0,2);
                    const parte2 = textoAtual.slice(2,7);
                    const parte3 = textoAtual.slice(7,11);
                    textoAjustado = `(${parte1}) ${parte2} ${parte3}`
                } else {
                 // faz alguma coisa
                }
            this.value = textoAjustado;
        });
    }
    
    static get observedAttributes() {
        return ["type","placeholder","value","label","style.margin","style.padding","style.labelalign","style.labelcolor","style.labelfont","style.width","style.height","style.background","style.textColor","style.border","style.bordertype","style.bordercolor","style.radius","style.textalign",];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        //console.log('Custom square element attributes changed.');
        if(name==="type"){
            this.shadowRoot.querySelector("input").setAttribute("type", newValue);
            
            if(this.shadowRoot.querySelector("input").type==="text")
                this.shadowRoot.querySelector("input").setAttribute("placeholder", 'type your text');
            else if(this.shadowRoot.querySelector("input").type==="number")
                this.shadowRoot.querySelector("input").setAttribute("placeholder", '0');
            else if(this.shadowRoot.querySelector("input").type==="email")
                this.shadowRoot.querySelector("input").setAttribute("placeholder", 'email@servidor.com');
            else if(this.shadowRoot.querySelector("input").type==="tel")
                this.shadowRoot.querySelector("input").setAttribute("placeholder", '(00) 00000-0000');
                
        }else if(name==="placeholder"){
            this.shadowRoot.querySelector("input").setAttribute("placeholder", newValue);
        }else if(name==="value"){
            this.shadowRoot.querySelector("input").setAttribute("value", newValue);
        }else if(name==="label"){
            this.shadowRoot.querySelector("label").innerHTML= newValue;
            this.shadowRoot.querySelector("label").style.margin="0px 0px 4px 0px";
            this.shadowRoot.querySelector("label").style.padding="2px 10px";
        }
        //STYLE PROPERTIES
        else if(name==="style.labelalign"){
            this.shadowRoot.querySelector("label").style.textAlign=newValue;
        }else if(name==="style.labelcolor"){
            this.shadowRoot.querySelector("label").style.color=newValue;
        }else if(name==="style.labelfont"){
            this.shadowRoot.querySelector("label").style.fontFamily=newValue;
        }else if(name==="style.width"){
            this.shadowRoot.querySelector("input").style.width=newValue;
        }else if(name==="style.padding"){
            this.shadowRoot.querySelector(".inputContainer").style.padding=newValue;
        }else if(name==="style.margin"){
            this.shadowRoot.querySelector(".inputContainer").style.margin=newValue;
        }else if(name==="style.height"){
            this.shadowRoot.querySelector("input").style.height=newValue;
        }else if(name==="style.background"){
            this.shadowRoot.querySelector("input").style.background=newValue;
        }else if(name==="style.textColor"){
            this.shadowRoot.querySelector("input").style.color=newValue;
        }else if(name==="style.border"){
            this.shadowRoot.querySelector("input").style.border=newValue;
        }else if(name==="style.borderType"){
            this.shadowRoot.querySelector("input").style.borderStyle=newValue;
        }else if(name==="style.borderColor"){
            this.shadowRoot.querySelector("input").style.borderColor=newValue;
        }else if(name==="style.radius"){
            this.shadowRoot.querySelector("input").style.borderRadius=newValue;
        }else if(name==="style.textalign"){
            this.shadowRoot.querySelector("input").style.textAlign=newValue;
        }
        
    }
    
}
customElements.define("app-inputfield",inputField);

class inputButtton extends HTMLElement{
    constructor(){
        super();
        var template = document.createElement("template");
        	template.innerHTML =`<link rel="stylesheet" href=`+styles.style+`>
            <link rel="stylesheet" href=`+styles.color+`>
            <link rel="stylesheet" href=`+styles.transition+`>
            <input type="button" value=""/>`;
        
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback(){

        if(this.parentElement.getAttribute("grid-align")){
            this.shadowRoot.querySelector("input").className="grid-item";
        }
    }
    
    
    
    static get observedAttributes() {
        return ["value","label","style.labelalign","style.margin","style.labelcolor","style.labelfont","style.width","style.height","style.background","style.textColor","style.border","style.bordertype","style.bordercolor","style.radius","style.textalign",];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        //console.log('Custom square element attributes changed.');
        /*if(name==="type"){
            this.shadowRoot.querySelector("input").setAttribute("type", newValue);
            
            if(this.shadowRoot.querySelector("input").type==="text")
                this.shadowRoot.querySelector("input").setAttribute("placeholder", 'type your text');
            else if(this.shadowRoot.querySelector("input").type==="number")
                this.shadowRoot.querySelector("input").setAttribute("placeholder", '0');
            else if(this.shadowRoot.querySelector("input").type==="email")
                this.shadowRoot.querySelector("input").setAttribute("placeholder", 'email@servidor.com');
            else if(this.shadowRoot.querySelector("input").type==="tel")
                this.shadowRoot.querySelector("input").setAttribute("placeholder", '(00) 00000-0000');
                
        }else 
        if(name==="placeholder"){
            this.shadowRoot.querySelector("input").setAttribute("placeholder", newValue);
        }else*/ 
        
        if(name==="value"){
            this.shadowRoot.querySelector("input").setAttribute("value", newValue);
        }else if(name==="label"){
            this.shadowRoot.querySelector("label").innerHTML= newValue;
            this.shadowRoot.querySelector("label").style.margin="0px 0px 4px 0px";
            this.shadowRoot.querySelector("label").style.padding="2px 10px";
        }
        //STYLE PROPERTIES
        else if(name==="style.labelalign"){
            this.shadowRoot.querySelector("label").style.textAlign=newValue;
        }else if(name==="style.labelcolor"){
            this.shadowRoot.querySelector("label").style.color=newValue;
        }else if(name==="style.labelfont"){
            this.shadowRoot.querySelector("label").style.fontFamily=newValue;
        }else if(name==="style.width"){
            this.shadowRoot.querySelector("input").style.width=newValue;
        }else if(name==="style.margin"){
            this.shadowRoot.querySelector("input").style.margin=newValue;
        }else if(name==="style.height"){
            this.shadowRoot.querySelector("input").style.height=newValue;
        }else if(name==="style.background"){
            this.shadowRoot.querySelector("input").style.backgroundColor=newValue;
        }else if(name==="style.textColor"){
            this.shadowRoot.querySelector("input").style.color=newValue;
        }else if(name==="style.border"){
            this.shadowRoot.querySelector("input").style.border=newValue;
        }else if(name==="style.borderType"){
            this.shadowRoot.querySelector("input").style.borderStyle=newValue;
        }else if(name==="style.borderColor"){
            this.shadowRoot.querySelector("input").style.borderColor=newValue;
        }else if(name==="style.radius"){
            this.shadowRoot.querySelector("input").style.borderRadius=newValue;
        }else if(name==="style.textalign"){
            this.shadowRoot.querySelector("input").style.textAlign=newValue;
        }
        
    }
    
}
customElements.define("app-button",inputButtton);

class inputSelect extends HTMLElement{
    constructor(){
        super();
        var template = document.createElement("template");
        	template.innerHTML = `<link rel="stylesheet" href=`+styles.style+`>
            <link rel="stylesheet" href=`+styles.color+`>
            <link rel="stylesheet" href=`+styles.transition+`>
            <div class="inputContainer">
                <label></label>
                <div class="selection-box">
                    <div class="selected"></div>
                    <div class="dropdown_container" style="opacity:0;top:100%;">
                        <div class="dropdown" style="opacity:0;bottom:-80px;">
                            <h3>Selecione uma opçao</h3>
                            <slot></slot>
                        </div>
                    </div>
                </div>
            </div>`;
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback(){
        const defaultValue= this.getAttribute("defaultvalue");
        let selected = this.getAttribute("selectedvalue");
        let elementField = this;
        let input = this.shadowRoot.querySelector(".selected");
        let container = this.shadowRoot.querySelector(".selection-box").children[1];
        let itemList = container.children[0];
        
        
        if(container.style.opacity==="0"){
            //itemList.style.transition = "250ms";
            itemList.style.bottom = -80+"px";
                //-itemList.clientHeight-80+"px";
        }
        
        if(selected===""){
            elementField.setAttribute("selectedvalue",defaultValue);
        }
        
        input.addEventListener("click",function(){
           //console.log("container hide");
            
            container.style.top="0%";     
            container.style.transition="0ms";  
            setTimeout(function(){
                  container.style.opacity="1";     
                  container.style.transition="150ms";     
            },100);
            
            itemList.style.bottom = "0px";
            itemList.style.opacity = "1";
            //container.style.animationDuration="500ms";
            //console.log(container);
        });
        container.addEventListener("click",function(){
            itemList.style.bottom = -80+"px";
            itemList.style.opacity = "0";
                //-itemList.clientHeight-80+"px";
            container.style.opacity="0";     
            container.style.transition="200ms";
            setTimeout(function(){
                container.style.top="100%";
            },200);
            
            //console.log(container);
        });
        
            
    }
    
    static get observedAttributes() {
        return ["value","label","style.labelalign","style.margin","style.padding","style.labelcolor","style.labelfont","style.width","style.height","style.background","style.textColor","style.border","style.bordertype","style.bordercolor","style.radius","style.textalign","selectedvalue","defaultvalue"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        const defaultValue= this.getAttribute("defaultvalue");
        
        /*if(name==="value"){
            this.shadowRoot.querySelector(".select").setAttribute("value", newValue);
        }*/
        //SELECTED ITEMS
        if(name==="selectedvalue"){
            if(this.getAttribute("selectedvalue")===""){
                //alert("not empty");
                this.shadowRoot.querySelector(".selected").innerHTML = defaultValue;
            }else{
                this.shadowRoot.querySelector(".selected").innerHTML = newValue;
            }
        }/*else if(name==="defaultvalue"){
            
        }
        else if(name==="label"){
            this.shadowRoot.querySelector("label").innerHTML= newValue;
            this.shadowRoot.querySelector("label").style.margin="0px 0px 4px 0px";
            this.shadowRoot.querySelector("label").style.padding="2px 10px";
        }*/
        //STYLE PROPERTIES
        else if(name==="style.labelalign"){
            this.shadowRoot.querySelector("label").style.textAlign=newValue;
        }else if(name==="style.labelcolor"){
            this.shadowRoot.querySelector("label").style.color=newValue;
        }else if(name==="style.labelfont"){
            this.shadowRoot.querySelector("label").style.fontFamily=newValue;
        }else if(name==="style.padding"){
            this.shadowRoot.querySelector(".inputContainer").style.padding=newValue;
        }else if(name==="style.margin"){
            this.shadowRoot.querySelector(".inputContainer").style.margin=newValue;
        }else if(name==="style.width"){
            this.shadowRoot.querySelector(".selection-box").style.width=newValue;
        }else if(name==="style.height"){
            this.shadowRoot.querySelector(".selection-box").style.height=newValue;
        }else if(name==="style.background"){
            this.shadowRoot.querySelector(".selection-box").style.background=newValue;
        }else if(name==="style.textColor"){
            this.shadowRoot.querySelector(".selection-box").style.color=newValue;
        }else if(name==="style.border"){
            this.shadowRoot.querySelector(".selection-box").style.border=newValue;
        }else if(name==="style.borderType"){
            this.shadowRoot.querySelector(".selection-box").style.borderStyle=newValue;
        }else if(name==="style.borderColor"){
            this.shadowRoot.querySelector(".selection-box").style.borderColor=newValue;
        }else if(name==="style.radius"){
            this.shadowRoot.querySelector(".selection-box").style.borderRadius=newValue;
        }else if(name==="style.textalign"){
            this.shadowRoot.querySelector(".selection-box").style.textAlign=newValue;
        }
        
    }
}
customElements.define("app-dropdown",inputSelect);

class selectOption extends HTMLElement{
    constructor(){
        super();
        var template = document.createElement("template");
        	template.innerHTML = `<link rel="stylesheet" href=`+styles.style+`>
            <link rel="stylesheet" href=`+styles.color+`>
            <link rel="stylesheet" href=`+styles.transition+`>
            <div class="option">
            </div>`;
        
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback(){
        let elementField = this;
        let input = this.shadowRoot.querySelector(".option");
        let container = this.parentElement.shadowRoot.querySelector(".selection-box").children[1];
        //console.log(container);
        let itemList = container.children[0];
        //console.log(itemList.children[0].children.length);
        let parent = this.parentElement;
        const defaultValue = parent.getAttribute("defaultvalue");

        this.addEventListener("click",function(){
            if(parent.getAttribute("selectedvalue")!==""){
               parent.setAttribute("selectedvalue", this.getAttribute("value"));
            }
            itemList.style.bottom = -80+"px";
            itemList.style.opacity = "0";
            container.style.opacity="0";     
            container.style.transition="200ms";
            setTimeout(function(){
                container.style.top="100%";
            },200);
        });
        container.addEventListener("click", function(){
            itemList.style.bottom = -80+"px";
            itemList.style.opacity = "0";
            container.style.opacity="0";     
            container.style.transition="200ms";
            setTimeout(function(){
                container.style.top="100%";
            },200);
        });
    }
    
    static get observedAttributes() {
        return ["value"];
    }
    
    attributeChangedCallback(name, oldValue, newValue) {
        
        if(name==="value"){
            this.shadowRoot.querySelector(".option").innerHTML = newValue;
        }
    }
}
customElements.define("dd-option",selectOption);

class boxLayout extends HTMLElement{
    constructor(){
        super();
        var template = document.createElement("template");
        template.innerHTML =`<link rel="stylesheet" href=`+styles.style+`>
            <link rel="stylesheet" href=`+styles.color+`>
            <link rel="stylesheet" href=`+styles.transition+`>
        <div class="boxLayout">
            <label></label>
            <div>
                <slot></slot>
            </div>
        </div>`;//console.log(template);
        this.attachShadow({mode:"open"});
        this.shadowRoot.appendChild(template.content.cloneNode(true));
    }
    
    connectedCallback(){
       
            
    }
    
    static get observedAttributes() {
        return ["value","label","layout", "pos.type","pos.value","pos.top","pos.bottom","pos.left","pos.right","grid-columns","grid-colsgap","grid-rows","grid-rowsgap","grid-align","style.padding","style.margin","style.labelalign","style.labelcolor","style.labelfont","style.width","style.height","style.background","style.textColor","style.border","style.radius","radius.righttop","radius.rightbottom","radius.lefttop","radius.leftbottom","style.bordertype","style.bordercolor","style.textalign","selectedvalue","defaultvalue"];
    }
    attributeChangedCallback(name, oldValue, newValue) {
        const defaultValue= this.getAttribute("defaultvalue");
        const el = this.shadowRoot.querySelector(".boxLayout");
        
        /*if(name==="value"){
            this.shadowRoot.querySelector(".select").setAttribute("value", newValue);
        }*/
        //SELECTED ITEMS
        if(name==="selectedvalue"){
            if(this.getAttribute("selectedvalue")===""){
                //alert("not empty");
                this.shadowRoot.querySelector(".selected").innerHTML = defaultValue;
            }else{
                this.shadowRoot.querySelector(".selected").innerHTML = newValue;
            }
        }else if(name==="label"){
            if(this.getAttribute("label")!==""){
                this.shadowRoot.querySelector("label").innerHTML= newValue;
                this.shadowRoot.querySelector("label").style.margin="0px 0px 4px 0px";
                this.shadowRoot.querySelector("label").style.padding="2px 10px";
            }else{
                this.shadowRoot.querySelector("label").innerHTML= "";
                this.shadowRoot.querySelector("label").style.margin="0px";
                this.shadowRoot.querySelector("label").style.padding="0px";
            }
        }else if(name==="grid-columns"){
             el.children[1].style.gridTemplateColumns=newValue;
        }else if(name==="grid-rows"){
             el.children[1].style.gridTemplateRows=newValue;
        }else if(name==="grid-colsgap"){
             el.children[1].style.gridColumnGap=newValue;
        }else if(name==="grid-rowsgap"){
             el.children[1].style.gridRowGap=newValue;
        }else if(name==="grid-align"){
             //el.children[1].style.alignItems=newValue;
             el.children[1].style.justifyItems=newValue;
            console.log("botoes "+el.children[1].children[0]);
        }
        //STYLE POSITIONING
        else if(name==="pos.type"){
            el.style.position=newValue;
            
        }else if(name==="pos.top"){
            el.style.top=newValue;
        }else if(name==="pos.left"){
            el.style.left=newValue;
        }else if(name==="pos.bottom"){
            el.style.bottom=newValue;
        }else if(name==="pos.right"){
            el.style.right=newValue;
        }
        //STYLE PROPERTIES
        else if(name==="style.margin"){
            el.style.padding=newValue;
        }else if(name==="style.padding"){
            el.style.padding=newValue;
        }else if(name==="style.labelalign"){
            this.shadowRoot.querySelector("label").style.textAlign=newValue;
        }else if(name==="style.labelcolor"){
            this.shadowRoot.querySelector("label").style.color=newValue;
        }else if(name==="style.labelfont"){
            this.shadowRoot.querySelector("label").style.fontFamily=newValue;
        }else if(name==="style.width"){
            el.style.width=newValue;
        }else if(name==="style.height"){
            el.style.height=newValue;
        }else if(name==="style.background"){
            el.style.background=newValue;
        }else if(name==="style.textColor"){
            el.style.color=newValue;
        }else if(name==="style.border"){
            el.style.border=newValue;
        }else if(name==="style.borderType"){
            el.style.borderStyle=newValue;
        }else if(name==="style.borderColor"){
            el.style.borderColor=newValue;
        }else if(name==="style.radius"){
            el.style.borderRadius=newValue;
        }else if(name==="radius.righttop"){
            el.style.borderTopRightRadius=newValue;
        }else if(name==="radius.rightbottom"){
            el.style.borderBottomRightRadius=newValue;
        }else if(name==="radius.lefttop"){
            el.style.borderTopLeftRadius=newValue;
        }else if(name==="radius.leftbottom"){
            el.style.borderBottomLeftRadius=newValue;
        }else if(name==="style.textalign"){
            el.style.textAlign=newValue;
        }
        
        
        
    }
}
customElements.define("box-layout",boxLayout);
