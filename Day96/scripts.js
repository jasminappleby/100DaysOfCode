var promoCode = '';
var bg1 = 'https://jennamolby.com/scratch-and-win/images/400.png';
var bg2 = 'https://jennamolby.com/scratch-and-win/images/500.png';
var bg3 = 'https://jennamolby.com/scratch-and-win/images/sorry.png';
var bgArray= [ bg1, bg2, bg3 ],

selectBG = bgArray[Math.floor(Math.random() * bgArray.length)];

if (selectBG == bg1) {
    promoCode = 'SCRATCH400';
    }
        else if (selectBG == bg2)
    {
    promoCode = 'SCRATCH500';
    } 
    if (selectBG == bg3) 
    {
    var promoCode = '';
}

$('#promo').wScratchPad({
    size: 70,    
    bg:  selectBG,
    realtime: true,
    fg: 'https://jennamolby.com/scratch-and-win/images/overlay.png',
    'cursor': 'url("https://jennamolby.com/scratch-and-win/images/coin1.png") 5 5, default',
    
    scratchMove: function (e, percent) {
        if ((percent > 50) && (promoCode != '')) {
            $('.promo-container').show();
            $('body').removeClass('not-selectable');
            $('.promo-code').html('Your code is: ' + promoCode);
        }
    }
});