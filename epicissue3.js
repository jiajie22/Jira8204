(function ($) {

    $(function () {

    	JIRA.bind(JIRA.Events.NEW_CONTENT_ADDED, function (event, $context, reason) {

    		if ((reason === JIRA.CONTENT_ADDED_REASON.pageLoad || reason === JIRA.CONTENT_ADDED_REASON.panelRefreshed)) {

				AJS.$('#ghx-issues-in-epic-table tr').each(function(){
					console.log('Found epic table');
					var row = this;
					var issueKey = AJS.$(this).attr("data-issuekey");
					AJS.$.getJSON(AJS.contextPath() + '/rest/api/latest/issue/' + issueKey, function(data){
						console.log('Got data for - ' + issueKey);
						var value = data.fields.customfield_10300;
						console.log('Value - ' + value);
						var actions = AJS.$(row).find('td.issue_actions');
						AJS.$(actions).before('<td class="nav">' + value + '</td>');
					});
				});

			}

		});

    });

})(AJS.$); 
