component {
    this.name = "TeamDirectoryApp";
    this.applicationTimeout = createTimeSpan(0, 2, 0, 0);
    this.sessionManagement = false;
    
    function onApplicationStart() {
        return true;
    }
    
    function onRequestStart(targetPage) {
        // CORS headers - allow React frontend to access API
        var response = getPageContext().getResponse();
        response.setHeader("Access-Control-Allow-Origin", "http://localhost:5173");
        response.setHeader("Access-Control-Allow-Methods", "GET, POST, PUT, DELETE, OPTIONS");
        response.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization, X-Requested-With");
        response.setHeader("Access-Control-Allow-Credentials", "true");
        
        // Handle preflight requests
        if (cgi.request_method == "OPTIONS") {
            response.setStatus(200);
            abort;
        }
        
        return true;
    }
    
    function onRequest(targetPage) {
        include arguments.targetPage;
    }
    
    function onError(exception, eventName) {
        // Log error
        writeLog(file="application", text="Error: #exception.message#", type="error");
        
        // Return JSON error for API requests
        cfheader(name="Content-Type", value="application/json");
        writeOutput(serializeJSON({
            "success": false,
            "error": "An error occurred",
            "message": exception.message
        }));
    }
}
