let languages = window.sessionStorage.getItem('langs') || 'vi_VN';
let getLangsInvoke = $.mymethods.getLanguages('MOA10500');
let hostUrl = pageHost;

/*end check server maintain*/
let ivokeActions = {
    invokeCheckoutSacombank: function (datas) {
        /*add new Merchant Checkout STB by 0100632620*/
        let formSubmit = createElement.createNewFormSubmit(datas.host, "POST", "formCheckoutSacombank");

        // get list entries
        let entries = Object.entries(datas);

        // append data submit
        let data = entries.map(([key, val] = entry) => {
            createElement.addNewInputHidden(key, val, formSubmit);
        });

        // submit data to checkout page
        formSubmit.submit();
    },
    processCheckoutPaySTB: function (resp) {
        let TOKEN_QUESTION = resp.TOKEN_QUESTION || '';

        if (resp.returnCode === '0' && TOKEN_QUESTION === 'QUESTION') { // show question token
            showModalForSTB.QUESTIONS_TOKEN(resp.TRANSACTION_ID);

        } else if (resp.returnCode === '0' && TOKEN_QUESTION === 'SHOW_NEW_PAGE') { // redirect to page token
            ivokeActions.invokeFormToNewPageToken(resp.AES256);

        } else if (resp.returnCode === '0' && TOKEN_QUESTION === 'PASS') { // Redirect to page checkout
            ivokeActions.invokeCheckoutSacombank(resp.newCheckoutOrder);

        } else {
            showModalForSTB.ERROR('The module is breaked by : ' + resp.rtnMessage);
        }

        $.mymethods.unLockScreen();
    }, resultQuestTokenForPay: function (result, transaction_id) {
        let langs = window.sessionStorage.getItem('langs') || 'vi_VN';
        let customer = window.sessionStorage.getItem('customer') || '';
        let payments = window.sessionStorage.getItem('payments') || '';

        $.mymethods.runAjax(
            readAjaxUrl + "/CPMO_0100/invokeCheckout",
            $.param({
                'TOKEN_QUESTION': result,
                'TRANSACTION_ID': transaction_id,
                'customer': customer,
                'payments': payments,
                'langs': langs
            }),
            function (resp) {
                ivokeActions.processCheckoutPaySTB(resp);
            },
            false
        );
    }, invokeFormToNewPageToken: function (data) {
        let formSubmit = createElement.createNewFormSubmit("/CPWeb/html/MO/A1/MOA1_0100/MOA10109.html", "GET", "formTokenCheckoutSacombank")
        createElement.addNewInputHidden("DATA", data, formSubmit);
        formSubmit.submit();
        
    }, doCheckServerMaintain: function () {
        fetch(pageHost + '/ZSWeb/api-gate/isMaintain', {
            method: 'GET',
            headers: {
                'Accept': 'application/json',
                'X-Requested-With': 'XMLHttpRequest'
            }
        }).then((response) => {
            if (!response.ok) {
                throw new Error(`HTTP error! Status: ${response.status}`);
            }
            return response.json();
        }).then((body) => {
            let codeResponse = body.code;
            let messageResponse = body.SERVER_STATUS || '';

            $.mymethods.unLockScreen();
            if (codeResponse === '-1') {
                $.mymethods.unLockScreen();
            } else {
                if (messageResponse == 'MUST_MAINTAIN') {
                    showModalForSTB.ERROR(getLangsInvoke.MOA10500_0044[languages]);
                    Array.from(document.getElementsByTagName("button")).forEach(b => {
                        b.addEventListener('click', () => {
                            location.href = serverUrl + '/MO/A1/MOA1_0100/MOA10100.html';
                        });
                    });
                    
                    $('.modal-footer button').hide();

                } else if (messageResponse == 'SYSTEM_ERROR') {
                    showModalForSTB.ERROR(getLangsInvoke.MOA10500_0045[languages]);
                     Array.from(document.getElementsByTagName("button")).forEach(b => {
                        b.addEventListener('click', () => {
                           location.href = serverUrl + '/MO/A1/MOA1_0100/MOA10100.html';
                        });
                    });

					$('.modal-footer button').hide();
                } else {
                    $.mymethods.unLockScreen();
                }
            }
        }).catch((error) => {
             $.mymethods.unLockScreen();
        });
    }
}


$.mymethods.lockScreen();
ivokeActions.doCheckServerMaintain();

let showModalForSTB = {
    ERROR: function (msg) {
        createModal.ERROR_MODAL(msg);
    },
    QUESTIONS_TOKEN: function (transaction_id) {
        createModal.MODAL_TOKEN(transaction_id);
    }
}

let createElement = {
    addNewInputHidden: function (nameField, valueField, formAppend) {
        if (nameField !== 'Host') {
            let newField = document.createElement('input');
            newField.setAttribute('type', 'hidden');
            newField.setAttribute('name', nameField);
            newField.setAttribute('id', nameField);
            newField.setAttribute('value', valueField);

            formAppend.appendChild(newField);
        }
    },
    createNewFormSubmit: function (actions, method, name) {
        let $formCheckoutSacombank = document.createElement('form');
        $formCheckoutSacombank.setAttribute("id", name);
        $formCheckoutSacombank.setAttribute("name", name);
        $formCheckoutSacombank.setAttribute("method", method);
        $formCheckoutSacombank.setAttribute("action", actions);

        document.body.appendChild($formCheckoutSacombank);
        return $formCheckoutSacombank;
    }
}

let createModal = {
    ERROR_MODAL: function (msg) {
        let $divERR = document.createElement('div');
        $divERR.setAttribute("id", "ERR_MODAL");
        let $h4 = document.createElement("h4");
        let $contentErr = document.createElement("p");
        $contentErr.setAttribute("class", "text-gray-2 text-center pt-2");
        $contentErr.setAttribute("id", "contentErr");
        $divERR.appendChild($h4.appendChild($contentErr));

        if (document.contains(document.getElementById("ERR_MODAL"))) {
            document.getElementById("ERR_MODAL").remove();
        }
        document.body.appendChild($divERR);

        modal.create('ERR_MODAL', {
            haveClose: false,
            btn1: {
                Text: '<span class="txtRsc" data-tid="MOA10500_0038">' + getLangsInvoke.MOA10500_0038[languages] + '</span>',
                className: 'btn-warning',
                click: function () { $('#ERR_MODAL').modal('hide'); }
            },
            btnStyle: 'V',
            title: '<h6 class = "text-center"><span class="txtRsc" data-tid="MOA10500_0037">' + getLangsInvoke.MOA10500_0037[languages] + '</span></h6>'
        });
        
        $('#contentErr').empty().append(msg)
        $('#ERR_MODAL').modal('show');
    },
    MODAL_TOKEN: function (transaction_id) {
        $('#SaveCardquestion').empty();
        let $divToken = document.createElement('div');
        $divToken.setAttribute("id", "SaveCardquestion");
        let $newChild = `<div class="row justify-content-center mb-1">
						<div class="col-auto">
						<h5 class = "text-center mb-3"><span class="txtRsc " id = "questionTokenTitle">`+ getLangsInvoke.MOA10500_0039[languages] + `</span></h5>
						<h6 class = "text-justify"><span class="txtRsc text-justify" id = "questionTokenNote" style = "font-weight: 300;">`+ getLangsInvoke.MOA10500_0040[languages] + `</span></h6>	
					</div>
				</div>`;

        $divToken.innerHTML = $newChild;

        if (document.contains(document.getElementById("SaveCardquestion"))) {
            document.getElementById("SaveCardquestion").remove();
        }
        document.body.appendChild($divToken);


        modal.create('SaveCardquestion', {
            haveClose: true,
            btn1: {
                Text: '<span class="txtRsc" data-tid="MOA10500_0042">' + getLangsInvoke.MOA10500_0042[languages] + '</span>',
                className: 'btn-danger',
                click: function () { $('#SaveCardquestion').modal('hide'); ivokeActions.resultQuestTokenForPay("N", transaction_id); }
            },
            btn2: {
                Text: '<span class="txtRsc" data-tid="MOA10500_0041">' + getLangsInvoke.MOA10500_0041[languages] + '</span>',
                className: 'btn-success',
                click: function () { $('#SaveCardquestion').modal('hide'); ivokeActions.resultQuestTokenForPay("Y", transaction_id); }
            },
            btnStyle: 'H',
            title: '<img class="mr-1 ml-1 mt-1" src="../../../../images/cathayGreenTree.png" style="height: 20px; vertical-align: top;">'
        });
        $('#SaveCardquestion').modal('show');
    }
}