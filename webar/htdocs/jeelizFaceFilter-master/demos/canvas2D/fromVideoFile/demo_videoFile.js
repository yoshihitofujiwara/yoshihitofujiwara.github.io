var VIDEOELEMENT;

function main(){ //entry point
    VIDEOELEMENT=document.getElementById('myVideo');

    if (VIDEOELEMENT['currentTime'] && VIDEOELEMENT['videoWidth'] && VIDEOELEMENT['videoHeight']){
        start();
    } else {
        setTimeout(main, 100);
        VIDEOELEMENT['play']();
    }
}

function start(){ //launched when the video is loaded
    var CVD; //return of Canvas2DDisplay

    JEEFACEFILTERAPI.init({
        canvasId: 'jeeFaceFilterCanvas',
        videoSettings: {
            videoElement: VIDEOELEMENT
        },
        NNCpath: '../../../dist/', //root of NNC.json file
        callbackReady: function(errCode, spec){
            if (errCode){
                console.log('AN ERROR HAPPENS. SORRY BRO :( . ERR =', errCode);
                return;
            }

            console.log('INFO : JEEFACEFILTERAPI IS READY');
            CVD = JEEFACEFILTERAPI.Canvas2DDisplay(spec);
            CVD.ctx.strokeStyle='yellow';
        }, //end callbackReady()

        //called at each render iteration (drawing loop)
        callbackTrack: function(detectState){
            if (detectState.detected>0.6){
                //draw a border around the face
                var faceCoo=CVD.getCoordinates(detectState);
                CVD.ctx.clearRect(0,0,CVD.canvas.width, CVD.canvas.height);
                CVD.ctx.strokeRect(faceCoo.x, faceCoo.y, faceCoo.w, faceCoo.h);
                CVD.update_canvasTexture();
            }
            CVD.draw();
        } //end callbackTrack()
    }); //end JEEFACEFILTERAPI.init call
} //end main()