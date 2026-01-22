<cfquery name="q" datasource="team_directory">
    SELECT * FROM employees
</cfquery>

<cfdump var="#q#">
