$(document).ready(() => {

    var welcome =
        "  _____                                   __  __       _           _              \n" +
        " |_   _|__ _ __ _ __ ___ _ __   ___ ___  |  \\/  | __ _| |__  _ __ | | _____ _ __  \n" +
        "   | |/ _ \\ '__| '__/ _ \\ '_ \\ / __/ _ \\ | |\\/| |/ _` | '_ \\| '_ \\| |/ / _ \\ '_ \\ \n" +
        "   | |  __/ |  | | |  __/ | | | (_|  __/ | |  | | (_| | | | | | | |   <  __/ | | |\n" +
        "   |_|\\___|_|  |_|  \\___|_| |_|\\___\\___| |_|  |_|\\__,_|_| |_|_| |_|_|\\_\\___|_| |_|\n" +
        "                                                                                  \n";

    var image = "[[@;;;;https://placekitten.com/300/300]]"

    var term = $("<body>").terminal({
        help: () => {
            term.echo("Current commands:\n\n[[b;#00FF41;#222]photo] - View my bio pic.\n[[b;#00FF41;#222]survey] - Answer a quick question.\n\nWe are building more commands.\n")
        },
        photo: () => {
            term.echo("\n[[@;;;;https://media-exp1.licdn.com/dms/image/C4E03AQG5YnRJyIRMdw/profile-displayphoto-shrink_200_200/0?e=1590624000&v=beta&t=irAVrdI7cNW6I0nwPxnr9SFojqT5qlNgpa9WSE13zc4]]\n");
        },
        survey: () => {
            var history = term.history();
            history.disable();
            term.push((command) => {
                if (command.match(/^(y|yes)$/i)) {
                    term.echo("\nThanks so much! :D\n");
                    term.pop();
                    history.enable();
                } else if (command.match(/^(n|no)$/i)) {
                    term.echo("\nI understand. I'll keep working on it. :)\n");
                    term.pop();
                    history.enable();
                }
            }, {
                prompt: "Do you like the site? "
            });
        }
    }, {
        greetings: welcome
    });

    term.echo("Type [[b;#00FF41;#222]help] for a list of available commands.\n")

    // $('<body>').terminal(function (command, term) {
    //     if (command == 'foo') {
    //         var history = term.history();
    //         history.disable();
    //         term.push(function (command) {
    //             if (command.match(/^(y|yes)$/i)) {
    //                 term.echo('execute your command here');
    //                 term.pop();
    //                 history.enable();
    //             } else if (command.match(/^(n|no)$/i)) {
    //                 term.pop();
    //                 history.enable();
    //             }
    //         }, {
    //             prompt: 'Are you sure? '
    //         });
    //     }
    // });

});