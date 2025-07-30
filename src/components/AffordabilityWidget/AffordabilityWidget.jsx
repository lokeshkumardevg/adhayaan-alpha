import React, { useEffect, useState } from "react";

function AffordabilityWidget({...props}) {
    const [scriptLoaded, setScriptLoaded] = useState(false);

    const {transactionid, amount} = props

    function loadWidget() {
        
        // const key = `TESTKEY`
        // const amount = `6000`
        // const mid = `n6sTWmMhyXU1q0gG3yuWtwTTi7DOXwvT`

        const widgetConfig = { key:transactionid, amount,  };

        console.log(`widgetConfig =>`,widgetConfig)
        if (window.payuAffordability) {
            console.log("Initializing payuAffordability with config:", widgetConfig);
            window.payuAffordability.init(widgetConfig);
        } else {
            console.error("payuAffordability is not defined");
        }
    }

    function appendScript() {
        let myScript = document.getElementById("payu-affordability-widget");
        if (!myScript) {
            myScript = document.createElement('script');
            myScript.setAttribute('src', "https://jssdk.payu.in/widget/affordability-widget.min.js");
            myScript.id = "payu-affordability-widget";
            myScript.defer = true;
            myScript.addEventListener('load', () => {
                console.log("Script loaded successfully");
                setScriptLoaded(true);
            });
            myScript.addEventListener('error', () => {
                console.error("Failed to load the script");
            });
            document.body.appendChild(myScript);
        } else {
            // Script already exists, assume it's loaded
            setScriptLoaded(true);
        }
    }

    useEffect(() => {
        appendScript();
    }, []);

    useEffect(() => {
        if (scriptLoaded) {
            loadWidget();
        }
    }, [scriptLoaded]);

    return (
        <div id="payuWidget" />
    );
}

export default AffordabilityWidget;
