
define("EmersonTest/scripts/Main", [
    "DS/PlatformAPI/PlatformAPI",
    "DS/WAFData/WAFData",
    "DS/DataDragAndDrop/DataDragAndDrop"],
    function (PlatformAPI, WAFData, DataDragAndDrop) {

        var myWidget = {
            ObjectId: "",
            name: "Emerson",

            onLoad: function () {
                widget.body.innerHTML = "Widget Training";
                myWidget.getData();

            },
            updateWidget: function () {
                alert("In updateWidget");
                myWidget.getData();
            },
            getData: function () {

                console.log("-------Hello Test-----------")
                let ltURL = "https://r1132101608061-eu1.iam.3dexperience.3ds.com/login?action=get_auth_params";
                let postLoginURL = "https://r1132101608061-eu1.iam.3dexperience.3ds.com/login";
                let csrfURL = "https://r1132101608061-usw1-space.3dexperience.3ds.com/enovia/resources/v1/application/CSRF?tenant=R1132101608061"
                let finalURL = "https://r1132101608061-usw1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslc/changeaction/search";

                let lt = "";
                let username = "c00004755994";
                let password = "Emerson123";
                let bodyhtml = "";
                bodyhtml += "<div class='grid-container' style='display: grid;grid-template-columns: 1fr 1fr 1fr 1fr;grid-gap: 1.5rem;margin-left: 50px;overflow: auto;height: 100vh;margin-right: 20px;'>"
                bodyhtml += "<div style='grid-column: span 4;display: flex;justify-content: center;align-items: center;background-color: lightblue;grid-row: span 4;font-size: large;font-weight: bold;'>Change Action List</div>";

                WAFData.proxifiedRequest(ltURL, {
                    method: "Get",
                    headers: {
                    },
                    data: {
                    },
                    timeout: 150000,
                    type: "json",
                    onComplete: function (dataResp, headerResp) {
                        lt = dataResp.lt;

                        if (lt) {
                            postLoginURL += "?lt=" + lt + "&username=" + username + "&password=" + password;
                            WAFData.proxifiedRequest(postLoginURL, {
                                method: "Post",
                                redirect: 'manual',
                                //proxy:"passport",
                                headers: {
                                    'Content-Type': 'application/x-www-form-urlencoded',
                                    'charset': 'UTF-8'
                                },
                                data: {
                                },
                                timeout: 150000,
                                //type: "json",
                                onComplete: function (dataResp1, headerResp1) {

                                    WAFData.proxifiedRequest(csrfURL, {
                                        method: "Get",
                                        headers: {

                                        },
                                        data: {

                                        },
                                        timeout: 150000,
                                        type: "json",
                                        onComplete: function (dataResp2, headerResp2) {

                                            const csrfToken = dataResp2.csrf.name;
                                            const csrfValue = dataResp2.csrf.value;
                                            const securityContextHeader = 'SecurityContext';
                                            const securityContextValue = encodeURIComponent("ctx::VPLMProjectLeader.Company Name.Actuation Technologies")

                                            const myHeaders = new Object();
                                            myHeaders[csrfToken] = csrfValue;
                                            myHeaders[securityContextHeader] = securityContextValue;

                                            WAFData.authenticatedRequest(finalURL, {
                                                method: "Get",
                                                headers: myHeaders,
                                                data: {
                                                },
                                                timeout: 150000,
                                                type: "json",
                                                onComplete: function (dataResp3, headerResp3) {
                                                    let changeActionList = dataResp3.changeAction;
                                                    for (let changeActionCount = 0;  changeActionCount < changeActionList.length; changeActionCount++) {
                                                        changeAction = changeActionList[changeActionCount];
                                                        let source = changeAction.source;
                                                        let relativePathUrl = changeAction.relativePath;


                                                        let caPropURL = source + relativePathUrl;

                                                        WAFData.authenticatedRequest(caPropURL, {
                                                            method: "Get",
                                                            headers: myHeaders,
                                                            data: {

                                                            },
                                                            timeout: 150000,
                                                            type: "json",
                                                            onComplete: function (dataResp4, headerResp4) {
                                                                let caTitle = dataResp4.title;
                                                                bodyhtml += "<div class='grid-items' style='font-size: small;background-color: #FFFBDF;padding: 10px;'>";
                                                                bodyhtml += "<div><b>Title :</b> "+caTitle+"</div>";
                                                                bodyhtml += "<div><b>Name :</b> "+dataResp4.name+"</div>";
                                                                bodyhtml += "<div><b>Owner :</b> "+dataResp4.owner+"</div>";
                                                                bodyhtml += "<div><b>Collab Space :</b> "+dataResp4.collabSpace+"</div>";
                                                                bodyhtml += "</div>";
                                                                
                                                                if (changeActionCount == changeActionList.length -1) {
                                                                    bodyhtml += "</div>"
                                                                    widget.body.innerHTML = bodyhtml;
                                                                }

                                                            },
                                                            onFailure: function (error2, responseDOMString2, headerResp2) {
                                                                debugger;
                                                            }
                                                        });
                                                        
                                                    }



                                                },
                                                onFailure: function (error2, responseDOMString2, headerResp2) {
                                                    debugger;
                                                 
                                                }
                                            });
                                        },
                                        onFailure: function (error2, responseDOMString2, headerResp2) {
                                            debugger;
                                            
                                        }
                                    });

                                },
                                onFailure: function (error1, responseDOMString1, headerResp1) {
                                    debugger;
                                    
                                }
                            });
                        }

                    },
                    onFailure: function (error, responseDOMString, headerResp) {
                    }
                });

            }

        }
        widget.myWidget = myWidget;
        return myWidget;
    });