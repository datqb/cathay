/*
 http://www.refulz.com:8082/index.php#tab2?foo=789

 Property    Result
 ------------------------------------------
 host        www.refulz.com:8082
 hostname    www.refulz.com
 port        8082
 protocol    http:
 pathname    index.php
 href        http://www.refulz.com:8082/index.php#tab2
 hash        #tab2
 search      ?foo=789

 var x = $(location).attr('<property>');
 */
//是否讀測試資料
var isTestData = false;
var testSuffix = isTestData ? '.json' : '';
//取得當前網址 http://127.0.0.1:8080
var pageHost = $(location).attr('protocol') + '//' + $(location).attr('host');
//主程式位址
var serverUrl = pageHost + '/CPWeb/html';
//讀資料位址
var readAjaxUrl = isTestData ? pageHost + '/CPWeb/html/' : pageHost + '/CPWeb/servlet/HttpDispatcher';
//圖片位址
var imageUrl = pageHost + '/CPWeb/images/CP';


$.extend({
    //自定頁面link
    mylink : {
        index: serverUrl + '/CP/A1/CPA1_0100/CPA10100.html' + testSuffix,
        
        policyDetail: serverUrl + '/CP/A1/CPA1_0200/CPA10200.html' + testSuffix,
        memberLogin: serverUrl + '/CP/Z0/CPZ0_0100/CPZ00100.html' + testSuffix,
        indexNewPage: serverUrl + '/CP/A1/CPA1_0100/CPA10101.html' + testSuffix,
        memberLogout: serverUrl + '/CP/Z0/CPZ0_0100/CPZ00110.html' + testSuffix,
        CPZ00300: serverUrl + '/CP/Z0/CPZ0_0300/CPZ00300.html' + testSuffix,
        CPZ00310: serverUrl + '/CP/Z0/CPZ0_0300/CPZ00310.html' + testSuffix,
        register: serverUrl + '/CP/Z1/CPZ1_0100/CPZ10100.html' + testSuffix,
        OTP: serverUrl + '/CP/Z1/CPZ1_0100/CPZ10110.html' + testSuffix,
        finishRegister: serverUrl + '/CP/Z1/CPZ1_0100/CPZ10120.html' + testSuffix,
        clauseAndPolicy: serverUrl + '/CP/Z1/CPZ1_0100/CPZ10130.html' + testSuffix,
        forgerAccount: serverUrl + '/CP/Z1/CPZ1_0200/CPZ10200.html' + testSuffix,
        fogUserNameOTP: serverUrl + '/CP/Z1/CPZ1_0200/CPZ10210.html' + testSuffix,
        fogUserFinish: serverUrl + '/CP/Z1/CPZ1_0200/CPZ10220.html' + testSuffix,
        forgerPassword: serverUrl + '/CP/Z1/CPZ1_0300/CPZ10300.html' + testSuffix,
        tmpAccountOTP: serverUrl + '/CP/Z1/CPZ1_0400/CPZ10400.html' + testSuffix,
        pwOTP: serverUrl + '/CP/Z1/CPZ1_0300/CPZ10310.html' + testSuffix,
        forgerPasswordFinish: serverUrl + '/CP/Z1/CPZ1_0300/CPZ10320.html' + testSuffix,
        CPAN0400: serverUrl + '/CP/AN/CPAN_0400/CPAN0400.html' + testSuffix, //訊息中心
        tempAccountFinish: serverUrl + '/CP/Z1/CPZ1_0400/CPZ10410.html' + testSuffix,
        riderQuery: serverUrl + '/CP/A3/CPA3_0100/CPA30100.html' + testSuffix,
        riderDetail: serverUrl + '/CP/A3/CPA3_0100/CPA30101.html' + testSuffix,
        CPA1_0800: serverUrl + '/CP/A1/CPA1_0800/CPA10800.html' + testSuffix,
        CPA2_0110: serverUrl + '/CP/A2/CPA2_0100/CPA20110.html' + testSuffix,
        CPA2_0130: serverUrl + '/CP/A2/CPA2_0100/CPA20130.html' + testSuffix,
        CPA2_0150: serverUrl + '/CP/A2/CPA2_0100/CPA20150.html' + testSuffix,
        CPZZ_0200: serverUrl + '/CP/ZZ/CPZZ_0200/CPZZ0200.html' + testSuffix,
        downloadForHTML: serverUrl + '/CM/downloadForHTML.html' + testSuffix,
        Terms_Privacy: serverUrl + '/CP/Z1/CPZ1_0100/CPZ10140.html' + testSuffix,

        /* 會員網站/APP 線上投保 CPOI Start*/
        CPOI_0100: serverUrl + '/CP/OI/CPOI_0100/CPOI0100.html' + testSuffix,
        CPOI_0200: serverUrl + '/CP/OI/CPOI_0200/CPOI0200.html' + testSuffix,
        CPOI_0300: serverUrl + '/CP/OI/CPOI_0300/CPOI0300.html' + testSuffix,
        CPOI_0400: serverUrl + '/CP/OI/CPOI_0400/CPOI0400.html' + testSuffix,
        CPOI_1100: serverUrl + '/CP/OI/CPOI_1100/CPOI1100.html' + testSuffix,
        CPOI_1110: serverUrl + '/CP/OI/CPOI_1100/CPOI1110.html' + testSuffix,
        CPOI_1200: serverUrl + '/CP/OI/CPOI_1200/CPOI1200.html' + testSuffix,
        CPOI_1210: serverUrl + '/CP/OI/CPOI_1200/CPOI1210.html' + testSuffix,
		CPAT0600: serverUrl + '/CP/AT/CPAT_0600/CPAT0600.html' + testSuffix,
		CPAT0601: serverUrl + '/CP/AT/CPAT_0600/CPAT0601.html' + testSuffix,
        /* G01 */
        CPOI_A100: serverUrl + '/CP/OI/CPOI_A100/CPOIA100.html' + testSuffix,
        /* G02 */
        CPOI_C100: serverUrl + '/CP/OI/CPOI_C100/CPOIC100.html' + testSuffix,
        CPOI_C200: serverUrl + '/CP/OI/CPOI_C200/CPOIC200.html' + testSuffix,
        CPOI_C300: serverUrl + '/CP/OI/CPOI_C300/CPOIC300.html' + testSuffix,
        /* 會員網站/APP 線上投保 End*/
        /* 已下開放活動頁面專用 Start*/
        /* Lucky Darw Start */
        memberLoginLuckyDarw: serverUrl + '/CP/B1/CPB1_0100/CPB10100.html' + testSuffix,
        CPB1_0200: serverUrl + '/CP/B1/CPB1_0200/CPB10200.html' + testSuffix,
        CPB1_0300: serverUrl + '/CP/B1/CPB1_0300/CPB10300.html' + testSuffix,
        CPB1_0400: serverUrl + '/CP/B1/CPB1_0400/CPB10400.html' + testSuffix,
        /* Lucky Darw End */
        /* Cathay Walker Start */
        CPCW_0100: serverUrl + '/CP/CW/CPCW_0100/CPCW0100.html' + testSuffix,
        CPCW_0200: serverUrl + '/CP/CW/CPCW_0200/CPCW0200.html' + testSuffix,
        CPCW_0300: serverUrl + '/CP/CW/CPCW_0300/CPCW0300.html' + testSuffix,
        CPCW_0301: serverUrl + '/CP/CW/CPCW_0300/CPCW0301.html' + testSuffix,
        CPCW_6100: serverUrl + '/CP/CW/CPCW_6100/CPCW6100.html' + testSuffix,
        CPCW_6110: serverUrl + '/CP/CW/CPCW_6100/CPCW6110.html' + testSuffix,
        /* Cathay Walker End */
        /* Merchant Online Start */
        MOA10100: serverUrl + '/MO/A1/MOA1_0100/MOA10100.html' + testSuffix,
        MOA10200: serverUrl + '/MO/A1/MOA1_0200/MOA10200.html' + testSuffix,
        MOA10300: serverUrl + '/MO/A1/MOA1_0300/MOA10300.html' + testSuffix,
        MOA10500: serverUrl + '/MO/A1/MOA1_0500/MOA10500.html' + testSuffix,
        /* Merchant Online End */
        /*Sacombank Token Page Start*/
        MOA10109: serverUrl + '/MO/A1/MOA1_0100/MOA10109.html' + testSuffix,
        /*Sacombank Token Page end*/
        /**/
        /* 已下開放活動頁面專用 End */
		ADA10100: serverUrl + '/AD/A1/ADA1_0100/ADA10100.html' + testSuffix,
		
		/* 已下開放活動頁面專用 End */
		detailServiceProcess: serverUrl + '/CP/A1/CPA1_1100/CPA11100.html' + testSuffix,
		
        historyBack: function(){
            window.history.back();
        },
        historyForward: function(){
            window.history.forward();
        },
        location: function(htmlName, params){
            var url =  $.mylink[htmlName];
            if(params){
                url = url + '?' + $.param( params );
            }

            location.href = url;
        },
        redirectNganLuong: function(url, params){
            if(params){
                url = url + '?' + $.param( params );
            }
            location.href = url;
        }
    },
    //連結主程式
    srcUrl : {
        //doDowloadAPI: 
        doGetOTPRenewal: readAjaxUrl + '/CPAT_0600/get-otp-renewal',
        doConfirmRenewal: readAjaxUrl + '/CPAT_0600/confirm-renewal',
        doLogin: readAjaxUrl + '/CPZ0_0100/login',
        getMultiLangs: readAjaxUrl + '/CPZ0_0100/getMultiLangs',
        doLogout: readAjaxUrl + '/CPZ0_0110/logout',
        CPZ00300_doUpdate: readAjaxUrl + '/CPZ0_0300/update',
        CPZ00300_doCheck: readAjaxUrl + '/CPZ0_0300/check',
        getPolicyNumber: readAjaxUrl + '/CPZ1_0100/getPolicyNumber',
        getUsername: readAjaxUrl + '/CPZ1_0100/getUsername',
        chkTel: readAjaxUrl + '/CPZ1_0100/chkTel',
        chk: readAjaxUrl + '/CPZ1_0100/chk',
        sendOTP: readAjaxUrl + '/CPZ1_0110/sendOTP',
        verifyOTP: readAjaxUrl + '/CPZ1_0110/verifyOTP',
        getResendOTP :readAjaxUrl + '/CPZ1_0110/reSendOTP',
        insertMemberData: readAjaxUrl + '/CPZ1_0110/insert',
        insertMemberData2: readAjaxUrl + '/CPZ1_0110/insert2',
        doUpdateCore:  readAjaxUrl + '/CPZ1_0110/updateCore',
        getPolicyNumber2: readAjaxUrl + '/CPZ1_0200/getPolicyNumber',
        getIsAccount: readAjaxUrl + '/CPZ1_0200/getIsAccount',
        getCustomerData2: readAjaxUrl + '/CPZ1_0200/getCustomerData',
        getSendMail : readAjaxUrl + '/CPZ1_0200/getSendMail',
        getRecaptcha: readAjaxUrl + '/CPZ1_0200/getRecaptcha',
        getIPAddr :readAjaxUrl + '/CPZ1_0200/getIPAddr',
        getIsAccount3: readAjaxUrl + '/CPZ1_0300/getIsAccount',
        checkPhoneNumber: readAjaxUrl + '/CPZ1_0300/checkPhoneNumber',
        getCustomerData3: readAjaxUrl + '/CPZ1_0300/getCustomerData',
        getVerifyPW : readAjaxUrl + '/CPZ1_0300/verifyPWOTP',
        verifyTmpAccOTP: readAjaxUrl + '/CPZ1_0400/verifyOTP',
        doIndexPrompt: readAjaxUrl + '/CPA1_0100/prompt',
        doGetRefundPremium: readAjaxUrl + '/CPA1_0100/getRefundPremium',
        toCheckLogin: readAjaxUrl + '/CPA1_0101/toCheckUsername',
        doIndexNewpage: readAjaxUrl + '/CPA1_0101/prompt',
        doInsertMenuCounts: readAjaxUrl + '/CPA1_0100/doInsertMenuCounts',
        getDetailDatas: readAjaxUrl + '/CPA1_0200/prompt',
        getFormFile: readAjaxUrl + '/CPA1_0300/download',
        checkPwd: readAjaxUrl + '/CPA1_0400/checkPwd',
        updatePwd: readAjaxUrl + '/CPA1_0400/updatePwd',
        CPA1_0400_checkOTP: readAjaxUrl + '/CPA1_0400/verifyOTP',
        CPA1_0400_reSendOTP: readAjaxUrl + '/CPA1_0400/reSendOTP',
        checkUser: readAjaxUrl + '/CPA1_0401/checkUser',
        reSendOTP: readAjaxUrl + '/CPA1_0401/reSendOTP',
        checkOTP: readAjaxUrl + '/CPA1_0401/verifyOTP',
        updateUser: readAjaxUrl + '/CPA1_0401/updateUser',
        CPA1_1000_doSendOTP: readAjaxUrl + '/CPA1_1000/sendOTP',
        CPA1_1000_doVerifyOTP: readAjaxUrl + '/CPA1_1000/verifyOTP',
        doPrint :readAjaxUrl + '/CPA1_0500/doPrint',
        downloadFile:readAjaxUrl + '/CPA1_0500/downloadFile',
        getAuunity : readAjaxUrl + '/CPA1_0600/prompt',
        getMaturity : readAjaxUrl + '/CPA1_0600/getMaturity',
        getClaimRecord : readAjaxUrl + '/CPA1_0700/prompt',
        doQueryClaimRecord : readAjaxUrl + '/CPA1_0700/query',
        doSendOTP : readAjaxUrl + '/CPA1_0800/sendOTP',
        doVerifyOTP : readAjaxUrl + '/CPA1_0800/verifyOTP',
        CPA1_0800_doPrompt: readAjaxUrl + '/CPA1_0800/prompt',
        CPAN0400_doQuery : readAjaxUrl + '/CPAN_0400/query',
        CPAN0400_doUpdate : readAjaxUrl + '/CPAN_0400/update',
        CPAN0400_doRead : readAjaxUrl + '/CPAN_0400/read',
        getRider : readAjaxUrl + '/CPA3_0100/query',
        claimQuery :readAjaxUrl + '/CPA2_0100/query',
        claimModify :readAjaxUrl + '/CPA2_0100/modify',
        claimFileDelete :readAjaxUrl + '/CPA2_0100/delete',
        CPA20110_doQuery : readAjaxUrl + '/CPA2_0110/query',
        CPA20130_doQuery : readAjaxUrl + '/CPA2_0130/query',
        CPA20130_doGetSecondArea : readAjaxUrl + '/CPA2_0130/querySecondArea',
        CPA20130_doPrompt : readAjaxUrl + '/CPA2_0130/prompt',
        CPA20150_doQuery : readAjaxUrl + '/CPA2_0150/query',
        CPZZ0200_doQuery : readAjaxUrl + '/CPZZ_0200/query',
        getEInvoicePDF : readAjaxUrl + '/CPA1_0200/downloadPDF',
        getInvoiceXML : readAjaxUrl + '/CPA1_0200/downloadXML',
        getEInvoice : readAjaxUrl + '/CPA1_0200/showEinvoice',
        CPMV_0100_doPrompt : readAjaxUrl + '/CPMV_0100/prompt',
        /* 已下開放活動頁面專用 */
        /* 抽獎活動 Start*/
        doLuckyDrawLogin : readAjaxUrl + '/CPB1_0100/luckyDrawLogin',
        CPB1_0200_doPrompt : readAjaxUrl + '/CPB1_0200/prompt',
        CPB1_0200_doLuckyDraw : readAjaxUrl + '/CPB1_0200/luckyDraw',
        CPB1_0300_doPrompt : readAjaxUrl + '/CPB1_0300/prompt',
        CPB1_0400_doPrompt : readAjaxUrl + '/CPB1_0400/prompt',
        /* 抽獎活動 End*/
        /* Cathay Walker Start*/
        CPCW_0100_doQuery : readAjaxUrl + '/CPCW_0100/query',
        CPCW_0100_doInsertWeight : readAjaxUrl + '/CPCW_0100/insertWeight',
        CPCW_0200_doQuery : readAjaxUrl + '/CPCW_0200/query',
        CPCW_0300_doPrompt : readAjaxUrl + '/CPCW_0300/prompt',
        CPCW_0300_doSendInviteCode : readAjaxUrl + '/CPCW_0300/sendInviteCode',
        CPCW_0301_doPrompt : readAjaxUrl + '/CPCW_0301/prompt',
        CPCW_6100_doPrompt : readAjaxUrl + '/CPCW_6100/prompt',
        CPCW_6110_doPrompt : readAjaxUrl + '/CPCW_6110/prompt',
        /* 0100582956 query voucher GOTIT Begin */
        doQueryVoucher : readAjaxUrl + '/CPCW_2000/prompt',
        /* 0100582956 query voucher GOTIT End */
        /* Cathay Walker End*/
        /* 線上投保 */
        CPOI_0200_doQuery : readAjaxUrl + '/CPOI_0200/query',
        CPOI_0300_doPrompt : readAjaxUrl + '/CPOI_0300/prompt',
		CPOI_0300_doCheck : readAjaxUrl + '/CPOI_0300/check',
		CPOI_0300_doSendOTP : readAjaxUrl + '/CPOI_0300/sendOTP',
		CPOI_0300_doVerifyOTP : readAjaxUrl + '/CPOI_0300/verifyOTP',
		CPOI_0300_doSearchOCC : readAjaxUrl + '/CPOI_0300/searchOCC',
		CPOI_0300_doChkRefCode : readAjaxUrl + '/CPOI_0300/chkRefCode',
		CPOI_C200_doPrompt : readAjaxUrl + '/CPOI_C200/prompt',
		CPOI_C200_doQuery : readAjaxUrl + '/CPOI_C200/query',
		CPOI_C300_doPrompt: readAjaxUrl + '/CPOI_C300/prompt',
		CPOI_1100_doCheckInfo : readAjaxUrl + '/CPOI_1100/checkInfo',
		CPOI_1110_doSendOTP : readAjaxUrl + '/CPOI_1110/sendOTP',
		CPOI_1110_doVerifyOTP : readAjaxUrl + '/CPOI_1110/verifyOTP',
        CPOI_1200_doPrompt : readAjaxUrl + '/CPOI_1200/prompt',
        CPOI_1210_doPrompt : readAjaxUrl + '/CPOI_1210/prompt',
		doSentAd : readAjaxUrl + '/ADA1_0100/send',
        /*0100582956 Confirm CFS Begin*/
        doConfirmCFS : readAjaxUrl + '/CPAT_0600/confirm-cfs',
        doGetOTPCFS : readAjaxUrl + '/CPAT_0600/get-otp-confirm-cfs',
        doConfirmPromotion : readAjaxUrl + '/CPAT_0600/confirm-promotion',
        doGetOTPPromotion : readAjaxUrl + '/CPAT_0600/get-otp-confirm-promotion',
        /*0100582956 Confirm CFS End*/
        /* Merchant Online Start */
        doSearchFees : readAjaxUrl + '/MOA1_0100/fees',
        doSearchCustomerInfo : readAjaxUrl + '/MOA1_0100/holder',
        doCreateOrder : readAjaxUrl + '/MOA1_0100/order',
        doInvokeAPI : readAjaxUrl + '/MOA1_0100/callPortal',
        doInvokeInternationalAPI : readAjaxUrl + '/MOA1_0100/callInternationalPortal',
        doGetResult : readAjaxUrl + '/MOA1_0100/result',
        /* Merchant Online End */
        /*Sacombank Token Page Start*/
         doListTokenPage : readAjaxUrl + '/MOA1_0109/listTokenPage',
        /*Sacombank Token Page End*/
        /* Shopee Pay Start */
		sppCreateDynamicQr: readAjaxUrl + '/MOA1_0100/sppCreateDynamicQr',
		sppInvalidateQr: readAjaxUrl + '/MOA1_0100/sppInvalidateQr',
		sppCreateOrder: readAjaxUrl + '/MOA1_0100/sppCreateOrder',
		sppDoPayment: readAjaxUrl + '/MOA1_0100/sppDoPayment',
        sppCheckTransactionStatus: readAjaxUrl + '/MOA1_0100/sppCheckStatus',
        sppForNew: readAjaxUrl + '/MOA1_0100/sppForNew',
        /* Shopee Pay End */
		/* Lucky Game */
		doOpenLuckyBox :  readAjaxUrl + '/CPZ2_0100/openGiftBox',
		/* End Lucky Game */
        CPZ00130_doSSO: readAjaxUrl + '/CPZ0_0130/SSO',
        /* CPZ2_0500 Lucky Game */
        doOpen500LuckyBox :  readAjaxUrl + '/CPZ2_0500/openGiftBox',
        /* CPZ2_0600 Lucky Game WinList */
        doQueryWinList :  readAjaxUrl + '/CPZ2_0600/doQueryWinList',
        /*e-policy*/
        getPolicies: readAjaxUrl + '/CPA1_0100/getPolicies',
		/*getlink*/
		getLink: readAjaxUrl + '/CPA2_0000/getlink',
		/*check amount*/
		checkAmount: readAjaxUrl + '/CPA2_0000/checkAmount',
		
		/* Telemedicine */
		loadTelemedicine: readAjaxUrl + '/CPA1_0131/load-telemedicine',
		
		/*0100754989 Confirm new Privacy&Terms*/
		confirmTerms: readAjaxUrl + '/CPZ0_0100/confirmTerms'
		
    },
    //自定導覽條模組
    mynavbar: {
        linkUrl: function() {
            $('#linkIndex').attr("href", $.mylink.index);
            $('#linkEventsLogin').attr("href", $.mylink.eventsLogin);
            $('#linkManagementLogin').attr("href", $.mylink.managementLogin);
            $('#linkEventsQuery').attr("href", $.mylink.eventsQuery);
        },
        include: function(navbarDiv, navScr){
            var _navScr = navScr ? navScr : 'navbarInclude.html';
            _navScr = serverUrl + '/CM/include/' + _navScr;
            $.get(_navScr,function(data){
                $(navbarDiv).html(data);    
            });
        }
    },
    //自定表單模組
    mytable:{
        language : {
            "sProcessing" : "處理中...",
            "sLengthMenu" : "顯示 _MENU_ 項結果",
            "sZeroRecords" : "沒有匹配結果",
            "sInfo" : "顯示第 _START_ 至 _END_ 項結果，共 _TOTAL_ 項",
            "sInfoEmpty" : "顯示第 0 至 0 項結果，共 0 項",
            "sInfoFiltered" : "(由 _MAX_ 項結果過濾)",
            "sInfoPostFix" : "",
            "sSearch" : "搜索:",
            "sUrl" : "",
            "sEmptyTable" : "表中數據為空",
            "sLoadingRecords" : "載入中...",
            "sInfoThousands" : ",",
            "oPaginate" : {
                "sFirst" : "首頁",
                "sPrevious" : "上頁",
                "sNext" : "下頁",
                "sLast" : "末頁"
            },
            "oAria" : {
                "sSortAscending" : ": 以昇冪排列此列",
                "sSortDescending" : ": 以降冪排列此列"
            }
        },
        init: function(_table){
            
        },
        //讀取資料表
        //_scrurl:讀取連線, _table:顯示TABLE, _validator:資料檢核, _params:傳入參數(serialize)
        read: function(_table, _readurl, _params, _validator){
            console.log('read table url : ' +  _readurl + '//params : ' +  _params);
            var flag = _validator ? $('#editForm').validate().form() : true;
            if (!flag) {
                Alert("資料檢核有誤!");
                return false;
            }
            else{
                if(!_readurl){
                    Warning('未傳入讀取資料URL');
                }
                if(_params){
                    _params = '?' + _params;
                }else{
                    _params = '';
                }
                oTable.clear().draw();
                oTable.ajax.url(_readurl + _params);
                oTable.load();
            }
        }
    },
    //自定檢核模組
    myvalidate:{
        //自定義錯誤消息放到哪裏
        errorPlacement : function(error, element) {
            //區分普通輸入框和輸入框組，如果直接用element.next().remove();
            //會錯誤刪除標籤（即輸入框組的<span class=input-group-addon></span>）
            element.nextUntil(".input-group-addon").remove();
            //element.next().remove();//刪除顯示圖標
            element.after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
            element.closest('.form-group').append(error);//顯示錯誤消息提示
        },
        //給未通過驗證的元素進行處理
        highlight : function(element) {
            $(element).closest('.form-group').removeClass('has-success').addClass('has-error has-feedback');
        },
        //驗證通過的處理
        success : function(label) {
            var el=label.closest('.form-group').find("input");
            
            //區分普通輸入框和輸入框組，如果直接用el.next().remove();
            //會錯誤刪除標籤（即輸入框組的<span class="input-group-addon"></span>）
            el.nextUntil(".input-group-addon").remove();
            //el.next().remove();//刪除顯示圖標

            el.after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
            label.closest('.form-group').removeClass('has-error').addClass("has-feedback has-success");
            label.remove();
        },
        /**
         * 清除提示訊息(欄位旁邊的warning)
         * @param id(訊息顯示的DIV ID)
         */
        clearWarningTip : function(id) {    
            if(!id){
                alert('未傳入clearWarningTip的ID');
            }           
            var idAry = [id];
            if(id.indexOf(',') > -1){
                idAry = id.split(',');
            }           
            $.each(idAry,function(){
                $('#' + this).html('');
                $('#' + this).parent().removeClass('error');
            });
        },
        /**
         * 設定提示訊息(欄位旁邊的warning)
         * @param id(訊息顯示的DIV ID)
         * @param msg((訊息顯示的內容)
         */
        setWarningTip : function(id,msg) {
            if(!id){
                alert('未傳入clearWarningTip的ID');
            }   
            $('#' + id).html(msg);
            $('#' + id).parent().addClass('error');
        }
    },
    //自定表單 plugin:jquery-form.js
    myform: {
        defoptions:{
            //提交前回檔(showRequest)
            beforeSubmit: function (responseText, statusText)  {
                var s = eval("("+responseText+")");
                console.info(s);  //從後臺返回的資料
                console.info(statusText);
            }, 
            //提交成功後回檔(showResponse)
            success: function (formData, jqForm, options) {
                var queryString = $.param(formData);
                console.info('所提交資料為: ' + queryString);
                return true;
            },     
            clearForm: true ,   //提交成功後清除所有表單數據
            //url: url,         //覆蓋form中action屬性值
            type: 'post',       //'get' 或  'post', 覆蓋form中method屬性值
            dataType: 'json'   //'xml', 'script', or 'json'
        },
        ajaxSubmit: function(_form, _options){
            if(!_options){
                _options = $.myform.defoptions;
            }
            $(_form).submit(function() {
                // inside event callbacks 'this' is the DOM element so we first
                // wrap it in a jQuery object and then invoke ajaxSubmit
                $(this).ajaxSubmit(_options);
                // !!! Important !!!
                // always return false to prevent standard browser submit and page navigation
                return false;
            });
        },
        //formSerialize
        //將表單序列化（或序列化）成一個查詢字串。這個方法將返回以下格式的字串：name1=value1&name2=value2。
        //可連結（Chainable）：不能， 這個方法返回一個字串。
        formSerialize: function(_form){
            return $(_form).resetForm();
        },
        //fieldSerialize
        //將表單的欄位元素序列化（或序列化）成一個查詢字串。當只有部分表單字段需要進行序列化（或序列化）時，這個就方便了。
        //這個方法將返回以下格式的字串：name1=value1&name2=value2。
        //可連結（Chainable）：不能，這個方法返回一個字串。
        fieldSerialize: function(_field){
            return $(_field).fieldSerialize();
        },
        //fieldValue
        //返回匹配插入陣列中的表單元素值。從0.91版起，該方法將總是以陣列的形式返回資料。
        //如果元素值被判定可能無效，則陣列為空，否則它將包含一個或多於一個的元素值。
        //可連結（Chainable）：不能，該方法返回陣列。
        fieldSerialize: function(_field){
            return $(_field).fieldValue();
        },
        //resetForm
        //通過調用表單元素原有的DOM方法，將表單恢復到初始狀態。 可連結（Chainable）：可以。
        //實例：
        resetForm: function(_form){
            $(_form).resetForm();
        },
        //clearForm
        //清除表單元素。該方法將所有的文本（text）輸入欄位、密碼（password）輸入欄位和文本區域（textarea）欄位置空，清除任何select元素中的選定，
        //以及將所有的單選（radio）按鈕和多選（checkbox）按鈕重置為非選定狀態。 可連結（Chainable）：可以。
        clearForm: function(_form, _table){
            $(_form).clearForm();
            if(_table){
                _table.clear().draw();
            }
        },
        //clearFields
        //清除欄位元素。只有部分表單元素需要清除時才方便使用。 可連結（Chainable）：可以。
        clearFields: function(_field){
            $(_field).clearFields();
        },
        formToObject: function(form){
            var _paramObj = {};
            $.each($(form).serializeArray(), function(_, kv) {
              if (_paramObj.hasOwnProperty(kv.name)) {
                _paramObj[kv.name] = $.makeArray(_paramObj[kv.name]);
                _paramObj[kv.name].push(kv.value);
              }
              else {
                _paramObj[kv.name] = kv.value;
              }
            });
            return _paramObj;
        }
    },
    myincluder:{
        includePath : '',
        include : function(file) {
            var files = typeof file == "string" ? [ file ] : file;
            for (var i = 0; i < files.length; i++) {
                var name = files[i].replace(/^\s|\s$/g, "");
                var att = name.split('.');
                var ext = att[att.length - 1].toLowerCase();
                var isCSS = ext == "css";
                var tag = isCSS ? "link" : "script";
                var attr = isCSS ? " type='text/css' rel='stylesheet' "
                        : " language='javascript' type='text/javascript' ";
                var link = (isCSS ? "href" : "src") + "='" + $.includer.includePath
                        + name + "'";
                if ($(tag + "[" + link + "]").length == 0)
                    document.write("<" + tag + attr + link + "></" + tag+ ">");
            }
        }
    },
    //自定下拉選單
    myselecters: {
        //建立選單OPTION
        createOptions : function(selectobj, fieldName, fieldValue, readurl) {

            var url = readurl?readurl:$.srcUrl.getFieldOptions;
            var _fieldName = fieldName?fieldName:$(selectobj).attr('id');
            var _fieldValue = fieldValue?fieldValue:'';
            var _params = $.param({ 
                    fieldName: _fieldName ,
                    fieldValue: _fieldValue
            });
            //CALL AJAX 取得資料並且組select物件
            $.mymethods.runAjax(
                //讀取資料URL   
                url,
                //要傳給目標的params為id=formId的Form其序列化(serialize)為的值，之內含有name的物件value
                _params,
                //回傳資料處理        
                function(data) {
                    var d = data;
                    if (d != '') {
                        // 加入請選擇
                        $(selectobj).empty().append($('<option></option>').val('').text('請選擇'));
                        $.each(d, function(index, item) {
                             $(selectobj).append($('<option></option>').val(item.value).text(item.text));
                        });
                        $(selectobj).val(_fieldValue).attr('selected', true);
                    } else {
                        alert('下拉選單初始化錯誤！');
                        d = '';
                    }
                }
            );
        },
        //三層連動下拉選單
        createThreeTier:function(selectObj_1, selectObj_2, selectObj_3){
            //建立第一層option 
            $.myselecters.createOptions($(selectObj_1));
            $(selectObj_2).empty().append($('<option></option>').val('').text('------'));
            $(selectObj_3).empty().append($('<option></option>').val('').text('------'));    
            
            $(selectObj_1).change(function(){
                var fieldValue = $.trim($(selectObj_1).find('option:selected').val());
                if(fieldValue.length != 0){
                    $.myselecters.createTwoTier(selectObj_2, selectObj_3, fieldValue);
                }
            });
        },
        //二層連動下拉選單
        createTwoTier:function(selectObj_1, selectObj_2, fieldValue){
            //建立第一層option 
            $.myselecters.createOptions($(selectObj_1), fieldValue);
            $(selectObj_2).empty().append($('<option></option>').val('').text('------'));
            
            $(selectObj_1).change(function(){
                var fieldValue1 = $.trim($(selectObj_1).find('option:selected').val());
                if(fieldValue1.length != 0){
                    $.myselecters.createOptions($(selectObj_2), fieldValue1);
                }
            });
        }
    },
    //自定模組
    mymethods : {
        //取得傳入參數
        getUrlParameters : function() {
            var searchString = window.location.search.substring(1), params = searchString
                    .split("&"), hash = {};

            if (searchString == "")
                return {};
            for (var i = 0; i < params.length; i++) {
                var val = params[i].split("=");
                hash[decodeURI(val[0])] = decodeURI(val[1]);
            }
            return hash;
        },
        //建立日期格式選單
        createDatepicker : function(dateElements) {
            $(dateElements).datepicker({
                format : "yyyy-mm-dd",
                autoclose : true,
                startDate : "today",
                clearBtn : true,
                calendarWeeks : true,
                todayHighlight : true,
                language : 'zh-TW'
            });
        },
        createCheckBox: function(fieldName, checkboxdiv){
            var _params = $.param({ fieldName: fieldName });
            //CALL AJAX 取得資料並且組checkbox物件
            $.mymethods.runAjax(
                //讀取資料URL   
                $.srcUrl.getCheckboxData,
                //要傳給目標的params為id=formId的Form其序列化(serialize)為的值，之內含有name的物件value
                _params,
                //回傳資料處理        
                function (data){
                    var _checkboxObj = data;
                    for(var i=0;i<_checkboxObj.length;i++){
                        var html = '<div class="col-xs-3 checkbox"><label>';
                        html = html + '<input type="checkbox" name="' + fieldName + '[]" value="' + _checkboxObj[i].value + '" id="'+_checkboxObj[i].value+'">' + _checkboxObj[i].text;
                        html = html + '</label></div>';
                        $(checkboxdiv).append(html);
                    }
                }    
            );
        },
        //清除表單
        clearForm : function clearForm(form, table) {

            //var elements = formElement.elements;
            //formElement[0].reset();
            if(table){
                table.clear().draw();
            }
            
            //iterate over all of the inputs for the form
            //element that was passed in
             $(':input', form).each(function() {
                 var type = this.type;
                 var tag = this.tagName.toLowerCase();//normalize case
                 //it's ok to reset the value attr of text inputs,
                 //password inputs, and textareas
                 if (type == 'text' || type == 'password' || tag == 'textarea' || tag == 'hidden')
                        this.value ="";
                 //checkboxes and radios need to have their checked state cleared
                 //but should *not* have their 'value' changed
                 else if (type == 'checkbox' || type == 'radio')
                     this.checked = false;
                 //select elements need to have their 'selectedIndex' property set to -1
                 //(this works for both single and multiple select elements)
                 else if (tag == 'select')
                     this.selectedIndex = -1;
             });
        },
        //errorBackPage : 失敗時回去的頁面(for 活動頁面)
        runAjax: function(url, params, successCallBack, isAsync, errorBackPage){
            //console.log('run ajax url : ' +  url + '//params : ' +  params);
            return $.ajax({
                type:"POST", //指定http參數傳輸格式為POST                     
                url: url,//請求目標的url，可在url內加上GET參數，如 www.xxxx.com?xx=yy&xxx=yyy
                contentType : "application/x-www-form-urlencoded; charset=utf-8",
                data: params, //要傳給目標的params為id=formId的Form其序列化(serialize)為的值，之內含有name的物件value                   
                dataType: "json",   //目標url處理完後回傳的值之type，此列為一個JSON Object
                                    //Ajax成功後執行的function，response為回傳的值                   
                                    //此範列回傳的JSON Object的內容格式如右所示: {userName:XXX,uswerInterest:[y1,y2,y3,...]}   
                async: (isAsync == false) ? false : true, //isAsync設定，true=非同步，false=同步                     
                success : function(response){
                    //在id=ajaxResponse的fieldset中顯示Ajax的回傳值
                    if(!response.returnCode){
                        var msgTitle = response.msgTitle || '';
                        var msgDesc = response.msgDesc || '';
                        if(msgTitle || msgDesc){
                            alert(msgTitle + '\n' + msgDesc);
                        }
                        
                        //alert(response.msg);
                        window.sessionStorage.removeItem("memberObj");
                        $.mylink.location(errorBackPage ? errorBackPage : 'memberLogin');
                        return false;
                    }
                    //TODO console.log('response>>>'+JSON.stringify(response));
                    //$.mymethods.unLockScreen();/*關閉COVER PAGE*/
                    if(successCallBack){
                        //TODO successCallBack(response.data);
                        try {
                            successCallBack(response);
                        } catch(e) {
                            $.mymethods.unLockScreen();
                            throw e;
                        }
                    }
                },
                //Ajax失敗後要執行的function，此例為印出錯誤訊息
                error:function(xhr, ajaxOptions, thrownError){
                    //$.mymethods.unLockScreen();/*關閉COVER PAGE*/
                    window.sessionStorage.removeItem("memberObj");
                    alert("發生錯誤: " + xhr.status+"\n"+thrownError);
                    $.mylink.location('memberLogin');
                },
                beforeSend : function(){
                    $.mymethods.lockScreen();/*開啟COVER PAGE*/
                },
                complete : function(){
                    $.mymethods.unLockScreen();/*關閉COVER PAGE*/
                }
            }); 
        },
        validateRule:function(form, rules, messages, submitHandler){
            $(form).validate({
                errorElement : 'span',
                errorClass : 'help-block',
                debug: false, //調試模式取消submit的默認提交功能   
                focusInvalid: false, //當為false時，驗證無效時，沒有焦點響應 
                submitHandler: submitHandler,
                rules:rules,
                messages:messages,
                //自定義錯誤消息放到哪裏
                errorPlacement : function(error, element) {
                    //區分普通輸入框和輸入框組，如果直接用element.next().remove();
                    //會錯誤刪除標籤（即輸入框組的<span class=input-group-addon></span>）
                    element.nextUntil(".input-group-addon").remove();
                    //element.next().remove();//刪除顯示圖標
                    element.after('<span class="glyphicon glyphicon-remove form-control-feedback" aria-hidden="true"></span>');
                    element.closest('.form-group').append(error);//顯示錯誤消息提示
                },
                //給未通過驗證的元素進行處理
                highlight : function(element) {
                    $(element).closest('.form-group').addClass('has-error has-feedback');
                },
                //驗證通過的處理
                success : function(label) {
                    var el=label.closest('.form-group').find("input");
                    
                    //區分普通輸入框和輸入框組，如果直接用el.next().remove();
                    //會錯誤刪除標籤（即輸入框組的<span class="input-group-addon"></span>）
                    el.nextUntil(".input-group-addon").remove();
                    //el.next().remove();//刪除顯示圖標

                    el.after('<span class="glyphicon glyphicon-ok form-control-feedback" aria-hidden="true"></span>');
                    label.closest('.form-group').removeClass('has-error').addClass("has-feedback has-success");
                    label.remove();
                }
            });
        },
        //取得多國語系文字
        //pageID=頁面代號
        getLanguages: function(sourceID){
            //var localSession = window.localStorage.getItem(sourceID);

            //if (localSession == null || localSession == 'undefined') {
                var rtncode = '0';
                var msg = '';
                
                $.mymethods.runAjax(
                    $.srcUrl.getMultiLangs,
                    $.param({ sourceID: sourceID }),
                    function (resp){                        
                        window.localStorage.setItem(sourceID, resp.data);
                        rtncode = resp.returnCode;
                        msg = resp.msg;
                        //$.mymethods.unLockScreen();/*關閉COVER PAGE*/
                    },
                    false
                );
                
                if (rtncode == -1){
                    return msg;
                }
            //}
            
            return JSON.parse(window.localStorage.getItem(sourceID));
        },
        translate: function(languages, msgCode, language) {
            var defaultText = '???'+msgCode+'???';
            var obj = languages[msgCode];
            var text;
            
            if(!!!obj) {
                return defaultText;
            }
            
            text = obj[language];
            
            if(!!!text || !!!text.length) {
                return defaultText;
            }
            
            return text;
        },
        //寫入每頁Menu資訊        
        InsertMenuCounts: function(sourceID,sourceName){
            var rtncode = '0';
            var msg = '';
            
            $.mymethods.runAjax(
                $.srcUrl.doInsertMenuCounts,
                $.param({ sourceID: sourceID ,sourceName: sourceName }),
                function (resp){                        
                    window.localStorage.setItem(sourceID, resp.data);
                    rtncode = resp.returnCode;
                    msg = resp.msg;
                    //$.mymethods.unLockScreen();/*關閉COVER PAGE*/
                },
                false
            );
            
            if (rtncode == -1){
                return msg;
            }
        },
        /*鎖螢幕*/
        lockScreen : function(){
            var id = 'lockScreenDiv_'+new Date().getTime();
            var $body = $('body');
            var $lsDivs = $body.children('div[id^="lockScreenDiv"]');
            var $lsDiv = $('<div>').attr({'id': id});
            
            if(!!$lsDivs.length) {
                var $first = $lsDivs.first();
                
                if(!$first.hasClass('b-loading is-mask is-fixed')) {
                    $first.attr('class', 'b-loading is-mask is-fixed')
                        .append($('<i>').attr({'class':'m-icon m-icon-cathaylife'}));
                }
                
                id = $first.attr('id');
            } else {
                $lsDiv.attr('class', 'b-loading is-mask is-fixed')
                    .append($('<i>').attr({'class':'m-icon m-icon-cathaylife'}));
            }
            
            $body.append($lsDiv);
            
//          $("div[id^='lockScreenDiv']").remove();
//          var screenDiv = $('<div>').attr({'id':'lockScreenDiv', 'class': 'b-loading is-mask is-fixed'});
//          screenDiv.append($('<i>').attr({'class':'m-icon m-icon-cathaylife'}));
//          $("body").append(screenDiv);
            return id;
        },
        /*解鎖螢幕*/
        unLockScreen:function(){
            var $body = $('body');
            var $lsDiv = $body.children('div[id^="lockScreenDiv"]').first();
            var id = $lsDiv.attr('id');
            
            $lsDiv.remove();
            $body.children('div[id^="lockScreenDiv"]').first().attr('class', 'b-loading is-mask is-fixed')
                .append($('<i>').attr({'class':'m-icon m-icon-cathaylife'}));
            
//          $("div[id^='lockScreenDiv']").remove();
            return id;
        },
        getCurrLang : function(){
            var sessionLang = window.sessionStorage.getItem("langs");
            if(sessionLang && (sessionLang=='vi_VN' || sessionLang=='en_US')){
                return sessionLang;
            }
            //若語言不合法，就吃預設
            window.sessionStorage.setItem('langs', 'vi_VN');
            return 'vi_VN';
        },
        //金額欄位3位1撇，去除小數以下位數
        numberWithComma : function(data) {
            if (data.indexOf('.') > 0) {
                var tmpData = data.split('.');
                data = tmpData[0];
            }
            
            return (data).toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")
        },
        //頁面語系資源
        resource : '',
        //依取得的語系內容，設定頁面語系資源
        set : function(lib, lang) {
            var result = {};
            if (typeof lib == 'object') {
                for (var id in lib) {
                    var txtObj = lib[id];
                    result[id] = (lang in txtObj ? txtObj[lang] : undefined);
                }
            }
            this.resource = result;
        },
        has : function(id) {
            return (this.resource != undefined && id in this.resource);
        },
        //取得語系文字
        get : function(id) {
            return (this.has(id)) ? this.resource[id] : '---';
        },
        //置換畫面上的文字
        updateUIText : function() {
            $('.txtRsc').each(function(index, element) {
                var $self = $(element), 
                this_id = $self.data('tid');
                if ($.mymethods.has(this_id)) {
                    $self.html($.mymethods.get(this_id.toString()));
                }
            });
        },
        //開啟"Help"說明文件
        openHelpDoc : function(elem, langs) {
            var docName = langs == 'vi_VN' ? '1. Login_VN.PDF' : '1. Login_EN.PDF';
            $('a[id="' + elem.id + '"]').attr({'href':'../../../../T&C_pdf/' + docName, 'target':'_blank', 'style':'color: #49B234;'});
        },
        /*20230830 0100822366 add function for put file pdf privacy*/
        openHelpDocPrivacy : function (elem, langs) {
			var docName = langs == 'vi_VN' ? '2. Privacy_VN.pdf' : '2. Privacy_EN.pdf';
            $('a[id="' + elem.id + '"]').attr({'href':'../../../../T&C_pdf/' + docName, 'target':'_blank', 'style':'color: #49B234;'});
		},
		/* 20230830 0100822366 add function for put file pdf terms*/
		openHelpDocTerms : function (elem, langs) {
			var docName = langs == 'vi_VN' ? '3. Terms_VN.pdf' : '3. Terms_EN.pdf';
            $('a[id="' + elem.id + '"]').attr({'href':'../../../../T&C_pdf/' + docName, 'target':'_blank', 'style':'color: #49B234;'});
		},
        //Help Merchant Online
        openHelpDoc2 : function(elem, langs) {
            var docName = langs == 'vi_VN' ? 'Huong dan su dung merchant.pdf' : 'Instruction for use merchant.pdf';
            $('a[id="' + elem.id + '"]').attr({'href':'../../../../T&C_pdf/' + docName, 'target':'_blank', 'style':'color: #49B234;'});
        },
        //Help Online Insurance document
        openHelpDocOnlineInsurance : function(elem, langs) {
            var docName = langs == 'vi_VN' ? 'Huong dan mua Bao hiem Tu ky tai nan ngan han truc tuyen.pdf' : 'Short-term accident online insurance guideline.pdf';
            $('a[id="' + elem.id + '"]').attr({'href':'../../../../T&C_pdf/' + docName, 'target':'_blank', 'style':'color: #49B234;'});
        },
        openHelpDocOnlineInsuranceG02 : function(elem, langs) {
            var docName = langs == 'vi_VN' ? 'Huong dan mua Bao hiem Benh ung thu truc tuyen.pdf' : 'Cancer online insurance guideline.pdf';
            $('a[id="' + elem.id + '"]').attr({'href':'../../../../T&C_pdf/' + docName, 'target':'_blank', 'style':'color: #49B234;'});
        },
        openHelpDocOnlineInsuranceInviteCode : function(elem, langs) {
            var docName = langs == 'vi_VN' ? 'CHUONG TRINH GIOI THIEU NGAY, NHAN QUA HAY.pdf' : 'REFER FRIENDS, EARN REWARDS PROGRAM.pdf';
            $('a[id="' + elem.id + '"]').attr({'href':'../../../../T&C_pdf/' + docName, 'target':'_blank', 'style':'color: #49B234;'});
        },
        openHelpDocCPA10100 : function(id, langs) {
            var docName = langs == 'vi_VN' ? '2. My Policy (VN).pdf' : '2. My Policy (EN).pdf';
            $('a[id="' + id + '"]').attr({'href':'../../../../T&C_pdf/' + docName, 'target':'_blank', 'style':'color: #49B234;'});
        },
        openHelpDocCPA10600 : function(id, langs) {
            var docName = langs == 'vi_VN' ? '7. Benefit Record (VN).pdf' : '7. Benefit Record (EN).pdf';
            $('a[id="' + id + '"]').attr({'href':'../../../../T&C_pdf/' + docName, 'target':'_blank', 'style':'color: #49B234;'});
        },
        openHelpDocCPA10700 : function(id, langs) {
            var docName = langs == 'vi_VN' ? '6. Claim Record (VN).pdf' : '6. Claim Record (EN).pdf';
            $('a[id="' + id + '"]').attr({'href':'../../../../T&C_pdf/' + docName, 'target':'_blank', 'style':'color: #49B234;'});
        },
        openHelpDocCPA10800 : function(id, langs) {
            var docName = langs == 'vi_VN' ? '8. Personal info (VN).pdf' : '8. Personal info (EN).pdf';
            $('a[id="' + id + '"]').attr({'href':'../../../../T&C_pdf/' + docName, 'target':'_blank', 'style':'color: #49B234;'});
        },
        openHelpDocCPA20100 : function(id, langs) {
            var docName = langs == 'vi_VN' ? '4. Claim Request (VN).pdf' : '4. Claim Request (EN).pdf';
            $('a[id="' + id + '"]').attr({'href':'../../../../T&C_pdf/' + docName, 'target':'_blank', 'style':'color: #49B234;'});
        },
        openHelpDocCPA40100 : function(id, langs) {
            var docName = langs == 'vi_VN' ? '3. POS Request (VN).pdf' : '3. POS Request (EN).pdf';
            $('a[id="' + id + '"]').attr({'href':'../../../../T&C_pdf/' + docName, 'target':'_blank', 'style':'color: #49B234;'});
        },
        openHelpDocCPA40300 : function(id, langs) {
            var docName = langs == 'vi_VN' ? '5. POS Record (VN).pdf' : '5. POS Record (EN).pdf';
            $('a[id="' + id + '"]').attr({'href':'../../../../T&C_pdf/' + docName, 'target':'_blank', 'style':'color: #49B234;'});
        }
    }
});

////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

var Modal = (function ($) {
    var $body = $(document.body),
        BackDrop = (function () {
            var $backDrop = null,
                count = 0,
                create = function () {
                    $backDrop = $('<div class="modal-backdrop fade in"></div>').appendTo($body);
                };

            return {
                show: function () {
                    !$backDrop && create();
                    $backDrop.prevObject[0].style.display = 'block';
                    count++;
                },
                hide: function () {
                    count--;
                    if (!count) {
                        $backDrop.remove();
                        $backDrop = undefined;
                    }
                }
            };
        })(),
        getTpl = function () {
            return ['<div class="modal fade" data-backdrop="false" data-show="false" data-keyboard="false">',
                '    <div class="modal-dialog">',
                '        <div class="modal-content">',
                '            <div class="modal-header">',
                '                <h4 class="modal-title"></h4>',
                '            </div>',
                '            <div class="modal-body"></div>',
                '            <div class="modal-footer"></div>',
                '        </div>',
                '    </div>',
                '</div>'].join("");
        },
        initModal = function (that, opts) {
            var $modal = createModal(that);
            that.setTitle(opts.title, true);
            that.setContent(opts.content);
            that.addButtons(opts.buttons);
            that.setWidth(opts.width);
            bindHandler(that, opts);
            $modal.modal();//調用bootstrap的Modal組件
            $modal.trigger('contentReady');
        },
        createModal = function (that) {
            var $modal = that.$modal = $(getTpl()).appendTo($body);
            that.$modalTitle = $modal.find('.modal-title');
            that.$modalheader = $modal.find('.modal-header');
            that.$modalBody = $modal.find('.modal-body');
            that.$modalFooter = $modal.find('.modal-footer');
            return $modal;
        },
        bindHandler = function (that, opts) {
            var $modal = that.$modal;
            typeof opts.onContentChange === 'function' && $modal.on('contentChange', $.proxy(opts.onContentChange, that));
            typeof opts.onContentReady === 'function' && $modal.on('contentReady', $.proxy(opts.onContentReady, that));
            typeof opts.onModalShow === 'function' && $modal.on('modalShow', $.proxy(opts.onModalShow, that));
            typeof opts.onModalHide === 'function' && $modal.on('modalHide', $.proxy(opts.onModalHide, that));
            $modal.on('show.bs.modal', function () {
                $modal.trigger('modalShow');
            });
            $modal.on('hidden.bs.modal', function () {
                $modal.trigger('modalHide');
            });
        },
        getDefaultBtnCallbackProxy = function (callbackName) {
            return function () {
                var opts = this.options,
                    callback = opts[callbackName] && typeof opts[callbackName] === 'function' ? opts[callbackName] : '';

                return callback && callback.apply(this, arguments);
            };
        };

    function ModalDialog(options) {
        this.options = this.getOptions(options);
        this.$modal = undefined;
        this.$modalTitle = undefined;
        this.$modalheader = undefined;
        this.$modalBody = undefined;
        this.$modalFooter = undefined;
        this.state = undefined;
    }

    ModalDialog.defaults = {
        title: '',
        content: '',
        width: 600,
        buttons: [
            {
                html: '<button type="button" class="btn btn-sm btn-primary btn-ok">確定</button>',
                selector: '.btn-ok',
                callback: getDefaultBtnCallbackProxy('onOk')
            },
            {
                html: '<button type="button" class="btn btn-sm btn-default btn-cancel">取消</button>',
                selector: '.btn-cancel',
                callback: getDefaultBtnCallbackProxy('onCancel')
            }
        ],
        onOk: $.noop,
        onCancel: $.noop,
        onContentReady: $.noop,
        onContentChange: $.noop,//content替換之後的回檔
        onModalShow: $.noop,
        onModalHide: $.noop//modal關閉之後的回檔
    };

    $.extend(ModalDialog.prototype, {
        getOptions: function (options) {
            return $.extend({}, ModalDialog.defaults, options || {});
        },
        setOptions: function (options) {
            return $.extend(this.options, options || {});
        },
        open: function (state) {
            this.state = state;
            !this.$modal && initModal(this, this.options);
            BackDrop.show();
            this.$modal.modal('show');
        },
        hide: function () {
            var $modal = this.$modal;
            $modal.modal('hide');
            $modal.one('hidden.bs.modal', function () {
                BackDrop.hide();
            });
        },
        setTitle: function (title, html) {
            this.$modalTitle[html === true ? 'html' : 'text'](title);
        },
        setContent: (function () {
            var init = true;
            return function (content) {
                this.$modalBody.html(content);
                !init ? this.$modal.trigger('contentChange') : (init = false);
            };
        })(),
        addButtons: function (buttons) {
            var _buttons = !$.isArray(buttons) ? [] : buttons,
                that = this,
                htmlS = [];
            _buttons.forEach(function (btn) {
                htmlS.push(btn.html);

                btn.selector && that.$modal.on('click', btn.selector, $.proxy(function (e) {

                    var self = this,
                        $btn = $(e.currentTarget);

                    //先禁用按鈕
                    $btn[0].disabled = true;

                    var callback = typeof btn.callback === 'function' ? btn.callback : '',
                        ret = callback && callback.apply(self, arguments);

                    if (ret === false) {
                        $btn[0].disabled = false;
                        return;
                    }
                    if (typeof(ret) === 'object' && 'done' in ret && typeof ret['done'] === 'function') {
                        //非同步任務只有在成功回檔的時候關閉Modal
                        ret.done(function () {
                            that.hide();
                        }).always(function () {
                            $btn[0].disabled = false;
                        });
                    } else {
                        $btn[0].disabled = false;
                        that.hide();
                    }

                }, that));
            });

            this.$modalFooter.prepend($(htmlS.join('')));
        },
        hideButton: function (selector) {
            selector && this.$modalFooter.find(selector).hide();
        },
        showButton: function (selector) {
            selector && this.$modalFooter.find(selector).show();
        },
        setWidth: function (width) {
            this.$modal.find('.modal-dialog').css('width', width);
        }
    });

    //針對這些方法統一加個校驗
    ['setTitle', 'setContent', 'addButtons', 'hideButton', 'showButton', 'setWidth'].forEach(function (name) {
        var _old = ModalDialog.prototype[name];
        ModalDialog.prototype[name] = function () {
            if (!arguments.length || !this.$modal) {
                return;
            }
            return _old.apply(this, arguments);
        };
    });

    return ModalDialog;
})(jQuery);

var Alert, Confirm, Success, Warning, Error;
(function () {
    var modal=null,
        typeTitles = function(type){
            if('alert' == type){
                return '訊息提示';
            }else if('confirm' == type){
                return '確認提示';
            }else if('success' == type){
                return '成功提示';
            }else if('warning' == type){
                return '警告提示';
            }else if('error' == type){
                return '錯誤提示';
            }
        },
        getClass= function(type){
            if('alert' == type){
                return {'background-color': '#5bc0de'};
            }else if('confirm' == type){
                return {'background-color': '#428bca'};
            }else if('success' == type){
                return {'background-color': '#5cb85c'};
            }else if('warning' == type){
                return {'background-color': '#f0ad4e'};
            }else if('error' == type){
                return {'background-color': '#d9534f'};
            }
        },
        Proxy = function (type) {
            var _isAlert = 'confirm' == type ? false : true;
            return function () {
                if (arguments.length != 1) return;
                var msg = typeof arguments[0] === 'string' && arguments[0] || arguments[0].msg || '',
                    title = typeof arguments[0] === 'string' && arguments[0] || arguments[0].title || '',
                    onOk = typeof arguments[0] === 'object' && typeof arguments[0].onOk === 'function' && arguments[0].onOk,
                    onCancel = typeof arguments[0] === 'object' && typeof arguments[0].onCancel === 'function' && arguments[0].onCancel,
                    width = typeof arguments[0] === 'object' && arguments[0].width || 600,
                    _onModalShow = function () {                    
                        this.setWidth(width);
                        this.setContent(msg);
                        this[(_isAlert ? 'hide' : 'show') + 'Button']('.btn-cancel');
                        this.setTitle('<img src="' + imageUrl + '/' + type + '.png" height="25" width="25">' + typeTitles(type), true);
                       
                        this.$modalheader.css(getClass(type));
                    },
                    _onModalHide = function () {
                        this.setContent('');
                    };

                //延遲初始化modal
                if(!modal) {
                    modal = new Modal({
                        'title': '<img src="' + imageUrl + '/' + type + '.png" height="25" width="25">' + typeTitles(type),
                        onModalShow: _onModalShow,
                        onModalHide: _onModalHide,
                        onContentReady: function(){
                            this.$modalBody.css({
                                'padding-top': '30px',
                                'padding-bottom': '30px'
                            });
                            this.$modalheader.css(getClass(type));
                        }
                    });
                } else {
                    var $modal = modal.$modal;
                    //如果modal已經初始化則需要重新監聽事件
                    $modal.off('modalShow modalHide');
                    $modal.off('modalShow modalHide');
                    $modal.on('modalShow', $.proxy(_onModalShow, modal));
                    $modal.on('modalHide', $.proxy(_onModalHide, modal));
                }

                modal.setOptions({
                    onOk: onOk || $.noop,
                    onCancel: onCancel || $.noop
                });

                modal.open();
            };
        };

    Alert = Proxy('alert');
    Confirm = Proxy('confirm');
    Success = Proxy('success'); 
    Warning = Proxy('warning'); 
    Error = Proxy('error');
})();