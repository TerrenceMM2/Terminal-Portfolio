$(document).ready(() => {
    
    // $("div").attr("data-index", 0).hide();

    var welcome =
    " __          __  _                          \n" +
    " \\ \\        / / | |                         \n" +
    "  \\ \\  /\\  / /__| | ___ ___  _ __ ___   ___ \n" +
    "   \\ \\/  \\/ / _ \\ |/ __/ _ \\\| '_ ` _ \\ / _ \\\n" +
    "    \\  /\\  /  __/ | (_| (_) | | | | | |  __/\n" +
    "     \\/  \\/ \\___|_|\\___\\___/|_| |_| |_|\\___|\n" +
    "                                            \n";

    $("body").terminal("service.py", {
        greetings: welcome        
    });
})