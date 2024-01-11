//*-------- Show Interstitial --------*//
function ShowAdsInter() {
    console.log("ShowAdsInter-------------------");
    //  document.dispatchEvent(new Event("pause"));
    //   cc.director.pause();


    ysdk.adv.showFullscreenAdv({
        callbacks: {
            onClose: function(wasShown) {
                console.log('-------ShowAdsInter :was shown---------');
                // document.dispatchEvent(new Event("resume"));
                //  cc.director.resume();
            },
            onError: function(error) {
                console.log('--------ShowAdsInter :on Error----------');
                //  document.dispatchEvent(new Event("resume"));
                // cc.director.resume(); 
            }
        }
    })

}

function ShowAdsInterStart() {
    console.log("ShowAdsInterStart-------------------");



    ysdk.adv.showFullscreenAdv({
        callbacks: {
            onClose: function(wasShown) {
                console.log('-------ShowAdsInterStart :was shown---------');

            },
            onError: function(error) {
                console.log('--------ShowAdsInterStart :on Error----------');

            }
        }
    })

}

//*-------- Show Rewarded --------*//


function ShowAdsReward() {

    console.log("ShowAdsReward-------------------");


    ysdk.adv.showRewardedVideo({
        callbacks: {
            onOpen: () => {
                console.log('Video ad open.');
            },
            onRewarded: () => {
                console.log('Rewarded!');
            },
            onClose: () => {
                console.log('Video ad closed.');

                // MainGame.api_GameContinue(); 
                // MainGame.getReward(true);
            },
            onError: (e) => {
                console.log('Error while open video ad:', e);
                // MainGame.api_GameContinue(); 
                //MainGame.getReward(false);

            }
        }
    })


}



//*-------- Show Banner --------*//

function ShowAdsBanner() {

    ysdk.adv.getBannerAdvStatus().then(({
        stickyAdvIsShowing,
        reason
    }) => {
        if (stickyAdvIsShowing) {
            console.log('--------ShowAdsBanner : Banner Shown');
            // ad is shown             } else if(reason) {
            // ad isn't shown                 console.log(reason)
        } else {
            ysdk.adv.showBannerAdv()
        }
    })


}







YaGames
    .init()
    .then(ysdk => {
        console.log('Yandex SDK initialized');
        window.ysdk = ysdk;
    });

// call banner and Inter start
setTimeout(function() {

    ShowAdsBanner();
}, 5 * 1000);