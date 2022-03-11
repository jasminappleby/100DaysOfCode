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

        mounted() {
        this.cardNumberTemp = this.otherCardMask;
        document.getElementById("cardNumber").focus();
        },

        computed: {

        getCardType () {
            let number = this.cardNumber;
            let re = new RegExp("^4");
            if (number.match(re) != null) return "visa";
    
            re = new RegExp("^(34|37)");
            if (number.match(re) != null) return "amex";
    
            re = new RegExp("^5[1-5]");
            if (number.match(re) != null) return "mastercard";
    
            re = new RegExp("^6011");
            if (number.match(re) != null) return "discover";
            
            re = new RegExp('^9792')
            if (number.match(re) != null) return 'troy'
    
            return "visa"; 
        },

        
    }
});
  
  