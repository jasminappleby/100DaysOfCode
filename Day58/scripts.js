new Vue({
        el: "#app",
        data() {
            return {
                currentCardBackground: Math.floor(Math.random()* 25 + 1), 
                cardName: "",
                cardNumber: "",
                cardMonth: "",
                cardYear: "",
                cardCvv: "",
                minCardYear: new Date().getFullYear(),
                amexCardMask: "#### ###### #####",
                otherCardMask: "#### #### #### ####",
                cardNumberTemp: "",
                isCardFlipped: false,
                focusElementStyle: null,
                isInputFocused: false
            };
        },

        
});
  
  