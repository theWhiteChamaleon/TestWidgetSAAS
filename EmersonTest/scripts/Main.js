// require.config({
//     paths: {
//         vue: "./EmersonTest/Dependencies/vue/vue"
//     }
// });


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
                let finalURL = "https://r1132101608061-usw1-space.3dexperience.3ds.com/enovia/resources/v1/modeler/dslc/changeaction/9FB5FEC3ED240000657938EC00002F87";

                let lt = "";
                let username = "c00004755994";
                let password = "Emerson123";

                fetch(ltURL, {
                    method: 'GET',
                    mode: 'no-cors', // Cross-Origin Resource Sharing (CORS) mode
                    credentials: 'include', // Include cookies in the request
                })
                    .then(response => {debugger; return response.json()})
                    .then(data => console.log(data))
                    .catch(error => console.error('Fetch error:', error));


                //  WAFData.proxifiedRequest(ltURL, {
                //     method: "Get",
                // 	//proxy:"passport",
                //     headers: {
                //          SecurityContext: "ctx::MCO Coordinator.MMH.GLOBAL",
                //         //'Access-Control-Allow-Origin': "*",
                //         //'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                //         //'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'

                //     },
                //     data: {
                //         // type: selectedType,
                //         // limit: ObjectLimit
                //     },
                //     timeout: 150000,
                //     type: "json",
                //     onComplete: function (dataResp, headerResp) {
                //         lt = dataResp.lt;

                //         if (lt) {
                //             postLoginURL += "?lt="+lt+"&username="+username+"&password="+password;
                //         WAFData.proxifiedRequest(postLoginURL, {
                //             method: "Post",
                //             redirect: 'manual',
                //             //proxy:"passport",
                //             headers: {
                //                  SecurityContext: "ctx::MCO Coordinator.MMH.GLOBAL",
                //                  'Content-Type': 'application/x-www-form-urlencoded',
                //                  'charset': 'UTF-8'
                //                 //'Access-Control-Allow-Origin': "*",
                //                 //'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                //                 //'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'

                //             },
                //             data: {
                //                 // type: selectedType,
                //                 // limit: ObjectLimit
                //             },
                //             timeout: 150000,
                //             //type: "json",
                //             onComplete: function (dataResp1, headerResp1) {

                //                 WAFData.proxifiedRequest(csrfURL, {
                //                     method: "Get",
                //                     //proxy:"passport",
                //                     headers: {
                //                         //  SecurityContext: "ctx::MCO Coordinator.MMH.GLOBAL",
                //                         //  'Content-Type': 'application/x-www-form-urlencoded',
                //                         //  'charset': 'UTF-8'
                //                         //'Access-Control-Allow-Origin': "*",
                //                         //'Access-Control-Allow-Methods': 'GET, POST, PATCH, PUT, DELETE, OPTIONS',
                //                         //'Access-Control-Allow-Headers': 'Origin, Content-Type, X-Auth-Token'

                //                     },
                //                     data: {
                //                         // type: selectedType,
                //                         // limit: ObjectLimit
                //                     },
                //                     timeout: 150000,
                //                     type: "json",
                //                     onComplete: function (dataResp2, headerResp2) {
                //                         //lt = dataResp.lt;
                //                         console.log("-----------success---------------");
                //                         debugger;
                //                         console.log("dataResp2",dataResp2,"headerResp2",headerResp2)

                //                     },
                //                     onFailure: function (error2, responseDOMString2, headerResp2) {
                //                         debugger;
                //                         console.log("-----------Error---------------");
                //                     }
                //                 });

                //             },
                //             onFailure: function (error1, responseDOMString1, headerResp1) {
                //                 debugger;
                //                 console.log("-----------Error---------------");
                //             }
                //         });
                //     } 

                //         //debugger;
                //         //console.log("dataResp",dataResp,"headerResp",headerResp)
                //     //     let tableData = `<div class="container"><div class="table-responsive"><table class="table table-striped table-hover">
                //     // <thead>`;
                //     //     let sampleData = dataResp.data[0];
                //     //     console.log("sampleData", sampleData);
                //     //     let headers = Object.keys(sampleData);
                //     //     for (header of headers) {
                //     //         if (header != "id")
                //     //             tableData += `<th>${header}</th>`;
                //     //     }
                //     //     tableData += `</thead><tbody>`;
                //     //     for (dataJson of dataResp.data) {

                //     //         let rowID = dataJson["id"];
                //     //         delete dataJson["id"];
                //     //         tableData += `<tr id=${rowID} onClick=widget.myWidget.rowOnClick(this.id)>`;
                //     //         for (value of Object.values(dataJson)) {
                //     //             tableData += `<td>${value}</td>`;
                //     //         }
                //     //         tableData += `</tr>`;
                //     //     }

                //     //     tableData += `</thead></table></div></div>`;
                //         //widget.body.innerHTML = tableData;
                //     },
                //     onFailure: function (error, responseDOMString, headerResp) {
                //         // if (typeof options.onFailure === "function") {
                //         //     options.onFailure(error, responseDOMString, headerResp, options.callbackData);
                //         // }
                //     }
                // }); 



            }

        }
        widget.myWidget = myWidget;
        return myWidget;
    });