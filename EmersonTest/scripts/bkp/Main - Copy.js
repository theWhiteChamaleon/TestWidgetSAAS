// require.config({
//     paths: {
//         vue: "./EmersonTest/Dependencies/vue/vue"
//     }
// });


define("EmersonTest/scripts/Main", [
    "DS/PlatformAPI/PlatformAPI",
    "DS/WAFData/WAFData",
	"DS/DataDragAndDrop/DataDragAndDrop",
    "css!EmersonTest/Dependencies/bootstrap/css/bootstrap.css"],
    function (PlatformAPI, WAFData, DataDragAndDrop) {

        var myWidget = {
            ObjectId: "",
            name: "Emerson",
			
            onLoad: function () {
				widget.body.innerHTML = "Widget Training";
                myWidget.getData();

            //     var template = `<div id="app" class="container">
            //     <div class="row">
            //         <div class="col">${this.name}</div>
            //         <div class="col">test 2</div>
            //     </div>
            // </div>`


                widget.setTitle("Emerson Test Widget");
            //     widget.body.innerHTML = template;



            },
            updateWidget: function () {
                alert("In updateWidget");
                myWidget.getData();
            },
            getData: function () {
				
                
                /* let selectedType = widget.getValue("EmersonType");
                let ObjectLimit = widget.getValue("ObjectLimit");
                
                let spaceURL = "https://3dxr21x-d4.emrsn.org:447/3dspace";
                let urlWAF = spaceURL + "/EmersonTestModel/EmersonTestService/getTestData";
				
                 WAFData.authenticatedRequest(urlWAF, {
                    method: "Get",
                    headers: {
                        SecurityContext: "ctx::MCO Coordinator.MMH.GLOBAL"
                    },
                    data: {
                        type: selectedType,
                        limit: ObjectLimit
                    },
                    timeout: 150000,
                    type: "json",
                    onComplete: function (dataResp, headerResp) {
                        debugger;
                        let tableData = `<div class="container"><div class="table-responsive"><table class="table table-striped table-hover">
                    <thead>`;
                        let sampleData = dataResp.data[0];
                        console.log("sampleData", sampleData);
                        let headers = Object.keys(sampleData);
                        for (header of headers) {
                            if (header != "id")
                                tableData += `<th>${header}</th>`;
                        }
                        tableData += `</thead><tbody>`;
                        for (dataJson of dataResp.data) {

                            let rowID = dataJson["id"];
                            delete dataJson["id"];
                            tableData += `<tr id=${rowID} onClick=widget.myWidget.rowOnClick(this.id)>`;
                            for (value of Object.values(dataJson)) {
                                tableData += `<td>${value}</td>`;
                            }
                            tableData += `</tr>`;
                        }

                        tableData += `</thead></table></div></div>`;
                        widget.body.innerHTML = tableData;
                    },
                    onFailure: function (error, responseDOMString, headerResp) {
                        // if (typeof options.onFailure === "function") {
                        //     options.onFailure(error, responseDOMString, headerResp, options.callbackData);
                        // }
                    }
                });  */
                widget.body.innerHTML = `<div id="droppableFrame"><iframe src="https://3dxd10.emerson.com:442/part-management" title="description" style="width: 100vw; height: 100vh;"></iframe></div>`;
				// widget.body.innerHTML = `<button><a href="https://3dxd10.emerson.com:442/part-management" target="_top">FCV</a></button>`;
				
				// Make the frame droppable
				let droppableFrame = widget.body.querySelector('.droppableFrame');
				DataDragAndDrop.droppable( droppableFrame , {  
                drop : function(data) {							    
                   droppableFrame.style.border = "none";
				   console.log("----------------data---------",data);
                },
                enter: function() {	
                   droppableFrame.style.border = "thick dotted #0000FF";
                },
                over: function() {	
                    droppableFrame.style.border = "thick dotted #0000FF";
                }, 
                leave: function() {
                   droppableFrame.style.border = "none";
                }
            }) ;
            }, rowOnClick: function (id) {
                alert(id);
            }

        }
        widget.myWidget = myWidget;
        return myWidget;
    });