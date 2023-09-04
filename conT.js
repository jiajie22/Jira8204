(function ($) {
    $(function () {
        /**
         * Binding is required for link such as
         * http://localhost:8080/jira/projects/JRA/issues/JRA-4?filter=allopenissues
         */
        JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (event, $context, reason) {
            console.log("1st context : " + $context)
            if ((reason === JIRA.CONTENT_ADDED_REASON.pageLoad || reason === JIRA.CONTENT_ADDED_REASON.panelRefreshed)) {
                console.log("2nd context in IF innerHTML : " + $context.find("label[for='customfield_10300']").text)
                console.log("documentt innerHTML : " + document.querySelector("label[for='customfield_10300']").text)
                /*$context.querySelector("label[for='customfield_10300']").textContent = 'Delivery value Frag';*/
            }
        });
        
    });
})(AJS.$);


/*
(function ($) {
    $(function () {

        if(document.querySelector("label[for='customfield_10300']") !== null){
            document.querySelector("label[for='customfield_10300']").textContent = 'Test Delivery value'
        }
        
    });
})(AJS.$);
*/